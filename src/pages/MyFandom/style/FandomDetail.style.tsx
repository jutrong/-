import styled from "styled-components";
import { Item } from "../../../components/Feed/style/Item.style";

// 홈 컨테이너
export const Container = styled.div`
  justify-content: space-between;

  align-items: center;
  margin: 0 auto;
  padding-bottom: 90px;

  width: 100%;

  min-height: 100vh;
  background-color: #f5f5f5;
`;

//헤더박스

export const HeaderBox = styled.div`
  background-color: white;
  padding-bottom: 10px;
`;

//이미지
export const Img = styled.img`
  height: 182px;
  width: 100%;
`;

export const FandomJoinBox = styled.div`
  display: flex; /* Add this line */
  flex-direction: column; /* Add this line */
  align-items: center; /*Add this Line*/
  margin-top: 16px; /*Add This Line*/
`;

// 팬덤이름
export const FandomName = styled.div`
  color: #1d1b20;
  margin-top: 16px;
  font-size: 20px;
  margin-left: 20px;
  font-weight: 700;
`;
//팬덤이름 멤버수
export const FandomMember = styled.div`
  color: #1d1b20;
  margin-top: 8px;
  font-size: 14px;
  margin-left: 23px;
  font-weight: 500;
`;

// 팬덤 가입 버튼
export const JoimBtn = styled.button`
  width: 95%;
  height: 44px;
  color: white;
  background-color: #208df1;
  border-radius: 8px;
  border: none;
  margin-top: 18px;
  font-size: 15px;
  text-align: center;
  font-weight: 700;
`;
// 공지사항 임포트

export const FeedContainer = styled.div`
  font-family: "Pretendard-Light";
  background-color: white;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  padding-bottom: 77px;
`;
export const FeedImage = styled.img`
  width: 100%;
  height: 390px;
  cursor: pointer;
`;
export const BtnWrap = styled.div`
  display: flex;
  margin-top: 31px;
  padding-bottom: 16px;
`;
export const Line = styled.div`
  background-color: #e2e2e2;
  width: 100%;
  height: 6px;
`;
