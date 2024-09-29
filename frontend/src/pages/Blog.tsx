import { FunctionComponent } from "react";
import useFetchBlog from "../hooks/useFetchBlog";
import { useParams } from "react-router-dom";
import Errorpage from "./Errorpage";
import Loader from "../components/Loader";

export const Blog: FunctionComponent = () => {
    const { id } = useParams<{ id: string }>();
    if(!id) return <Errorpage message="No blog found"/>
    const { blog, loading, error } = useFetchBlog(id);

    if (loading) return <Loader/>;
    if (error || !blog) return <Errorpage message="No blog found"/>;

    return (
        <>
        <div className="p-4 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-sm text-gray-500 mb-6">
                By {blog.author.fullName} 
            </p>
            <article className="prose prose-lg">
                {blog.content}
            </article>
        </div>
        </>
    );
};

export default Blog;
