import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      main
      <Link to="minsooItem">minsooItem</Link>
    </div>
  );
};
export default Main;
