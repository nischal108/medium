// types.ts
export interface SignupRequestBody {
    username: string;
    password: string;
    email: string;
  }
  
  export interface SignupResponse {
    userId: string;
    message: string;
  }
  