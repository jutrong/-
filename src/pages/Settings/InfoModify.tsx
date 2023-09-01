import * as S from "./style/InfoModify.style";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import check from "../../assets/images/svg/ic-check.svg";
import Icon from "../../elements/Icon";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
type userInfo = {
  birthDate: string;
  phoneNumber: string;
  userName: string;
};
const InfoModify = () => {
  const axiosPrivate = useAxiosPrivate();
  const [userInfo, setUserinfo] = useState<userInfo>();
  useEffect(() => {
    axiosPrivate
      .get(`authInfo`)
      .then(({ data }) => {
        setUserinfo(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserinfo((prev: any) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };
  return (
    <>
      <HeaderBar
        BackButton
        title="개인정보수정"
        items={[
          <Icon
            src={check}
            onClick={() => {
              axiosPrivate
                .patch("authInfo", userInfo)
                .then((res) => {
                  alert("개인정보 수정 완료!");
                })
                .catch((err) => {
                  alert("개인정보 수정 실패");
                });
            }}
          />,
        ]}
      />
      <S.InfoModifyContainer>
        <S.InfoText
          value={userInfo?.userName}
          onChange={handleInfoChange}
          id="userName"
        />
        <S.InfoText
          value={userInfo?.birthDate}
          onChange={handleInfoChange}
          id="birthDate"
        />
        <S.InfoText
          value={userInfo?.phoneNumber}
          onChange={handleInfoChange}
          id="phoneNumber"
        />
      </S.InfoModifyContainer>
    </>
  );
};

export default InfoModify;
