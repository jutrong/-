import { styled } from "styled-components";

export const Wrap = styled.div`
  padding: 0 16px;
`;
export const Nav = styled.div`
  display: flex;
  gap: 11px;
  margin-bottom: 18px;
`;
export const MyRequestBTN = styled.div<{ bgcolor: boolean }>`
  width: 87px;
  height: 32px;
  border-radius: 32px;
  ${(props) =>
    props.bgcolor ? `background-color: #6138f8;` : `background: #ebeef2;`};
  ${(props) => (props.bgcolor ? `color: #fff;` : `color: #83839f;`)};
  text-align: center;
  line-height: 32px;
`;
export const MySelectRequestBTN = styled.div<{ bgcolor: boolean }>`
  width: 87px;
  height: 32px;
  border-radius: 32px;
  text-align: center;
  line-height: 32px;
  ${(props) =>
    props.bgcolor ? `background-color: #6138f8;` : `background: #ebeef2;`};
  ${(props) => (props.bgcolor ? `color: #fff;` : `color: #83839f;`)};
`;
export const MyClearRequestBTN = styled.div<{ bgcolor: boolean }>`
  width: 101px;
  height: 32px;
  border-radius: 32px;
  text-align: center;
  line-height: 32px;
  ${(props) =>
    props.bgcolor ? `background-color: #6138f8;` : `background: #ebeef2;`};
  ${(props) => (props.bgcolor ? `color: #fff;` : `color: #83839f;`)};
`;
export const RequestList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
