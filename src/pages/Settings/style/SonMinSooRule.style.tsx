import { styled } from "styled-components";
import bg from "../../../assets/images/svg/commandment/ic-commandment.svg";

export const Wrap = styled.div`
  width: 100%;
  height: 844px;
  background: #fff;
`;
export const Container = styled.div`
  position: relative;
  margin-bottom: 180px;
`;
export const TitleBox = styled.div`
  position: relative;
  width: 227px;
  height: 65px;
  background: url(${bg}) center center no-repeat;
  background-size: cover;
  margin: 60px auto 68px auto;
`;
export const Title = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 339px;
  height: 380px;
  margin: 0 auto;
`;
export const SentenceBox = styled.div`
  display: flex;
  gap: 6px;
`;
export const Order = styled.img``;
export const Desc = styled.p`
  color: #1d1b20;
  font-size: 14px;
  font-family: "Pretendard-Bold";
`;
