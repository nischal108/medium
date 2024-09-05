import { StatusCode } from "hono/utils/http-status";

export class CustomError extends Error{
    public statusCode : StatusCode;
    constructor(message:string, statusCode:StatusCode){
        super(message);
        this.statusCode = statusCode,
        this.name = "Internal Server Error";

    }
}


export class ApiError extends CustomError{
    constructor(message:string, statusCode:StatusCode){
    super(message, statusCode);
    this.name ="Api Error"
    }
}


  export class DatabaseError extends CustomError {
    constructor(message: string) {
      super(message, 500);  // 500 Internal Server Error
      this.name = 'DatabaseError';
    }
  }
  

  export class AuthenticationError extends CustomError {
    constructor(message: string) {
      super(message, 401);  // 401 Unauthorized
      this.name = 'AuthenticationError';
    }
  }