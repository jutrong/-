import React, { useEffect, useRef, useState } from "react";
import * as S from "./style/FeedWriteRegister.style";
import close from "../../assets/images/svg/ic-x.svg";
import LinkItem from "./LinkItem";
import SkyBTN from "../Request/SkyBTN";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
type RegisterModalProps = {
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  groupName: string;
  artistName: string;
  urlItem: itemtype[];
  setUrlItem: React.Dispatch<React.SetStateAction<itemtype[]>>;
};

type itemtype = {
  id: number;
  imgUrl: string;
  title: string;
  price: string;
};

const FeedWriteRegister: React.FC<RegisterModalProps> = ({
  setClick,
  groupName,
  artistName,
  urlItem,
  setUrlItem,
}) => {
  let { requestId } = useParams();
  const axiosPrivate = useAxiosPrivate();

  const [urlValue, setUrlValue] = useState("");
  const [urlVaild, setUrlVaild] = useState(false);
  const [urlVaildNum, setUrlVaildNum] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        document.body.style.overflow = "unset";
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

    if (urlItem.length >= 9) {
      return setUrlVaildNum(true);
    } else {
      setUrlVaildNum(false);
    }

    try {
      const response = await axiosPrivate.post("/sonminsu-items", {
        originUrl: urlValue,
        groupName: groupName,
        artistName: artistName,
      });
      setUrlItem((oldArray) => [...oldArray, response.data.data]);
      setUrlValue("");
    } catch (err) {
      
    }
  };

  const handleDeleteClick = (id: any) => {
    setUrlItem(urlItem.filter((item) => item.id !== id));
  };

  const handleSubmitClick = async () => {
    if (urlItem.length === 0) {
      return;
    }
    document.body.style.overflow = "unset";
    setClick(false);
  };

  return (
    <S.Overlay>
      <S.Content ref={modalRef}>
        <S.Close
          src={close}
          onClick={() => {
            document.body.style.overflow = "unset";
            setClick(false);
          }}
        />
        <S.LinkTitle>링크 등록</S.LinkTitle>
        <S.LinkRegisterBox>
          <S.LinkRegister
            onChange={registerUrlInput}
            border={urlVaild || urlVaildNum}
            placeholder="링크를 입력해주세요"
            value={urlValue}
          />
          <S.LinkRegisterBTN onClick={registerUrlBTN}>
            링크 등록
          </S.LinkRegisterBTN>
        </S.LinkRegisterBox>
        {urlVaild && (
          <S.LinkRegisterAlert>올바른 링크가 아닙니다.</S.LinkRegisterAlert>
        )}
        {urlVaildNum && (
          <S.LinkRegisterAlert>
            더 이상 링크를 등록할 수 없습니다.
          </S.LinkRegisterAlert>
        )}
        <S.LinkAttachItemBox margintop={urlVaild || urlVaildNum}>
          {urlItem.map((item) => (
            <LinkItem
              deletevalue={true}
              deleteclick={() => handleDeleteClick(item.id)}
              itemImg={item.imgUrl}
              itemName={item.title}
              itemPrice={item.price}
            />
          ))}
        </S.LinkAttachItemBox>
        <S.LinkNumber>링크 {urlItem.length}개</S.LinkNumber>
        <S.FinishBTN onClick={handleSubmitClick}>완료</S.FinishBTN>
      </S.Content>
    </S.Overlay>
  );
};

export default FeedWriteRegister;
