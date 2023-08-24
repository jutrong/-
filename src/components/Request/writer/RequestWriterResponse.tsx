import React from "react";
import * as S from "../style/RequestWriterResponse.style";
import more from "../../../assets/images/svg/ic-more-horizontal.svg";
import select from "../../../assets/images/svg/ic-select.svg";
import LinkAttachItem from "../LinkAttachItem";

const RequestWriterResponse: React.FC = () => {
  return (
    <S.Wrap>
      <S.ProfileBox>
        <S.ProfileImg />
        <S.ProfileInfo>
          <S.UserName>정의로운 손민수</S.UserName>
          <S.ResponesInfo>
            <S.ClearNumber>채택된 의뢰 20개</S.ClearNumber>
            <S.Date>10분전</S.Date>
          </S.ResponesInfo>
        </S.ProfileInfo>
        <S.More src={more} />
        {/* <SS.elect src={select} /> */}
        {/* <S.MoreModal>
          <S.Selete>채택하기</S.Selete>
          <S.Delete>삭제하기</S.Delete>
        </S.MoreModal> */}
      </S.ProfileBox>
      <S.ImgsBox>
        <LinkAttachItem />
      </S.ImgsBox>
    </S.Wrap>
  );
};

export default RequestWriterResponse;
