import { styled } from "styled-components";
import * as S from "./style/BucketListModal.style";
import BucketItem from "./BucketItem";
import { useEffect, useRef, useState } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  itemId?: number;
  bucketList: { id: number; img?: string; bucketName: string }[];
};

const BucketListModal: React.FC<ModalProps> = ({
  bucketList,
  setModalOpen,
  itemId,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const modalRef = useRef<HTMLDivElement>(null);
  const [select, setSelect] = useState(bucketList[0].id);

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
              bucketName={item.bucketName}
              onClick={() => setSelect(item.id)}
              selected={item.id === select}
            />
          ))}
        </S.BucketListsContainer>
        <S.AddBucketList
          type="button"
          onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();

            try {
              const res = await axiosPrivate.put(
                `/sonminsu-items/${itemId}/buckets/${select}`
              );
              console.log(res);
              document.body.style.overflow = "unset";
              setModalOpen(false);
              window.location.reload();
            } catch (e) {
              console.log(e, "err");
            }
          }}
        >
          추가 하기
        </S.AddBucketList>
      </S.ModalContentContainer>
    </S.BucketListModalContainer>
  );
};
export default BucketListModal;
