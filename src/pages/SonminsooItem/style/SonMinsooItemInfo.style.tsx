import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const SonminsooItemInfoContainer = styled.div`
  width: 108px;
  height: 178px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  a:visited {
    color: #208DF1;
  }
`;
export const TitleContainer = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
export const ItemImage = styled.div<{ $url: string }>`
  width: 108px;
  height: 108px;
  border: 1px solid black;
  border-radius: 8px;
  background-image: url(${(props) => props.$url});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ArtistName = styled.div`
  width: max-content;
  display: inline-flex;
  padding: 1px 4px 0 4px;
  margin: 8px 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #dee9ff;
  color: #208DF1;
  font-weight: bold;
  font-size: 12px;
  line-height: 23px;
`;

export const ItemTitle = styled.div`
  width: 81px;
  height: 15px;
  flex-shrink: 0;
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;
export const bookMarkIcon = styled.div<{ $iconUrl: string }>`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  background-image: url(${(props) => props.$iconUrl});
`;
export const ItemPrice = styled.div`
  color: #6138f8;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
