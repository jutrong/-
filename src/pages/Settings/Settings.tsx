import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import * as S from "./style/Settings.style";
import useGetToken from "../../hooks/useGetToken";
const Settings = () => {
  const token = useGetToken();
  const navigation = useNavigate();
  useEffect(() => {
    if (!token) {
      alert("로그인한 유저만 사용할 수 있습니다.");
      navigation("/login");
    }
  }, []);
  return (
    <S.SettingContainer>
      <Outlet />
    </S.SettingContainer>
  );
};
export default Settings;
