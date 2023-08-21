import React from "react";
import styled from "styled-components";
import arrow from "../../assets/images/svg/ic-arrow-left.svg";
import edit from "../../assets/images/svg/ic-edit.svg";

const Wrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;
const BackBTN = styled.div`
  width: 24px;
  height: 24px;
  background: url(${arrow}) no-repeat;
  margin: 13px 10px 13px 16px;
`;
const Title = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  margin: 0 auto 0 0;
`;
const RequestFormEdit = styled.div`
  width: 24px;
  height: 24px;
  background: url(${edit}) no-repeat;
  margin-right: 16px;
`;

const RequestHeader: React.FC = () => {
  return (
    <Wrap>
      <BackBTN />
      <Title>손민수템 의뢰</Title>
      <RequestFormEdit />
    </Wrap>
  );
};

export default RequestHeader;
