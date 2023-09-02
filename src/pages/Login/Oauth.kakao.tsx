import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/config/rootReducer";

const OauthKakao = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const code = location.search.replace(/\?code=/i, "");

  const domain = window.location.origin;

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/v1/auth/sign-in/kakao", {
        code,
        domain,
      })
      .then((res) => {
        dispatch(setToken(res.headers.authorization));
        navigate("/home");
      })
      .catch(() => navigate("/login"));
  }, [code, dispatch, domain, navigate]);

  return <></>;
};

export default OauthKakao;
