import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import axios from "../api/axios";
import { setToken } from "../redux/config/rootReducer";
import background from "../assets/images/svg/Main/Background.svg";
import title from "../assets/images/svg/Main/title.svg";
import styled from "styled-components";

const MainView = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.div`
  width: 167px;
  height: 30px;
  background-image: url(${title});
`;
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;
const DoubleQuotation = styled.span`
  color: #fff;
  text-align: center;
  font-family: Noto Sans CJK KR;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;
const Content = styled.span`
  color: #fff;
  text-align: center;
  font-family: Nanum Pen Script;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
`;
const Main = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("/auth/auto-sign-in")
        .then(({ headers }) => {
          dispatch(setToken(headers.authorization));
          navigation("home");
        })
        .catch(({ response }) => {
          // err.status==401 로그아웃
          if (response.status === 401) {
            axios
              .delete("/auth/sign-out")
              .then((response) => {
                dispatch(setToken(""));
              })
              .catch((error) => {
                navigation("login");
              });
          }
        });
    }, 2000);
  }, []);
  return (
    <MainView>
      <Title />
      <ContentContainer>
        <DoubleQuotation>"</DoubleQuotation>
        <Content>
          주님, 오늘도 정의로운 도둑이
          <br />
          되는걸 허락해주세요
        </Content>
        <DoubleQuotation>"</DoubleQuotation>
      </ContentContainer>
    </MainView>
  );
};
export default Main;
