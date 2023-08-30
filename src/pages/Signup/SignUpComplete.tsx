import { Button } from "../../elements/Button";
import * as S from "./style/SignUpComplete.style";
import complete from "../../assets/images/svg/complete.svg";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/config/rootReducer";

const SignUpComplete = () => {
  const navigation = useNavigate();
  const { email, password } = useOutletContext<{
    email: string;
    password: string;
  }>();
  const dispatch = useDispatch();

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
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          axios
            .post("/auth/sign-in", {
              email,
              password,
            })
            .then((response) => {
              console.log(response);
              if (response.status === 204) {
                navigation("/initInfo");
              }
              if (response.status === 201) {
                //TODO: setToken
                dispatch(setToken(response.headers.authorization));
                navigation("/home");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        로그인 하러가기
      </Button>
    </>
  );
};

export default SignUpComplete;
