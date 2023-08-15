import { createContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const signupContext = createContext({ email: "" });

  return (
    <signupContext.Provider value={{ email: "" }}>
      <div>
        header
        <Outlet />
        <input type="button" value="다음" />
        <Link to="terms">terms</Link>
      </div>
    </signupContext.Provider>
  );
};
export default Signup;
