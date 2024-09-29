import axios from "axios";
import { useEffect, useState } from "react";


interface User {
    id: number;
    email: string;
    fullName: string;
  }
  

export const useGetUser = () => {
  const [user, setUser] = useState<null| User>(null);
  const [error, setError] = useState<string>("");
  const token = localStorage.getItem("token");  

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/getuser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data); 
       
    } catch (err: any) {
      setError(err.response?.data?.message || "Internal server error");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  return { user, error };
};
