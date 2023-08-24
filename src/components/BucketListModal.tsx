import { styled } from "styled-components";
import image from "../assets/images/svg/SonminsooItem/bookmarkIcon.svg";

const BucketListModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #ffffff;
  width: 390px;
  height: 304px;
  padding: 15px;
  bottom: 0;
  border-radius: 16px 16px 0px 0px;
`;
const BucketListTitle = styled.div`
  margin: 30px auto;
  color: var(--grey-100-black, #1d1b20);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
`;
const BucketListsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 116px;
  padding: 15px 0;
  //   background: rgba(0, 0, 0, 0.1);
`;
const AddBucketList = styled.button`
  width: 358px;
  height: 57px;
  flex-shrink: 0;
  margin: 16px auto;
  border-radius: 8px;
  background: #6138f8;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
const BucketItemContainer = styled.div`
  width: 80px;
  //   background: rgba(0, 0, 0, 0.3);
  margin-right: 10px;
`;
const BucketItemImage = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid black;
  border-radius: 8px;
  flex-shrink: 0;
  background: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const BucketListModal = () => {
  return (
    <BucketListModalContainer>
      <ModalContentContainer>
        <BucketListTitle>버킷 리스트 템 추가</BucketListTitle>
        <BucketListsContainer>
          <BucketItemContainer>
            <BucketItemImage />
          </BucketItemContainer>
          <BucketItemContainer>
            <BucketItemImage />
          </BucketItemContainer>
          <BucketItemContainer>
            <BucketItemImage />
          </BucketItemContainer>
        </BucketListsContainer>
        <AddBucketList type="button">추가 하기</AddBucketList>
      </ModalContentContainer>
    </BucketListModalContainer>
  );
};
export default BucketListModal;
