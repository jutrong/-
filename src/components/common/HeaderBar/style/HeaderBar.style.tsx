import { styled } from "styled-components";

export const Container = styled.div<{ color?: string }>`
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
  background-color: ${(props) => (props.color ? props.color : "white")};
  position: sticky;
`;

export const Logo = styled.img`
  height: 20px;
  margin: 16px;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.span`
  width: max-content;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
`;

export const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 13px 16px;
  align-items: center;
`;
