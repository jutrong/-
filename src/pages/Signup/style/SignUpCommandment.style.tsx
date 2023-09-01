import { styled } from "styled-components";
import bg from "../../../assets/images/svg/commandment/ic-commandment.svg";

export const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #fff;
  padding: 61px 16px 41px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleBox = styled.div`
  position: relative;
  width: 227px;
  height: 65px;
  background: url(${bg}) center center no-repeat;
  background-size: cover;
  margin: 0 auto 68px;
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
