import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 9999;
`;
const UpSlide = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 46px;
  border-radius: 16px 16px 0px 0px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  padding-left: 42px;
  font-family: "Pretendard-Bold";
  animation: ${slideUp} 0.5s linear forwards;
  box-sizing: border-box;
`;
const UpdateFeed = styled.div`
  width: 100%;
  height: 50%;
  cursor: pointer;
  padding-top: 34px;
`;
const DeleteFeed = styled.div`
  width: 100%;
  padding-top: 30px;
  cursor: pointer;
  height: 50%;
`;
type FeedDataProps = {
  setIsFeedDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

const FeedDelete: React.FC<FeedDataProps> = ({ setIsFeedDelete }) => {
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
      <Overlay>
        <UpSlide ref={modalRef}>
          <UpdateFeed
            onClick={() => {
              moveUpdate();
            }}
          >
            수정하기
          </UpdateFeed>
          <DeleteFeed>삭제하기</DeleteFeed>
        </UpSlide>
      </Overlay>
    </>
  );
};

export default FeedDelete;
