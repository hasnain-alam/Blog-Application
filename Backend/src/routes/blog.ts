import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
// import {z} from 'zod';
// import { zValidator } from '@hono/zod-validator'
import { updateBlog,createBlog } from "@rashidziya/medium-common";
import { authMiddleware } from "../authMiddleware";
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
  Variables:{
    'userId':string
  }
}>();


// blogRouter.use('/*',async (c,next)=>{
//     // get the header
//     const jwt=c.req.header('Authorization');
//     if(!jwt){
//       c.status(403)
//       return c.json({
//         error:'Authorization header missing '
//       })
//     }
//     const tokenToVerify=jwt.split(' ')[1];
//     // verify the header 
//     const decodedPayload=await verify(tokenToVerify,c.env.JWT_SECRET);
//     if(!decodedPayload){
//       c.status(403);
//       return c.json({
//         error:'unAuthorized'
//       })
//     }
   
//     c.set('userId' , decodedPayload.id);
//     await next();
//     // if it is right the procedd otherwise return response accordingly
//   })
  
  blogRouter.post('/',authMiddleware, async (c) => {
    // in this route user will create a post/blog
    // which contains name,title,content,authorId
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const userId=c.get('userId')
    const body=await c.req.json();
    const {success}=createBlog.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        message:"Invalid input's"
      })
    }
    // Zod Validation Should be Done here
    try {
      const post=await prisma.post.create({
        data:{
          title:body.title,
          content:body.content,
          authorid:userId,
        }
      })
      return c.json({
        message:'Post Created !',
        post:post
      })
    } catch (error) {
      c.status(403)
      return c.json({
        error:'Something is up while Creating Post !'
      })
    }
  });
  
  blogRouter.put('/update',authMiddleware,async (c) =>{
    // update the blog   | password, title, content
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    // const userId=c.get('userId');
    const body=await c.req.json();
    // zod validation should be done here
    const {success}=updateBlog.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        message:"Invalid input's"
      })
    }
    try {
      const post=await prisma.post.update({
        where:{
          id:body.id,
        },
        data:{
          title:body.title,
          content:body.content
        },
      });
      return c.json({
        message:'Post is Updated Successfully !',
        updatedPost:post
      })  
    } catch (error) {
      c.status(403)
      return c.json({
        error:'Somthing is up While updating the Blog/Post !'
      })
    }
  })
  
  blogRouter.get('/getPost/:id',authMiddleware,async (c) => {
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const userId=c.get('userId');
    const id=c.req.param("id");
    try {
      const postWithId=await prisma.post.findMany({
        where:{
          id:id,
        },
        select:{
          id:true,
          title:true,
          content:true,
          createdAt:true,
          author:{
            select:{
              name:true
            }
          }
        }
      });
      
      return c.json({
        post:postWithId
      })
    } catch (error) {
      c.status(403)
      return c.json({
        error:'Something is up While Fetching DB'
      })
    }
  });
  
  blogRouter.get('/allPost', async (c) => {
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const allPosts=await prisma.post.findMany({
      select:{
        title:true,
        content:true,
        id:true,
        createdAt:true,
        author:{
          select:{
            name:true
          }
        }
      }
    });
    return c.json({
      post:allPosts
    })
    
  });
  
  // route for get all post of particular user
  blogRouter.get('/userPost',async(c)=>{
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const userId=c.get('userId');
    try{
      const postOfUser=await prisma.post.findMany({
        where:{
          authorid:userId
        }
      });
      return c.json({
        usersPost:postOfUser
      });
    }catch(err){
      c.status(403)
      return c.json({
        error:"Something is up While Getting User's Detail"
      })
    }
  })