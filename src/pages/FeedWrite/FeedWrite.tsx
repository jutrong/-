import { Outlet } from "react-router-dom";
import styled from "styled-components";
import * as S from "./style/FeedWrite.style"

const FeedWrite = () => {
  return (
    <S.FeedWriteContainer>
      <Outlet />
    </S.FeedWriteContainer>
  );
};

export default FeedWrite;
