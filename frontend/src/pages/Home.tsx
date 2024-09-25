import AppBar from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";

export const Home = () => {
  return (
    <>
    <AppBar user={true}/>
    <div className="flex justify-center w-full h-auto flex-col items-center py-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Latest Blogs</h1>
      <BlogCard
        authorName="Nischal Bhattarai"
        title="My First Blog"
        publishedDate="September 25, 2024"
        content="This is the content of my first blog post. It provides insights on coding and more."
      />
      
      {/* You can add more BlogCard components here */}
    </div>
    </>
  );
};
