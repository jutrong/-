import React, { useState } from "react";
import * as S from "./style/Request.style";
import RequestList from "../../components/Request/RequestList";
import document from "../../assets/images/svg/ic-document.svg";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import edit from "../../assets/images/svg/ic-edit.svg";
import Icon from "../../elements/Icon";

const Requests: React.FC = () => {
  const [request, setRequest] = useState(true); //나중에 ""로 바꾸기

  return (
    <>
      <HeaderBar
        BackButton={true}
        title="손민수템 의뢰"
        items={[<Icon src={edit} />]}
      />
      <S.Wrap>
        {!request && (
          <S.NoRequest>
            <S.NoRequestIcon src={document} />
            <S.NoRequestDesc>새 의뢰를 작성해주세요!</S.NoRequestDesc>
          </S.NoRequest>
        )}
        {request && (
          <RequestList
            title="제발 이것좀 찾아 주세요 ㅜㅜ"
            username="아마추어 손민수"
            date="10분전"
          />
        )}
      </S.Wrap>
    </>
  );
};

export default Requests;
