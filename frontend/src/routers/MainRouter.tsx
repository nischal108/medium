import { Route, Routes, BrowserRouter } from "react-router-dom";
import { FC, ReactNode } from "react";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import { Blog } from "../pages/Blog";

interface MainRouterProps {
  children?: ReactNode;
}

const MainRouter: FC<MainRouterProps> = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path='/home' element={<Home/>} />
          <Route path="/blog/:id" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
