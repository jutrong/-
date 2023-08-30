import { useState, useEffect } from "react";
import * as S from "./style/Terms.style";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import PageHeader from "./PageHeader";
import SignUpAgreement from "./SignUpAgreement";
import { Button } from "../../elements/Button";

const Terms = () => {
  const [personalInfoView, setPersonalInfoView] = useState(false);
  const [pledgeView, setPledgeView] = useState(false);
  const [checkList, setCheckList] = useState<string[]>([]);
  const navigation = useNavigate();
  const { setSignupStep } = useOutletContext<{
    setSignupStep: (value: string) => void;
  }>();
  return (
    <>
      <S.Container>
        {/* <PageHeader totalPages={3} currentPage={1} /> */}
        <S.Agreement>이용약관 동의</S.Agreement>
        <S.SubAgreement>
          정의로운 손민수 이용을 위해 <br /> 약관에 동의해주세요
        </S.SubAgreement>
        <S.CheckboxDiv>
          <S.Checkbox
            checked={checkList.length === 2}
            onChange={() => {
              if (checkList.length === 2) {
                setCheckList([]);
              } else {
                setCheckList(["personalInfo", "pledge"]);
              }
            }}
          />
          <S.CheckboxLabel>전체동의</S.CheckboxLabel>
        </S.CheckboxDiv>
        <S.CheckboxDiv onClick={() => setPersonalInfoView(true)}>
          <S.Checkbox
            checked={checkList.includes("personalInfo")}
            onChange={() =>
              checkList.includes("personalInfo") ||
              setCheckList((prev) => [...prev, "personalInfo"])
            }
          />
          <S.CheckboxLabel>
            개인정보 수집 및 이용 동의(필수)&gt;
          </S.CheckboxLabel>
        </S.CheckboxDiv>
        <S.CheckboxDiv onClick={() => setPledgeView(true)}>
          <S.Checkbox
            checked={checkList.includes("pledge")}
            onChange={() =>
              checkList.includes("pledge") ||
              setCheckList((prev) => [...prev, "pledge"])
            }
          />
          <S.CheckboxLabel>
            정의로운 손민수 십계명 서약(필수)&gt;
          </S.CheckboxLabel>
        </S.CheckboxDiv>
        {pledgeView && (
          <SignUpAgreement
            onClick={() => {
              setPledgeView(false);
              checkList.includes("pledge") ||
                setCheckList((prev) => [...prev, "pledge"]);
            }}
          />
        )}
        {personalInfoView && (
          <SignUpAgreement
            onClick={() => {
              setPersonalInfoView(false);
              checkList.includes("personalInfo") ||
                setCheckList((prev) => [...prev, "personalInfo"]);
            }}
          />
        )}
      </S.Container>
      <Button
        background="#6138F8"
        border="none"
        color="#fff"
        onClick={() => {
          navigation("emailCertification");
          setSignupStep("emailCertification");
        }}
      >
        다음
      </Button>
    </>
  );
};
export default Terms;
