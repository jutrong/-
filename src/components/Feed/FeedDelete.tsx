import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../Feed/style/FeedDelete.style";

type FeedDeleteProps = {
  setIsFeedDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

const FeedDelete: React.FC<FeedDeleteProps> = ({ setIsFeedDelete }) => {
  const navigation = useNavigate();

  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const clickOutside = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        setIsFeedDelete(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);
  const moveUpdate = () => {
    navigation("/feedwrite", { state: { isUpdate: true } });
  };
  return (
    <>
      <S.Overlay>
        <S.UpSlide ref={modalRef}>
          <S.UpdateFeed
            onClick={() => {
              moveUpdate();
            }}
          >
            수정하기
          </S.UpdateFeed>
          <S.DeleteFeed>삭제하기</S.DeleteFeed>
        </S.UpSlide>
      </S.Overlay>
    </>
  );
};

export default FeedDelete;
