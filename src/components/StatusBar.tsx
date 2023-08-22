import React from "react";
import styled from "styled-components";
import edit from "../assets/images/svg/ic-edit.svg";
import setting from "../assets/images/svg/ic-settings.svg";
import logo from "../assets/images/svg/logo.svg";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
`;

const Logo = styled.img`
  width: 100px;
  height: 18px;
  margin: 16px;
`;

const Icons = styled.div`
  display: flex;
  padding: 13px 16px;
`;

const Icon = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-left: 12px;
`;

const StatusBar = () => {
  return (
    <Container>
      <Logo src={logo}></Logo>
      <Icons>
        <Icon src={edit} />
        <Icon src={setting} />
      </Icons>
    </Container>
  );
};

export default StatusBar;
