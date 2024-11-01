import { Context, Next } from "hono";
import { CustomError } from "../Errors/customErrors";

export const errorHandler = async (c: Context, next: Next) => {
    try {
        await next();
    } catch (err: any) {
        console.error(err.stack);

        if (err instanceof CustomError) {
            c.status(err.statusCode);
            return c.json({ message: err.message });
        }

        // Handle unexpected errors
        c.status(500);
        return c.json({ message: err.message || 'Internal Server Error' });
    }
};
