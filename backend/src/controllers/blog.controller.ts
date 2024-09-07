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
