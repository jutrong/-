import { Link } from "react-router-dom";
import { styled } from "styled-components";
import background from "../../../assets/images/svg/SonminsooItem/requsetButtonBackground.svg";
import navImg from "../../../assets/images/svg/icon-chevron-right.svg";

export const LinkRequestList = styled(Link)`
  display: flex;
  margin: 0 auto;
  padding: 0 14px;
  width: 358px;
  height: 60px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
`;
export const SonminsooItemListContainer = styled.div`
  width: 358px;
  margin: 21px auto 0 auto;
  padding: 0;
`;
export const SonminsooItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-bottom: 83px;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 15px;
`;

export const SonminsooItemTitle = styled.div`
  margin-bottom: 5px;
`;
export const SearchText = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 30px;
  border: 1px solid #e8e8e8;
  border-radius: 1px;
  background-color: #f6f6f6;
  padding: 0 10px;
`;

export const NavImg = styled.img.attrs({ src: navImg })`
  width: 24px;
  height: 24px;
`;
