import * as S from "./style/SignUpAgreement.style";
import { Button } from "../../elements/Button";

const SignUpAgreement = ({ onClick }: { onClick: any }) => {
  return (
    <S.Container>
      <S.AgreementBox>
        <S.AgreementHeader>
          당장 손민수 <br /> 개인정보 수집 이용 동의
        </S.AgreementHeader>
        <S.AgreementText>
          <S.Paragraphtitle>
            당장 손민수 개인정보 수집 이용 동의
          </S.Paragraphtitle>
          <S.Paragraph>
            개인정보보호법에 따라 당장 손민수에 회원가입 신청하시는 분께
            수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인 정보의
            보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을
            안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
          </S.Paragraph>
          <S.Paragraph>
            1. 수집하는 개인정보 이용자는 회원가입을 하지 않아도 정보 검색, 피드
            보기 등을 이용할 수 있습니다. 이용자가 핃드작성, 손민수템의뢰 작성,
            손민수템 스크랩 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해
            회원가입을 할 경우, 당장 손민수는 서비스 이용을 위해 필요한 최소한의
            개인정보를 수집합니다.
          </S.Paragraph>
          <S.Paragraph>
            회원 가입 시점에 당장 손민수가 이용자로부터 수집하는 개인정보는
            아래와 같습니다.
          </S.Paragraph>
          <S.Paragraph>
            - 회원 가입 시 필수항목으로 아이디, 비밀번호, 이름, 생년월일, 성별,
            휴대전화번호를, 선택항목으로 본인확인 이메일주소를 수집합니다. 실명
            인증된 아이디로 가입 시, 암호화된 동일인 식별정보(CI), 중복가입
            확인정보(DI), 내외국인 정보를 함께 수집합니다.
          </S.Paragraph>
          <S.Paragraph>
            - 비밀번호 없이 회원 가입 시에는 필수항목으로 아이디, 이름,
            생년월일, 휴대전화번호를, 선택항목으로 비밀번호를 수집합니다.
          </S.Paragraph>
        </S.AgreementText>
      </S.AgreementBox>
      <Button
        background="#6138F8"
        border="none"
        onClick={onClick}
        color="#FFF"
      >
        확인
      </Button>
    </S.Container>
  );
};

export default SignUpAgreement;
