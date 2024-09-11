import { Context } from "hono";
import { BlogContents } from "../types";
import { getPrisma } from "../utility/prismafunctions";
import { CustomError } from "../Errors/customErrors";



export const insertBlog = async (c: Context, blogContents: BlogContents) => {
    const prisma = getPrisma(c.env);
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

        // Insert blog
        const blogInserted = await prisma.blog.create({
            data: {
                title: blogContents.title,
                content: blogContents.content,
                published: blogContents.published,
                authorId: userId
            }
        });

        return (blogInserted);
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error inserting blog:", error);

        throw new CustomError("Internal server error ", 500);
    }
};




export const editBlog = async (c: Context, blogId: string, blogcontents: Partial<BlogContents>) => {
  try {
    const prisma = getPrisma(c.env);

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
        published: blogcontents.published !== undefined ? blogcontents.published : existingBlog.published,
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
        where:{published:true}
        // orderBy:{createdAt:'desc'}
    })
    return blogs;
} catch (error) {
    console.log(error);
    throw new CustomError("Internal server error",500)
    
}
}
