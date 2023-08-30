import { useState, useEffect } from "react";
import * as S from "./style/Terms.style";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";

type Props = {
  allChecked: boolean;
  setAllChecked: (value: boolean) => void;
};

const Terms = () => {
  const [infoAgreement, setInfoAgreement] = useState(false);
  const [pledge, setPledge] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // const handleAllCheck = () => {
  //   if (infoAgreement && pledge) {
  //     setAllChecked(true);
  //   }
  //   if (allChecked) {
  //     setAllChecked(false);
  //     setInfoAgreement(false);
  //     setPledge(false);
  //   } else {
  //     setAllChecked(true);
  //     setInfoAgreement(true);
  //     setPledge(true);
  //   }
  // };

  return (
    <S.Container>
      {/* <PageHeader totalPages={3} currentPage={1} /> */}
      <S.Agreement>이용약관 동의</S.Agreement>
      <S.SubAgreement>
        정의로운 손민수 이용을 위해 <br /> 약관에 동의해주세요
      </S.SubAgreement>
      <S.CheckboxDiv>
        <S.Checkbox
          checked={infoAgreement}
          onChange={() => setInfoAgreement(!infoAgreement)}
        />
        <S.CheckboxLabel>전체동의</S.CheckboxLabel>
      </S.CheckboxDiv>
      <S.CheckboxDiv>
        <S.Checkbox
          // checked={pledge}
          onClick={() => {
            setPledge(!pledge);
          }}
        />
        <S.CheckboxLabel>개인정보 수집 및 이용 동의(필수)</S.CheckboxLabel>
        <button>
          <Link to="/signupAgreement"></Link>
        </button>
      </S.CheckboxDiv>
      <S.CheckboxDiv>
        <S.Checkbox
          // checked={pledge}
          onClick={() => {
            setPledge(!pledge);
          }}
        />
        <S.CheckboxLabel>정의로운 손민수 십계명 서약(필수)</S.CheckboxLabel>
        <button>
          <Link to="/"></Link>
        </button>
      </S.CheckboxDiv>
    </S.Container>
  );
};
export default Terms;
