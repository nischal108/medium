import axios from "axios";
import { useState, useEffect } from "react";

// Define the structure of a blog post
interface Blog {
  id: number;
  author: {
    id:string,
    fullName:string,
    email:string
  };
  title: string;
  publishedDate: string;
  content: string;
}


interface UseGetBlogsResult {
  blogs: Blog[];      
  loading: boolean;    
  error: string | null;
}

export const useGetBlogs = (): UseGetBlogsResult => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/blog/allBlogs`); // Demo URL
        if (!response.data) {
          throw new Error("Failed to fetch blogs");
        }
        const data = response.data; 
        // console.log(data);
        
        setBlogs(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); 

  return { blogs, loading, error };
};
