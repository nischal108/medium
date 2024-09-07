import { Context, Next } from 'hono';
import { decode, verify } from 'hono/jwt';

const handleAuth = () => {
    return async (c: Context, next: Next) => {
        try {
            // Extract the token from the Authorization header
            const authHeader = c.req.header('Authorization');
            if (!authHeader) {
                return c.json({ message: 'Authorization header missing' }, 401);
            }

            // Assuming the token is in the form "Bearer <token>"
            const token = authHeader.replace('Bearer ', '');

            // Verify the token
            await verify(token, c.env.JWT_SECRET);
            const id =  decode(token);
            (c as any).userId = id.payload.id;
            console.log((c as any ).userId);
            

            // Continue to the next middleware or route handler
            await next();
        } catch (error) {
            console.error('Authentication error:', error);
            return c.json({ message: 'Invalid or missing token' }, 401);
        }
    };
};

export default handleAuth;
