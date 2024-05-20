import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
import { Hono } from 'hono';
import { signinInput,signupInput } from '@rashidziya/medium-common';
import { authMiddleware } from '../authMiddleware';
export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
    variables:{
      'userId':string
    }
}>();

userRouter.post('/signup',async (c) => {

    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body=await c.req.json();
    // Validation through zod
    console.log(body);
    const {success} = signupInput.safeParse(body);
    console.log(success);
    if(!success){
      c.status(411)
      return c.json({
        message:"incorrect input type !"
      })
    }
    const userExist=await prisma.user.findUnique({
      where:{
        email:body.email
      }
    });
  
    if(userExist){
      c.status(403)
      return c.json({
        error:"user Already Exists !"
      })
    }
    try{
      const user=await prisma.user.create({
        data:{
          name:body.name,
          email:body.email,
          password:body.password,
        }
      })
      const jwt=await sign({id:user.id},c.env.JWT_SECRET);
      return c.json({
        messgage:'user is Created !',
        token:jwt
      })
    }catch(e){
      c.status(500)
      c.json({
        error:'Error While Signing-up !'
      })
    }
  })
  
  userRouter.post('/signin',async (c) => {
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body=await c.req.json();
    const {success} = signinInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        message:"Incorrect inputs"
      })
    }
    
    // console.log(body);
    try {
      const userDetails=await prisma.user.findUnique({
        where:{
          email:body.email
        }
      })
      if(!userDetails){
        c.status(403)
        return c.json({
          message:'User Does not Exist'
        })
      }
      const jwt=await sign({id:userDetails.id},c.env.JWT_SECRET);
      return c.json({
        message:'User Logged In !',
        token:jwt
      });
    } catch (error) {
      c.status(401);
      return c.json({
        errro:'Something is up While Sign IN !'
      });
    }
  });
  
  userRouter.get('/getUser',authMiddleware,async (c)=>{
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    //@ts-ignore
    const userId=c.get('userId');
    const user=await prisma.user.findFirst({
      where:{
        id:userId,
      },
      select:{
        name:true,
        id:true
      }
    });
    return c.json({
      User:user
    })
  })