import { styled } from "styled-components";

export const Wrap = styled.div`
  padding: 13px 16px;
  display: flex;
  align-items: center;
`;
export const FollowerImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  margin-right: 15px;
`;
export const FollowerName = styled.p`
  font-size: 16px;
  color: #1d1b20;
  font-family: "Pretendard-Bold";
  margin: 0 auto 0 0;
`;
export const FollowerBTN = styled.div<{ state: boolean }>`
  ${(props) => (props.state ? `background: #208df1;` : `background: #ebeef2;`)};
  ${(props) => (props.state ? `color: #fff;` : `color: #83839f;`)};
  width: 103px;
  height: 30px;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  font-family: "Pretendard-Bold";
  line-height: 30px;
`;
