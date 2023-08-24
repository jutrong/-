import { styled } from "styled-components";

export const BucketListModalContainer = styled.div`
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
export const ModalContentContainer = styled.div`
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
export const BucketListTitle = styled.div`
  margin: 30px auto;
  color: var(--grey-100-black, #1d1b20);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
`;
export const BucketListsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 116px;
`;
export const AddBucketList = styled.button`
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
