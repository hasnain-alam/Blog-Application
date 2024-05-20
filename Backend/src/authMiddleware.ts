import { Context, Next } from "hono";
import { verify } from "hono/jwt";

export const authMiddleware=async (c:Context,next:Next)=>{
    const jwt=c.req.header('Authorization');
    if(!jwt){
      c.status(403)
      return c.json({
        error:'Authorization header missing '
      })
    }
    const tokenToVerify=jwt.split(' ')[1];
    // verify the header 
    const decodedPayload=await verify(tokenToVerify,c.env.JWT_SECRET);
    if(!decodedPayload){
      c.status(403);
      return c.json({
        error:'unAuthorized'
      })
    }
   
    c.set('userId' , decodedPayload.id);
    await next();
}