import z from 'zod';
export declare const signUpSchema: z.ZodObject<{
    fullName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    fullName: string;
    email: string;
    password: string;
}, {
    fullName: string;
    email: string;
    password: string;
}>;
export type signUpType = z.infer<typeof signUpSchema>;
export declare const singnInSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type singInType = z.infer<typeof singnInSchema>;
export declare const createBlogSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    published: string;
}, {
    title: string;
    content: string;
    published: string;
}>;
export type creatBlogType = z.infer<typeof createBlogSchema>;
export declare const updateBlogSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    published: string;
    id: number;
}, {
    title: string;
    content: string;
    published: string;
    id: number;
}>;
export type updateBlogType = z.infer<typeof updateBlogSchema>;
