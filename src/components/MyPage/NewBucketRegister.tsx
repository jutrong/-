import React, { useEffect, useRef, useState } from "react";
import * as S from "./style/NewBucketRegister.style";
import x from "../../assets/images/svg/ic-x.svg";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
};

const NewBucketRegister: React.FC<ModalProps> = ({ setModalOpen, id }) => {
  const axiosPrivate = useAxiosPrivate();

  const [bucketValue, setBucketValue] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        document.body.style.overflow = "unset";
        setModalOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  const handleBucketInput = (e: any) => {
    setBucketValue(e.target.value);
  };

  const submitNewBucket = async () => {
    if (bucketValue.trim() === "") {
      return;
    }

    try {
      const response = await axiosPrivate.post(`/buckets`, {
        bucketName: bucketValue,
      });
      window.location.replace(`/mypage/${id}`);
    } catch (err) {
      
    }
  };

  return (
    <S.Overlay>
      <S.ModalContainer ref={modalRef}>
        <S.CloseBTN
          src={x}
          onClick={() => {
            document.body.style.overflow = "unset";
            setModalOpen(false);
          }}
        />
        <S.Title>새 버킷 추가</S.Title>
        <S.Input
          placeholder="새 버킷 이름을 입력해주세요"
          onChange={handleBucketInput}
          maxLength={10}
        />
        <S.RegisterBTN onClick={submitNewBucket}>새 버킷 만들기</S.RegisterBTN>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default NewBucketRegister;
