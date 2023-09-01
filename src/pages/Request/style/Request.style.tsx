import { styled } from "styled-components";

export const Wrap = styled.div`
  width: 100vw;
  max-width: 450px;
  height: 100vh;
  background-image: url(${"../../../assets/images/png/flowerbg.png"});
`;
export const NoRequest = styled.div`
  width: 100%;
  max-width: 450px;
  height: 40%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
export const NoRequestIcon = styled.img`
  width: 61.037px;
  height: 58px;
`;
export const NoRequestDesc = styled.p`
  font-size: 14px;
  color: rgba(29, 27, 32, 0.5);
  font-family: "Pretendard-Medium";
`;
