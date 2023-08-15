import { useState, useEffect } from "react";
import styled from "styled-components";
import testSvg from "../../assets/images/svg/1801287.svg";

type Props = {
  allChecked: boolean;
  setAllChecked: (value: boolean) => void;
};

const Terms = () => {
  const [infoAgreement, setInfoAgreement] = useState(false);
  const [pledge, setPledge] = useState(false);

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
    <div>
      <h1>이용약관 동의</h1>
      <h2>정의로운 손민수 이용을 위해 약관에 동의해주세요</h2>
      <input
        type="checkbox"
        // defaultChecked={allChecked}
        // checked={infoAgreement && pledge}
        // onClick={handleAllCheck}
      />
      <span>전체동의</span>
      <input
        type="checkbox"
        checked={infoAgreement}
        onClick={() => setInfoAgreement(!infoAgreement)}
      />
      <span>개인정보 수집 및 이용 동의(필수)</span>&#8250;
      <input
        type="checkbox"
        checked={pledge}
        onClick={() => {
          setPledge(!pledge);
        }}
      />
      <span>정의로운 손민수 십계명 서약(필수)</span>&#8250;
    </div>
  );
};
export default Terms;
