import React from "react";
import styled from "styled-components";
import link from "../../assets/images/svg/ic-link.svg";
import x from "../../assets/images/svg/ic-x.svg";
import BTN from "./BTN";

const Wrap = styled.div`
  width: 100%;
  margin: 16px;
`;
const AnswerNumber = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 20px;
`;
const LinkContents = styled.div`
  margin-bottom: 20px;
`;
const LinkTitle = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 6px;
`;
const LinkDesc = styled.p`
  color: rgba(29, 27, 32, 0.5);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 16px;
`;
const LinkBox = styled.div`
  display: flex;
  gap: 10px;
`;
const LinkRegister = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 2px solid #c7cdda;
  display: flex;
  flex-direction: column;
  gap: 11px;
  align-items: center;
  justify-content: center;
`;
const LinkSVG = styled.div`
  width: 24px;
  height: 24px;
  background: url(${link}) no-repeat;
`;
const LinkRegisterLabel = styled.p`
  color: #acb5c8;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;
const LinkAttachItem = styled.div`
  width: 100px;
  height: 142px;
  display: flex;
  flex-direction: column;
`;
const AttachImg = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 1px solid #1d1b20;
  margin-bottom: 8px;
`;
const Delete = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  background: url(${x}) no-repeat;
`;
const AttachTitle = styled.p`
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  color: #1d1b20;
  margin-bottom: 5px;
`;
const AttachPrice = styled.p`
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  color: #6138f8;
`;

const RequestAnswerRegister: React.FC = () => {
  return (
    <Wrap>
      <AnswerNumber>답변 1개</AnswerNumber>
      <LinkContents>
        <LinkTitle>링크</LinkTitle>
        <LinkDesc>최대 9개의 링크 업로드 가능</LinkDesc>
        <LinkBox>
          <LinkRegister>
            <LinkSVG />
            <LinkRegisterLabel>링크등록</LinkRegisterLabel>
          </LinkRegister>
          {/* <LinkAttachItem>
            <AttachImg>
              <Delete />
            </AttachImg>
            <AttachTitle>moonchuld</AttachTitle>
            <AttachPrice>12000원</AttachPrice>
          </LinkAttachItem> */}
        </LinkBox>
      </LinkContents>
      <BTN />
    </Wrap>
  );
};

export default RequestAnswerRegister;
