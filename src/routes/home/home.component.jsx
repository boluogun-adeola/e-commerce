import { Outlet } from "react-router-dom";
import data from "../../categories.json";
import Directory from "../../components/directory/directory.component";
// import Directory from "./components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory categories={data?.Categories} />;
    </div>
  );
};

export default Home;
