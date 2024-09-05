import { Hono } from "hono";
import { signupUser } from "../controllers/user.controller";

const userRouter = new Hono();

userRouter.post("/signup", async (c: any) => {
  try {
    const signedUser = await signupUser(c.req.body);
    return c.json(signedUser);
  } catch (error) {
    throw error;
  }
});

export default userRouter;
