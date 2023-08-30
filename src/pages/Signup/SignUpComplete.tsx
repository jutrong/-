import { Button } from "../../elements/Button";
import * as S from "./style/SignUpComplete.style";
import complete from "../../assets/images/svg/complete.svg";
import { useNavigate } from "react-router-dom";

const SignUpComplete = () => {
  const navigation = useNavigate();
  return (
    <>
      <S.Container>
        <S.Icon src={complete} />
        <S.CompletionMessage>회원가입 완료되었습니다.</S.CompletionMessage>
      </S.Container>
      <Button
        background="#6138F8"
        border="none"
        color="#fff"
        onClick={() => navigation("/initInfo")}
      >
        로그인 하러가기
      </Button>
    </>
  );
};

export default SignUpComplete;
