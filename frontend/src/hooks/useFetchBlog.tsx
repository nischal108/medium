import axios from "axios";
import { useEffect, useState } from "react";

interface receivedBlog {
    title:string,
    content:string,
    published:boolean,
    author:{
        fullName:string,
        email:string
    }
}

const useFetchBlog = (id: string) => {
    const [blog, setBlog] = useState<receivedBlog>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlog = async (id: string | undefined) => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/blog/blog?id=${id}`);
                
                if (response.data) {
                    console.log(response.data);
                    
                    setBlog(response.data);
                } else {
                    throw new Error("Blog not found");
                }
            } catch (err) {
                setError((err as Error).message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog(id);
    }, [id]);

    return { blog, loading, error };
};

export default useFetchBlog;
