import React, { useEffect, useRef, useState } from "react";
import * as S from "../style/RequestLinkRegister.style";
import close from "../../../assets/images/svg/ic-x.svg";
import LinkAttachItem from "../LinkAttachItem";
import SkyBTN from "../SkyBTN";
import axios, { axiosPrivate } from "../../../api/axios";

type RegisterModalProps = {
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const RequestLinkRegister: React.FC<RegisterModalProps> = ({ setClick }) => {
  const [urlValue, setUrlValue] = useState("");
  const [urlVaild, setUrlVaild] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        setClick(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  const registerUrlInput = (e: any) => {
    setUrlValue(e.target.value);
  };
  const registerUrlBTN = async () => {
    let regex =
      /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (regex.test(urlValue) === false) {
      return setUrlVaild(true);
    } else {
      setUrlVaild(false);
    }

    try {
      const response = await axiosPrivate.post("/users/sonminsu-items", {
        originUrl: urlValue,
        groupName: "BTN",
        artistName: "지민",
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Overlay>
      <S.Content ref={modalRef}>
        <S.Close
          src={close}
          onClick={() => {
            setClick(false);
          }}
        />
        <S.LinkTitle>링크 등록</S.LinkTitle>
        <S.LinkRegisterBox>
          <S.LinkRegister
            onChange={registerUrlInput}
            border={urlVaild}
            placeholder="링크를 입력해주세요"
          />
          <S.LinkRegisterBTN onClick={registerUrlBTN}>
            링크 등록
          </S.LinkRegisterBTN>
        </S.LinkRegisterBox>
        {urlVaild && (
          <S.LinkRegisterAlert>올바른 링크가 아닙니다.</S.LinkRegisterAlert>
        )}
        <S.LinkAttachItemBox>{/* <LinkAttachItem /> */}</S.LinkAttachItemBox>
        <S.LinkNumber>링크 1개</S.LinkNumber>
        <S.FinishBTN
          onClick={() => {
            setClick(false);
          }}
        >
          완료
        </S.FinishBTN>
      </S.Content>
    </S.Overlay>
  );
};

export default RequestLinkRegister;
