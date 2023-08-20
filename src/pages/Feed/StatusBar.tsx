import React from "react";
import styled from "styled-components";
import edit from "../../assets/images/svg/ic-edit.svg";
import setting from "../../assets/images/svg/ic-settings.svg";
import logo from "../../assets/images/svg/logo.svg";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
`;

const Logo = styled.div`
  width: 100px;
  height: 18px;
  background: url(${logo}) no-repeat center center;
  margin: 16px;
`;

const Icons = styled.div`
  display: flex;
  padding: 13px 13px;
  // margin-right: 16px;
  > div:not(:last-child) {
    margin-right: 12px;
  }
`;

const Icon = styled.div<IconProps>`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: ${({ background }) => `url(${background})`} no-repeat center
    center;
  background-size: contain;
`;
type IconProps = {
  background?: string;
};
const StatusBar = () => {
  return (
    <Container>
      <Logo></Logo>
      <Icons>
        <Icon background={edit} />
        <Icon background={setting} />
      </Icons>
    </Container>
  );
};

export default StatusBar;
