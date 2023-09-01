import { styled } from "styled-components";
import BgGreen from "../../../assets/images/png/backgroundGreen.png";
import BgFlower from "../../../assets/images/png/flowerbg.png";

// 홈 컨테이너
export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const HomeContainer = styled.div`
  /* max-width: 390px;
    width: 100%; */

  height: 60px;
  align-items: center;
  justify-content: space-between;
`;

export const HomeBgContainer = styled.div`
  background-image: url(${BgGreen});
`;
export const HomeBgFlowerContainer = styled.div`
  background-image: url(${BgFlower});
`;
