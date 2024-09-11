import { Hono } from "hono";
import handleAuth from "../middlewares/handleAuth";
import { editBlog, getBlogs, insertBlog } from "../controllers/blog.controller";
import { Context } from "hono/jsx";

const blogRouter = new Hono();



blogRouter.post('/create',handleAuth,async (c:any)=>{
    try {
        const blogcontents = await c.req.json();
        const insertedBlog = await insertBlog(c,blogcontents);
        return c.json(insertedBlog);
        
    } catch (error:any) {
        return c.json({message:error.message},401)
    }
});

blogRouter.put('/edit/:id',handleAuth, async (c)=>{
    try{
        const id = c.req.param('id');
        const blogData = await c.req.json();
        const editedBlog = await editBlog(c,id, blogData);
        return c.json(editedBlog);
    } catch(err:any){
        return c.json({message:err.message},401)
    }
})

blogRouter.get('/allBlogs',async (c)=>{
    try {
        const blogs = await getBlogs(c);
        return c.json(blogs);
    } catch (error:any) {
        return c.json({message:error.message},401)
    }
})


export default blogRouter;