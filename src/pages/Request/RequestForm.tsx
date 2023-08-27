import React, { useState } from "react";
import * as S from "./style/RequestForm.style";
import questionfill from "../../assets/images/svg/ic-question-fill.svg";
import img from "../../assets/images/svg/ic-image-gray.svg";
import x from "../../assets/images/svg/ic-x.svg";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import { Link } from "react-router-dom";

const RequestForm: React.FC = () => {
  const [titleCount, setTitleCount] = useState(0);
  const [titleColor, setTitleColor] = useState(true);
  const [descCount, setDescCount] = useState(0);
  const [descColor, setDescColor] = useState(true);
  const [groupCount, setGroupCount] = useState(0);
  const [groupColor, setGroupColor] = useState(true);
  const [artistCount, setArtistCount] = useState(0);
  const [artistColor, setArtistColor] = useState(true);

  const handleTitleInput = (e: any) => {
    setTitleCount(e.target.value.length);
    if (e.target.value.length >= 25) {
      setTitleColor(false);
    } else {
      setTitleColor(true);
    }
  };
  const handleDescTextarea = (e: any) => {
    setDescCount(e.target.value.length);
    if (e.target.value.length >= 300) {
      setDescColor(false);
    } else {
      setDescColor(true);
    }
  };
  const handleGroupInput = (e: any) => {
    setGroupCount(e.target.value.length);
    if (e.target.value.length >= 10) {
      setGroupColor(false);
    } else {
      setGroupColor(true);
    }
  };
  const handleArtistInput = (e: any) => {
    setArtistCount(e.target.value.length);
    if (e.target.value.length >= 10) {
      setArtistColor(false);
    } else {
      setArtistColor(true);
    }
  };

  return (
    <S.Wrap>
      <HeaderBar
        BackButton={true}
        title="새 의뢰 작성하기"
        items={[
          <Link to="/requests">
            <S.RequestRegisterBTN>의뢰 등록</S.RequestRegisterBTN>
          </Link>,
        ]}
        color="#fff"
      />
      <S.QuestionForm>
        <S.QuestionTitle>
          <S.QuestionSVG src={questionfill} />
          <S.QuestionTitleInput
            onChange={handleTitleInput}
            placeholder="의뢰 제목을 입력해 주세요."
            maxLength={24}
          />
          <S.QuestionTitleLable color={titleColor}>
            {titleCount}/25자
          </S.QuestionTitleLable>
        </S.QuestionTitle>
        <S.QuestionDesc>
          <S.QuestionDescTextarea
            onChange={handleDescTextarea}
            rows={18}
            placeholder="의뢰 내용을 입력해 주세요."
            maxLength={299}
          />
          <S.QuestionDescLabel color={descColor}>
            {descCount}/300자
          </S.QuestionDescLabel>
        </S.QuestionDesc>
        <S.QuestionImg>
          <S.QuetionImgLabel>사진</S.QuetionImgLabel>
          <S.QuetionImgSubLabel>
            최대 1장의 사진 업로드 가능
          </S.QuetionImgSubLabel>
          <S.ImgContents>
            <S.QuestionImgBox>
              <S.ImgSVG src={img} />
              <S.ImgLabel>사진등록</S.ImgLabel>
            </S.QuestionImgBox>
            {/* <S.UploadImgBox>
              <S.Delete src={x} />
            </S.UploadImgBox> */}
          </S.ImgContents>
        </S.QuestionImg>
        <S.QuestionSon>
          <S.QuestionSonTitle>손민수 대상자</S.QuestionSonTitle>
          <S.QuestionSonBox>
            <S.QuestionGroupInputBox color={groupColor}>
              <S.QuestionGroupInput
                onChange={handleGroupInput}
                placeholder="그룹명"
                maxLength={9}
              />
              {groupCount}/10자
            </S.QuestionGroupInputBox>
            <S.QuestionArtistInputBox color={artistColor}>
              <S.QuestionArtistInput
                onChange={handleArtistInput}
                placeholder="아티스트 이름"
                maxLength={9}
              />
              {artistCount}/10자
            </S.QuestionArtistInputBox>
          </S.QuestionSonBox>
          <S.QuestionSonLabel>작성하신 이름이 노출됩니다.</S.QuestionSonLabel>
        </S.QuestionSon>
      </S.QuestionForm>
    </S.Wrap>
  );
};

export default RequestForm;
