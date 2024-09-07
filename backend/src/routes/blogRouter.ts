import { Hono } from "hono";
import handleAuth from "../middlewares/handleAuth";
import { insertBlog } from "../controllers/blog.controller";

const blogRouter = new Hono();

blogRouter.use("*",handleAuth());


blogRouter.post('/create',async (c:any)=>{
    try {
        const blogcontents = await c.req.json();
        const insertedBlog = await insertBlog(c,blogcontents);
        return c.json(insertedBlog);
        
    } catch (error:any) {
        return c.json({message:error.message},401)
    }
})


export default blogRouter;