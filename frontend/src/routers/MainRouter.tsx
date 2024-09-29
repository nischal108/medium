// MainRouter.tsx
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Errorpage from '../pages/Errorpage';
import CreateBlog from '../pages/CreateBlog';
import UpdateBlog from '../pages/UpdateBlog';
import Layout from './Layout';  // Import Layout component
import { UserProvider } from '../context/userContext';  // Import UserProvider

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {/* Routes wrapped in Layout will have AppBar */}
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/new-story" element={<CreateBlog />} />
            <Route path="/update-story" element={<UpdateBlog />} />
          </Route>
          <Route path="*" element={<Errorpage message="You seem to be lost.." />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default MainRouter;
