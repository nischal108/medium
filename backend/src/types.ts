// types.ts
export interface SignupRequestBody {
    password: string;
    email: string;
    fullName:string;
  }
  
  export interface SignupResponse {
    userId: string;
    message: string;
  }

  export interface loginRequestBody{
    email:string,
    password:string
  }

  export interface BlogContents {
    id:string,
    title:string,
    content:string,
    published:string
  }
  