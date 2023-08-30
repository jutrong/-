import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
`;

export const Agreement = styled.h1`
  font-size: 16px;
  color: #6138f8;
  margin-bottom: 10px;
`;

export const SubAgreement = styled.h2`
  font-size: 24px;
  color: #1d1b20;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

export const InputEmail = styled.input`
  padding: 0.5em;
  width: 50%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1em;
  font-size: 16px;
  outline: none;
`;

export const InputNum = styled.input`
  padding: 0.5em;
  width: 60%;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1em;
  font-size: 16px;
  outline: none;
`;

export const SendButton = styled.button`
  background-color: #208df1;
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TextWithLink = styled.p`
  color: #777;
  font-size: 13px;
  span {
    color: #007bff;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
