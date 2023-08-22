import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  border-bottom: 6px solid #e2e2e2;
`;
const RequestDetailImg = styled.div`
  width: 100%;
  height: 390px;
  background-color: gray;
`;
const RequestDetailDescText = styled.p`
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  margin: 16px;
`;

const RequestDetailDesc: React.FC = () => {
  return (
    <Wrap>
      <RequestDetailImg />
      <RequestDetailDescText>
        울지민이 라방보다가 지민이가 낀 악세사리가 너무 예쁜거 있죠! ㅜㅜㅜ 제발
        이것좀 찾아 주세요... 찾아봐도 모르겠어요 ㅜㅜ 도와주세요!!
      </RequestDetailDescText>
    </Wrap>
  );
};

export default RequestDetailDesc;
