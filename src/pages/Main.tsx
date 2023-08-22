import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Signup</Link>
    </div>
  );
};
export default Main;
