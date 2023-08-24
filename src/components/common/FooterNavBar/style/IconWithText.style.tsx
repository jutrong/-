import { styled } from "styled-components";

export const IconGroup = styled.div`
  width: 50px;
  height: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TabIcon = styled.div<{ $iconUrl: string }>`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.$iconUrl});
  background-repeat: no-repeat;
  background-position: center;
`;

export const IconText = styled.p<{ $active: boolean }>`
  margin: 0;
  margin-top: 1px;

  font-size: 10px;

  color: ${(props) => (props.$active ? "#6138F8" : "#A5A8B8")};
`;
