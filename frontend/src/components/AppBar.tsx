
import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';

const AppBar = ({user}:{user:boolean}) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="lg:text-2xl text:xl font-bold text-gray-900">Medium Clone</h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </div>
        {!user && <div className="flex items-center">
          <Link to="/signin" className="text-gray-600 hover:text-gray-900">Sign In</Link>
          <Link to="/signup">
            <button className="ml-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
              Get Started
            </button>
          </Link>
        </div>}
        {
            user &&
            <Avatar authorName='John Doe' size='large'/>
        }
      </div>
    </nav>
  );
};

export default AppBar;
