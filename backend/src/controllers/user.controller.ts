import { PrismaClient } from "@prisma/client/extension";
import { loginRequestBody, SignupRequestBody } from "../types";
import {
  CustomError,
  ApiError,
  AuthenticationError,
} from "../Errors/customErrors";
import { sign } from "hono/jwt";

export const signupUser = async (
  prisma: PrismaClient,
  user: SignupRequestBody,
  jwtSecret: string
) => {
  // Validate user input
  if (!user || !user.email || !user.password || !user.fullName) {
    throw new CustomError("Please provide complete user details", 400);
  }

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (existingUser) {
      throw new ApiError("User already exists", 409);
    }

    // Create new user in the database
    const newUser = await prisma.user.create({
      data: {
        fullName: user.fullName,
        password: user.password, // Consider hashing passwords in production
        email: user.email,
      },
      select: {
        id:true,
        fullName: true,
        email: true,
      },
    });

    // Generate JWT token
    const token = await sign(
      { id:newUser.id},
      jwtSecret
    );

    return {
      user: newUser,
      token,
    };
  } catch (error: any) {
    // Handle unexpected errors
    throw new CustomError(error.message || "An unexpected error occurred", 500);
  }
};

export const loginUser = async (
  prisma: PrismaClient,
  userData: loginRequestBody,
  jwtSecret: string
) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userData.email,
        password: userData.password,
      },
    });
    if (!user) {
      throw new AuthenticationError("Either email or password is incorrect");
    }
    const token = await sign(
      { id:user.id },
      jwtSecret
    );

    return {
      user: user,
      token: token,
    };
  } catch (error: any) {
    throw new CustomError(error.message || "An unexpected error occurred", 500);
  }
};


export const getUserDetails = async(  
  prisma:PrismaClient,
  userId:String) =>{
try {
  const loggedUser = await prisma.user.findUnique({
    where:{
      id :userId
    },
    select:{
      fullName:true,
      email:true
    }
  })
  return loggedUser;
} catch (error :any) {
  throw new CustomError(error.message || "An unexpected error occured",500);
}
}