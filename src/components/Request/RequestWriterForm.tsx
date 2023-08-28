import React from "react";
import * as S from "./style/RequestWriterFrom.style";
import questionfill from "../../assets/images/svg/ic-question-fill.svg";
import img from "../../assets/images/svg/ic-image-gray.svg";
import x from "../../assets/images/svg/ic-x.svg";

const RequestWirterForm: React.FC = () => {
  return (
    <S.Wrap>
      <S.QuestionForm>
        <S.QuestionTitle>
          <S.QuestionSVG src={questionfill} />
          <S.QuestionTitleInput placeholder="의뢰 제목을 입력해 주세요." />
          <S.QuestionTitleLable>0/25자</S.QuestionTitleLable>
        </S.QuestionTitle>
        <S.QuestionDesc>
          <S.QuestionDescTextarea
            rows={18}
            placeholder="의뢰 내용을 입력해 주세요."
          />
          <S.QuestionDescLabel>0/300자</S.QuestionDescLabel>
        </S.QuestionDesc>
        <S.QuestionImg>
          <S.QuetionImgLabel>사진</S.QuetionImgLabel>
          <S.QuetionImgSubLabel>
            최대 9장의 사진 업로드 가능
          </S.QuetionImgSubLabel>
          <S.ImgContents>
            <S.QuestionImgBox>
              <S.ImgSVG src={img} />
              <S.ImgLabel>사진등록</S.ImgLabel>
            </S.QuestionImgBox>
            <S.UploadImgBox>
              <S.Delete src={x} />
            </S.UploadImgBox>
          </S.ImgContents>
        </S.QuestionImg>
        <S.QuestionSon>
          <S.QuestionSonTitle>손민수 대상자</S.QuestionSonTitle>
          <S.QuestionSonBox>
            <S.QuestionGroupInput placeholder="그룹명" />
            <S.QuestionArtistInput placeholder="아티스트 이름" />
          </S.QuestionSonBox>
          <S.QuestionSonLabel>손민수템에 표시됩니다.</S.QuestionSonLabel>
        </S.QuestionSon>
      </S.QuestionForm>
    </S.Wrap>
  );
};

export default RequestWirterForm;
