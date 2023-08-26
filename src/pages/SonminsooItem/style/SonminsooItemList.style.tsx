import { Link } from "react-router-dom";
import { styled } from "styled-components";
import background from "../../../assets/images/svg/SonminsooItem/requsetButtonBackground.svg";

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
  justify-content: space-between;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const SonminsooItemTitle = styled.div`
  margin-bottom: 5px;
`;
