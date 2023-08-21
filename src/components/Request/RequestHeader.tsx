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
const BackBTN = styled.img`
  margin: 13px 10px 13px 16px;
`;
const Title = styled.p`
  font-family: "Pretendard-ExtraBold";
  font-size: 20px;
  line-height: 50px;
  margin: 0 auto 0 0;
`;
const RequestFormEdit = styled.img`
  margin-right: 16px;
`;

const RequestHeader: React.FC = () => {
  return (
    <Wrap>
      <BackBTN src={arrow} />
      <Title>손민수템 의뢰</Title>
      <RequestFormEdit src={edit} />
    </Wrap>
  );
};

export default RequestHeader;
