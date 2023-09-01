import { Link } from "react-router-dom";
import { styled } from "styled-components";
import background from "../../../assets/images/svg/SonminsooItem/requsetButtonBackground.svg";
import navImg from "../../../assets/images/svg/icon-chevron-right.svg";


export const SonminsooListWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  margin-top: 14px;
`;

export const LinkRequestList = styled(Link)`
  display: flex;
  padding: 0 14px;
  width: 100%;
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
  width: 100%;
  max-width: 450px;
  margin-top: 21px;
`;

export const SonminsooItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-bottom: 83px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 5px;
`;

export const SonminsooItemTitle = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 20px;
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