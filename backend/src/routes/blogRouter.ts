import { Hono } from "hono";
import handleAuth from "../middlewares/handleAuth";
import { editBlog, getBlogs, insertBlog, getBlog } from "../controllers/blog.controller";
import {updateBlogSchema,createBlogSchema } from '@nischal108/common'
import { CustomError } from "../Errors/customErrors";

const blogRouter = new Hono();



blogRouter.use('*', async (c, next) => {
    if (c.req.method != 'GET') {
      await handleAuth(c,next);
    } else {
      await next()
    }
  })


blogRouter.post('/create',async (c:any)=>{
    try {
        const blogcontents = await c.req.json(); 
        const {success} = createBlogSchema.safeParse(blogcontents);
        if(!success){
            throw new CustomError("expected payload not received",401);
        }       
        const insertedBlog = await insertBlog(c,blogcontents);
        
        return c.json(insertedBlog);
        
    } catch (error:any) {
        console.log(error);
        
        return c.json({message:error.message},401)
    }
});

blogRouter.put('/edit', async (c)=>{
    try{
        const blogData = await c.req.json();
        const{success} = updateBlogSchema.safeParse(blogData);
        if(!success){
            throw new CustomError("expected payload not received",401);
        }
        const editedBlog = await editBlog(c, blogData);
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

blogRouter.get('/blog:id',async(c)=>{
    try {
        const id = c.req.query("id") || "";
        const blog = await getBlog(c,id);
        return c.json(blog);
    } catch (error:any) {
        return c.json({messge:error.message},401)
    }
})


export default blogRouter;