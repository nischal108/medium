

const BlogCardShimmer = () => {
    return (
        <div className="w-10/12 lg:w-7/12 cursor-pointer mx-auto border-b overflow-hidden mb-6">
            <div className="p-4 animate-pulse">
                <div className="flex items-center mb-2">
                    {/* Avatar Placeholder */}
                    <div className="rounded-full bg-gray-300 w-10 h-10"></div>
                    <div className="ml-2">
                        {/* Author Name Placeholder */}
                        <div className="bg-gray-300 rounded h-4 w-24 mb-1"></div>
                        {/* Date Placeholder */}
                        <div className="bg-gray-300 rounded h-3 w-16"></div>
                    </div>
                </div>

                {/* Title Placeholder */}
                <div className="bg-gray-300 rounded h-6 w-3/4 mb-2"></div>

                {/* Paragraph Placeholder */}
                <div className="bg-gray-300 rounded h-4 w-full mb-2"></div>
                <div className="bg-gray-300 rounded h-4 w-5/6 mb-2"></div>
                <div className="bg-gray-300 rounded h-4 w-2/3"></div>
            </div>
        </div>
    );
};

export default BlogCardShimmer;
