import { Avatar } from "./Avatar";

interface BlogCardProps {
  authorName: string;
  title: string;
  publishedDate: string;
  content: string;
}

export const BlogCard = ({ authorName, title, publishedDate, content }: BlogCardProps) => {
  return (
    <div className="w-10/12 lg:w-7/12 cursor-pointer mx-auto border-b overflow-hidden mb-6">
      <div className="p-4">
        <div className="flex items-center mb-2">
          <Avatar authorName={authorName} size="small" />
          <div className="ml-2">
            <p className="font-semibold text-gray-800">{authorName}</p>
            <p className="text-gray-600 text-sm">{publishedDate}</p>
          </div>
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-700 mb-4">{content}</p>
        <div className="text-gray-500 text-sm">
          {`${Math.floor(content.length / 100)} min read`}
        </div>
      </div>
    </div>
  );
};


