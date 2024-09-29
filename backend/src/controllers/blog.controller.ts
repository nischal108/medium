import { Context } from "hono";
import { BlogContents } from "../types";
import { getPrisma } from "../utility/prismafunctions";
import { CustomError } from "../Errors/customErrors";



export const insertBlog = async (c: Context, blogContents: BlogContents) => {
    const prisma = getPrisma(c.env);
    console.log("reached to the routes");
    
    try {
        // Validate blogContents
        if (!blogContents.title || !blogContents.content) {
            throw new CustomError("Title and content are required", 400);
        }

        // Ensure userId is available
        const userId = (c as any).userId;
        if (!userId) {
            throw new CustomError("User not authenticated", 401);
        }

        const published = blogContents.published === "true" ? true :false;
        // Insert blog
        const blogInserted = await prisma.blog.create({
            data: {
                title: blogContents.title,
                content: blogContents.content,
                published: published,
                authorId: userId
            }
        });
        console.log(blogInserted);
        

        return (blogInserted);
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error inserting blog:", error);

        throw new CustomError("Internal server error ", 500);
    }
};




export const editBlog = async (c: Context, blogcontents: Partial<BlogContents>) => {
  try {
    const prisma = getPrisma(c.env);
    const blogId = blogcontents.id;

    // Validate blog ID
    if (!blogId) {
      throw new CustomError("Blog ID is required", 400);
    }

    // Check if the blog exists
    const existingBlog = await prisma.blog.findUnique({
      where: { id: blogId },
    });

    if (!existingBlog) {
      throw new CustomError("Blog not found", 404);
    }

    // Update the blog with provided data (only fields that are passed in blogcontents)
    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: {
        title: blogcontents.title || existingBlog.title, // Use new title if provided, else keep the old one
        content: blogcontents.content || existingBlog.content,
        published : blogcontents.published === "true" ? true :false
      },
    });

    return updatedBlog;
  } catch (error: any) {
    console.error("Error updating blog:", error);
    throw new CustomError(error.message || "Internal server error", 500);
  }
};


export const getBlogs = async(c:Context) =>{
try {
    const prisma = getPrisma(c.env);
    const blogs = prisma.blog.findMany({
        where:{published:true},
        select:{
          id:true,
          title:true,
          content:true,
          author:true
        }
    })
    return blogs;
} catch (error) {
    console.log(error);
    throw new CustomError("Internal server error",500)
    
}
}


export const getBlog = async(c:Context,id:string)=>{
  try {
    const prisma = getPrisma(c.env);
    const blog = await prisma.blog.findUnique({
      where:{
        id:id
      },
      select:{
        id:true,
        title:true,
        content:true,
        published:true,
        author:{
          select:{
            fullName:true,
            email:true
          }
        }
      }
    })
    return blog;
  } catch (error) {
    throw new CustomError("Internal server error",500);
  }
}