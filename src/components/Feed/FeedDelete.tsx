import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import * as S from "../Feed/style/FeedDelete.style";

type FeedDeleteProps = {
  setIsFeedDelete: React.Dispatch<React.SetStateAction<boolean>>;
  feedId: number | undefined;
  onFeedDeleted: () => void;
};

const FeedDelete: React.FC<FeedDeleteProps> = ({
  setIsFeedDelete,
  feedId,
  onFeedDeleted,
}) => {
  const navigation = useNavigate();
  const axiosPrivate = useAxiosPrivate();

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
    navigation("/feedwrite", { state: { isUpdate: true, feedId: feedId } });
  };

  const handleDeleteFeed = async () => {
    if (!feedId) return;
    try {
      await axiosPrivate.delete(`/feeds/${feedId}`);
      setIsFeedDelete(false);
      onFeedDeleted();
    } catch (error) {
      console.log("error", error);
      alert("삭제실패");
    }
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
          <S.DeleteFeed onClick={handleDeleteFeed}>삭제하기</S.DeleteFeed>
        </S.UpSlide>
      </S.Overlay>
    </>
  );
};

export default FeedDelete;
