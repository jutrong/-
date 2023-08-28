import { styled } from "styled-components";

export const WritingFandom = styled.div`
  width: 100%;
  height: 112px;
  border-bottom: 1px solid #b9bed7;
  padding: 16px;
`;
export const WritingFandomText = styled.p`
  font-size: 14px;
  color: #1d1b20;
  font-family: "Pretendard-Bold";
`;
export const FandomStyles = ($updatePage: boolean) => ({
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "#f6f6f6",
    border: "1px solid #e8e8e8",
    width: "100%",
    height: "50px",
    boxSizing: "border-box",
    margin: "16px 0",
    borderRadius: "8px",
    fontFamily: "Pretendard-Medium",
    fontSize: "16px",
    paddingLeft: "16px",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "#f6f6f6",
    color: "#1D1B20",
    margin: "0",
    height: "50",
    padding: "16px",
    borderBottom: "1px solid #E8E8E8",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: $updatePage ? "#BDBDBD" : "#1D1B20",
  }),
});
