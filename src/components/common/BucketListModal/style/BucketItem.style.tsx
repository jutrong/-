import { styled } from "styled-components";
import checked from "../../../../assets/images/svg/ic-check.svg";

export const BucketItemContainer = styled.div`
  width: 80px;
  margin-right: 10px;
`;
export const BucketItemImage = styled.div<{ $url?: string; selected: boolean }>`
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
      margin-left: -1px;
      margin-top: -1px;
      content:'';
      display: block;
      width: 80px;
      height: 80px;
      border-radius: 8px;
      // background: linear-gradient(0deg, rgba(30, 92, 216, 0.7) 0%, rgba(30, 92, 216, 0.7)), url(${checked}), lightgray 50% / cover no-repeat;
      background-color:rgba(110, 150, 255, 0.6);
      background-repeat: no-repeat;
      background-position: center;
      background-image: url(${checked});

  };`}
`;
export const BucketItemTitle = styled.div`
  width: 80px;
  color: rgba(29, 27, 32, 0.8);
  text-align: center;
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
