import React from "react";
import styled from "styled-components";
import logo from "../assets/images/svg/logo.svg";
import arrowLeft from "../assets/images/svg/ic-arrow-left.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
  background-color: transparent;
`;

const Logo = styled.img`
  height: 20px;
  margin: 16px;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.span`
  width: max-content;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
`;

const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 13px 16px;
`;

type propsType = { BackButton: boolean; title?: string; items?: any[] };

const HeaderBar = ({ BackButton = false, title = "", items }: propsType) => {
  const navigation = useNavigate();
  return (
    <Container>
      {BackButton ? (
        <LogoContainer>
          <Logo src={arrowLeft} onClick={() => navigation(-1)} />
          <Title>{title}</Title>
        </LogoContainer>
      ) : (
        <Logo src={logo} onClick={() => navigation("/")} />
      )}
      <Items>{items?.map((icon) => icon)}</Items>
    </Container>
  );
};

export default HeaderBar;
