import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-top: 7px;
  margin-top: 6px;
`;
const ListImg = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background-color: gray;
  margin-right: 15px;
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
const ListTitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;
const ListInfo = styled.div`
  display: flex;
`;
const ListUserName = styled.p`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  margin-right: 10px;
`;
const ListTime = styled.p`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
`;

const RequestList: React.FC = () => {
  return (
    <Wrap>
      <ListImg />
      <LeftBox>
        <ListTitle>제발 이것좀 찾아 주세요 ㅜㅜ</ListTitle>
        <ListInfo>
          <ListUserName>아마추어 손민수</ListUserName>
          <ListTime>10분전</ListTime>
        </ListInfo>
      </LeftBox>
    </Wrap>
  );
};

export default RequestList;
