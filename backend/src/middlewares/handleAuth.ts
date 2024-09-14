import { Context, Next } from 'hono';
import { decode, verify } from 'hono/jwt';

const handleAuth = async (c: Context, next: Next) => {
    try {
        // Extract the token from the Authorization header
        
        const authHeader = c.req.header('Authorization');
        if (!authHeader) {
            return c.json({ message: 'Authorization header missing' }, 401);
        }

        // Assuming the token is in the form "Bearer <token>"
        const token = authHeader.replace('Bearer ', '');
        console.log(token);
        

        // Verify the token
        await verify(token, c.env.JWT_SECRET);
        const id =  decode(token);
        console.log("id here",id);
        
        (c as any).userId = id.payload.id;
        // c.set("userId",id.payload.id)
        console.log((c as any ).userId);
        

       
        await next();
    } catch (error) {
        console.error('Authentication error:', error);
        return c.json({ message: 'Invalid or missing token' }, 401);
    }
};
export default handleAuth;
