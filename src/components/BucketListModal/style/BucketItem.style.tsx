import { styled } from "styled-components";
import checked from "../../../assets/images/svg/ic-check.svg";

export const BucketItemContainer = styled.div`
  width: 80px;
  margin-right: 10px;
`;
export const BucketItemImage = styled.div<{ $url: string; selected: boolean }>`
  width: 80px;
  height: 80px;
  border: 1px solid black;
  border-radius: 8px;
  flex-shrink: 0;
  background-image: url(${(props) => props.$url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${(props) =>
    props.selected &&
    ` 
    &::after{
      opacity: 0.7;
      content:'';
      display: block;
    width: 80px;
    height: 80px;
    background: linear-gradient(0deg, rgba(30, 92, 216, 0.70) 0%, rgba(30, 92, 216, 0.70) 100%), url(${checked}), lightgray 50% / cover no-repeat;
    border-radius: 8px;
    background-repeat: no-repeat;
  background-position: center;
  };`}
`;
export const BucketItemTitle = styled.div`
  width: 80px;
  color: rgba(29, 27, 32, 0.8);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  margin: 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
