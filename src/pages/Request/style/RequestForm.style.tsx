import { styled } from "styled-components";

export const Wrap = styled.div`
  width: 100%;
`;
export const RequestRegisterBTN = styled.button`
  width: 65px;
  height: 26px;
  border-radius: 4px;
  background: #208df1;
  color: #fff;
  font-size: 14px;
  font-family: "Pretendard-Bold";
  line-height: 26px;
  text-align: center;
`;
export const QuestionForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const QuestionTitle = styled.div`
  height: 46px;
  display: flex;
  gap: 9px;
  align-items: center;
  border-bottom: 1px solid #b9bed7;
  padding: 9px;
`;
export const QuestionSVG = styled.img``;
export const QuestionTitleInput = styled.input`
  width: 100%;
  font-family: "Pretendard-Medium";
  font-size: 15px;
  color: #6c7080;
`;
export const QuestionTitleLable = styled.p<{ color: boolean }>`
  font-family: "Pretendard-Medium";
  font-size: 15px;
  white-space: nowrap;
  color: ${(props) => (props.color ? "#6c7080" : "#FC1E6E")};
`;
export const QuestionDesc = styled.div`
  position: relative;
  height: 337px;
  padding: 16px;
  border-bottom: 1px solid #b9bed7;
`;
export const QuestionDescTextarea = styled.textarea`
  border: none;
  width: 100%;
  height: 252px;
  color: #1d1b20;
  font-family: "Pretendard-Medium";
  font-size: 15px;
  line-height: 140%; /* 21px */
  &:focus {
    outline: none;
  }
  &::placeholder {
    position: absolute;
    top: 0;
    font-family: "Pretendard-Medium";
    font-size: 15px;
    color: #6c7080;
  }
`;
export const QuestionDescLabel = styled.p<{ color: boolean }>`
  position: absolute;
  bottom: 16px;
  right: 16px;
  font-family: "Pretendard-Medium";
  font-size: 15px;
  color: ${(props) => (props.color ? "#6c7080" : "#FC1E6E")};
  white-space: nowrap;
`;
export const QuestionImg = styled.div`
  padding: 16px;
  border-bottom: 1px solid #b9bed7;
`;
export const QuetionImgLabel = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 14px;
  color: #1d1b20;
  margin-bottom: 6px;
`;
export const QuetionImgSubLabel = styled.p`
  font-family: "Pretendard-Medium";
  font-size: 14px;
  color: rgba(29, 27, 32, 0.5);
  margin-bottom: 16px;
`;
export const ImgContents = styled.div`
  display: flex;
  gap: 10px;
`;
export const QuestionImgBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  border: 2px solid #c7cdda;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;
export const ImgSVG = styled.img``;
export const ImgLabel = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 12px;
  font-size: 12px;
  color: #c7cdda;
`;
export const UploadImgBox = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: #f6f6f6;
  border-radius: 8px;
`;
export const Delete = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
`;
export const QuestionSon = styled.div`
  padding: 16px;
`;
export const QuestionSonTitle = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 14px;
  color: #1d1b20;
  margin-bottom: 16px;
`;
export const QuestionSonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
`;
export const QuestionGroupInputBox = styled.div<{ color: boolean }>`
  width: 100%;
  height: 48px;
  position: relative;
  font-family: "Pretendard-Medium";
  font-size: 13px;
  color: ${(props) => (props.color ? "#bdbdbd" : "#FC1E6E")};
  text-align: right;
  line-height: 48px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background-color: #f6f6f6;
  padding: 0 16px;
`;
export const QuestionGroupInput = styled.input`
  position: absolute;
  top: 0;
  left: 16px;
  width: 50%;
  height: 48px;
  font-size: 16px;
  color: #1d1b20;
  text-align: left;
  &::placeholder {
    text-align: left;
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: #bdbdbd;
  }
`;
export const QuestionArtistInputBox = styled.div<{ color: boolean }>`
  width: 100%;
  height: 48px;
  position: relative;
  font-family: "Pretendard-Medium";
  font-size: 13px;
  color: ${(props) => (props.color ? "#bdbdbd" : "#FC1E6E")};
  text-align: right;
  line-height: 48px;
  background-color: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 0 16px;
`;
export const QuestionArtistInput = styled.input`
  position: absolute;
  top: 0;
  left: 16px;
  width: 50%;
  height: 48px;
  font-size: 16px;
  color: #1d1b20;
  text-align: left;
  &::placeholder {
    text-align: left;
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: #bdbdbd;
  }
`;
export const QuestionSonLabel = styled.p`
  font-family: "Pretendard-Medium";
  color: rgba(29, 27, 32, 0.5);
  font-size: 14px;
  text-align: right;
`;
export const QuestionArtistLabel = styled.p``;
