import {z} from 'zod';


export const signUpSchema = z.object({
    fullName : z.string(),
    email:z.string().email(),
    password:z.string().min(8,"minimum length of password is 8")
})


export type signUpType = z.infer<typeof signUpSchema>;



export const singnInSchema = z.object({
    email:z.string(),
    password:z.string().min(8)
})

export type singInType = z.infer<typeof singnInSchema>;


export const createBlogSchema = z.object({
    title: z.string(),
    content:z.string(),
    published:z.string()
})

export type creatBlogType = z.infer<typeof createBlogSchema>;


export const updateBlogSchema = z.object({
    title:z.string(),
    content:z.string(),
    published:z.string(),
    id:z.number()
})

export type updateBlogType = z.infer<typeof updateBlogSchema>