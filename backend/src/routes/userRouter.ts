import { Hono } from "hono";
import { loginUser, signupUser } from "../controllers/user.controller";
import { getPrisma } from "../utility/prismafunctions";
import {signUpSchema,singnInSchema} from "@nischal108/common";
import { CustomError } from "../Errors/customErrors";

const userRouter = new Hono();


//signup route
userRouter.post("/signup", async (c: any) => {
    try {
        const prisma = getPrisma(c.env);
        const userData = await c.req.json();
        const {success} = signUpSchema.safeParse(userData);
        if(!success){
          throw new CustomError("expected payload not received",401);
        }
        const signedUser = await signupUser(prisma, userData, c.env.JWT_SECRET);
        return c.json(signedUser);
    } catch (error: any) {
        return c.json({ message: error.message || "An unexpected error occurred" }, 500);
    }
});


//signinroute
userRouter.post("/signin",async (c:any)=>{
  try{
    const prisma = getPrisma(c.env);
    const userData = await c.req.json();
    const {success} = singnInSchema.safeParse(userData);
    if(!success){
      throw new CustomError("expected payload not received",401);
    }
    const loggedInUser = await loginUser(prisma,userData,c.env.JWT_SECRET);
    return c.json(loggedInUser);
  }
  catch(err:any){
    return c.json({message:err.message || "An unexpected error occured"},500)
  }
})

export default userRouter;
