import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import * as S from "./style/PasswordModify.style";
import { Button } from "../../elements/Button";
import React, { useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/config/rootReducer";

const PasswordModify = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordCheck, setNewPasswordCheck] = useState<string>("");

  const [passCheck, setPassCheck] = useState<boolean>(false);

  return (
    <>
      <HeaderBar BackButton title="비밀번호 재설정" />
      <S.Container>
        {passCheck ? (
          <>
            <S.ContentContainer>
              <S.Content>
                새로운 비밀번호를 <br />
                입력해 주세요
              </S.Content>
              <S.PasswordInput
                type="password"
                placeholder="새로운 비밀번호를 입력해주세요."
                border={
                  newPassword.length > 7
                    ? "1px solid #09EE65"
                    : "1px solid #e8e8e8"
                }
                value={newPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewPassword(e.target.value)
                }
              />
              {newPassword.length > 7 && (
                <S.Valid>사용 가능한 비밀번호 입니다</S.Valid>
              )}
              <S.PasswordInput
                type="password"
                placeholder="새로운 비밀번호를 다시 입력해주세요."
                border={
                  newPassword === newPasswordCheck && newPassword.length > 7
                    ? "1px solid #09EE65"
                    : "1px solid #e8e8e8"
                }
                value={newPasswordCheck}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewPasswordCheck(e.target.value)
                }
              />
              {newPassword === newPasswordCheck && newPassword.length > 7 && (
                <S.Valid>비밀번호가 일치합니다</S.Valid>
              )}
            </S.ContentContainer>

            {newPassword.length > 7 && newPassword === newPasswordCheck ? (
              <Button
                background="#6138F8"
                color="#fff"
                border="none"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  axiosPrivate
                    .post("password", { password: newPassword })
                    .then((res) => {
                      console.log(res, "change password");
                      // axios
                      //   .delete(`/auth/sign-out`)
                      //   .then((res) => {
                      //     console.log(res, "로그아웃");
                      //     dispatch(setToken(""));
                      //     alert("새 비밀번호로 다시 로그인 해주세요");
                      //     navigation("/login");
                      // })
                      // .catch((err) => {
                      //   console.log(err);
                      // });
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                다음
              </Button>
            ) : (
              <Button
                background="#EBEEF2"
                color="#6A6774"
                border="none"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                }}
              >
                다음
              </Button>
            )}
          </>
        ) : (
          <>
            <S.ContentContainer>
              <S.Content>
                비밀번호 재설정을 위해 <br />
                현재 사용중인 비밀번호를 <br />
                입력해 주세요
              </S.Content>
              <S.PasswordInput
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </S.ContentContainer>
            <Button
              background="#6138F8"
              color="#fff"
              placeholder="비밀번호를 입력해주세요."
              border="none"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                axiosPrivate
                  .post("password", { password })
                  .then((res) => {
                    console.log(res);
                    setPassCheck(true);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              다음
            </Button>
          </>
        )}
      </S.Container>
    </>
  );
};
export default PasswordModify;
