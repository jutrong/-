import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  padding: 16px;
  gap: 20px;
`;

export const Title = styled.h2`
  width: 100%;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;
export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
`;
export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledInput = styled.input.attrs({
  autoComplete: "off",
})`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background-color: #f6f6f6;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &::placeholder {
    text-align: left;
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: #bdbdbd;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  width: 91%;
  text-align: center;
  margin: 10px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const P = styled.p`
  width: 100%;
  text-align: center;
`;

export const LinkTag = styled(Link)`
  text-decoration: none;
  color: #a4a4a9;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const QuickLoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 38px;
`;
export const Hr = styled.hr`
  width: 100px;
  height: 1px;
  border: 1px solid #bdbdbd;
`;
export const QuickLoginTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;
export const QuickLoginIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 22px;
  margin: 30px auto;
`;
export const LinkToHome = styled(Link)`
  color: #208df1;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 10px;
`;
export const LoginIcon = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;
`;
export const PasswordView = styled.img`
  cursor: pointer;
  display: inline;
  margin-left: -30px;
  margin-bottom: -5px;
  width: 20px;
  height: 20px;
`;
