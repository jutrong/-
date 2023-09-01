import { styled, keyframes } from "styled-components";

const slideUp = keyframes`
from {
transform: translateY(100%);
}
to {
transform: translateY(0);
}
`;

export const BucketListModalContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 450px;
  position: fixed;
  top: 0;

  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  margin: 0 auto;
`;
export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #ffffff;
  width: 100%;

  max-width: 450px;
  margin: 0 auto;
  padding: 15px;
  bottom: 0;
  border-radius: 16px 16px 0px 0px;
  animation: ${slideUp} 0.5s linear forwards;
`;
export const BucketListTitle = styled.div`
  margin: 30px auto;
  color: var(--grey-100-black, #1d1b20);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
`;
export const BucketListsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;
export const AddBucketList = styled.button`
  width: 100%;
  height: 57px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #6138f8;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
