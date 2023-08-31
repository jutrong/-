import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const FooterNavBarWrapper = styled.div`
  width: 100%;
  height: 83px;
  max-width: 450px;

  border-top: 1px solid #a5a8b8;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;

  position: fixed;
  bottom: 0;
  z-index: 99;
`;

export const TabIconWrapper = styled.div`
  width: 100%;

  margin-top: 7px;
  padding-left: 15px;
  padding-right: 15px;

  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
