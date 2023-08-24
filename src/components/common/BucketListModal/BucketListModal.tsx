import { styled } from "styled-components";
import * as S from "./style/BucketListModal.style";
import BucketItem from "./BucketItem";
import { useEffect, useRef, useState } from "react";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addClickHandler: React.MouseEventHandler<HTMLDivElement>;
  bucketList: { id: string; img: string; title: string }[];
};

const BucketListModal: React.FC<ModalProps> = ({
  bucketList,
  setModalOpen,
  addClickHandler,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [select, setSelect] = useState(bucketList[0].id);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        setModalOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);
  console.log(select, "select");

  return (
    <S.BucketListModalContainer>
      <S.ModalContentContainer ref={modalRef}>
        <S.BucketListTitle>버킷 리스트 템 추가</S.BucketListTitle>
        <S.BucketListsContainer>
          {bucketList.map((item) => (
            <BucketItem
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              onClick={() => setSelect(item.id)}
              selected={item.id === select}
            />
          ))}
        </S.BucketListsContainer>
        <S.AddBucketList
          type="button"
          onClick={() => {
            console.log(
              "TODO: addClickHandler ={axiosPrivate.then(()=>setModalOpen(false))}"
            );
          }}
        >
          추가 하기
        </S.AddBucketList>
      </S.ModalContentContainer>
    </S.BucketListModalContainer>
  );
};
export default BucketListModal;
