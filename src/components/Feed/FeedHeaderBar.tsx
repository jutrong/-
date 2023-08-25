import React from "react";
import styled from "styled-components";
import edit from "../../assets/images/svg/ic-edit.svg";
import setting from "../../assets/images/svg/ic-settings.svg";
import logo from "../../assets/images/svg/logo.svg";
import * as S from "./style/FeedHeaderBar.style";


const StatusBar = () => {
  return (
    <S.Container>
      <S.Logo src={logo}></S.Logo>
      <S.Icons>
        <S.Icon src={edit} />
        <S.Icon src={setting} />
      </S.Icons>
    </S.Container>
  );
};

export default StatusBar;
