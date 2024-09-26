import { BlogCard } from "../components/BlogCard";
import { useGetBlogs } from "../hooks/useGetBlogs";
import { Link } from "react-router-dom";
import BlogCardShimmer from "./BlogCardShimmer";

const BlogList = () => {
    const { blogs, loading, error } = useGetBlogs();

    // Show shimmer while loading
    if (loading) return <BlogCardShimmer />;

    // Show error message if there's an error
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500 text-lg">Oops! Something went wrong: {error}</p>
            </div>
        );
    }
    return (
        <div>
            {blogs.map((blog) => (
                <Link key={blog.id} to={`/blog/${blog.id}`}>
                    <BlogCard
                        authorName={blog.author.fullName}
                        title={blog.title}
                        publishedDate={blog.publishedDate}
                        content={blog.content}
                    />
                </Link>
            ))}
        </div>
    )
}

export default BlogList