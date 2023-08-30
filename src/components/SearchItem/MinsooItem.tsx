import * as S from "./style/MinsooItem.style";
import item from "../../assets/images/png/item1.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
type minsooItemType = {
  artistName: string;
  groupName: string;
  id: number;
  imgUrl: string;
  originUrl: string;
  price: string | number;
  title: string;
};
type minsooItemProps = {
  minsooItem: minsooItemType[];
};
const MinsooItem: React.FC<minsooItemProps> = ({ minsooItem }) => {
  const navigate = useNavigate();
  const handleItemClick = (id: number) => {
    navigate(`/minsooItem/details/${id}`);
  };
  return (
    <>
      {minsooItem.map((item) => (
        <S.ListContainer
          key={item.id}
          onClick={() => {
            handleItemClick(item.id);
          }}
        >
          <S.SearchItemImg src={item.imgUrl} />
          <S.SearchItemContent>
            <S.SearchItemTags>
              <S.SearchItemTag>{item.groupName}</S.SearchItemTag>
              <S.SearchItemTag>{item.artistName}</S.SearchItemTag>
            </S.SearchItemTags>
            <S.SearchItemProduct>{item.title}</S.SearchItemProduct>
            <S.SearchItemPrice>
              {item.price}
              <S.SearchItemWon></S.SearchItemWon>
            </S.SearchItemPrice>
          </S.SearchItemContent>
        </S.ListContainer>
      ))}
    </>
  );
};
export default MinsooItem;
