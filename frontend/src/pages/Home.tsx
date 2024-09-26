
import AppBar from "../components/AppBar";
import BlogList from "../components/BlogList";


const Home = () => {

  return (
    <>
      <AppBar user={true} />
      <BlogList/>
    </>
  );
};

export default Home;
