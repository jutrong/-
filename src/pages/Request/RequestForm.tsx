import React, { useEffect, useRef, useState } from "react";
import * as S from "./style/RequestForm.style";
import questionfill from "../../assets/images/svg/ic-question-fill.svg";
import img from "../../assets/images/svg/ic-image-gray.svg";
import x from "../../assets/images/svg/ic-x.svg";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const RequestForm: React.FC = () => {
  const axiosPrivate = useAxiosPrivate();

  const [titleCount, setTitleCount] = useState(0);
  const [titleColor, setTitleColor] = useState(true);
  const [titleValue, setTitleValue] = useState("");
  const [descCount, setDescCount] = useState(0);
  const [descColor, setDescColor] = useState(true);
  const [descValue, setDescValue] = useState("");
  const [groupCount, setGroupCount] = useState(0);
  const [groupColor, setGroupColor] = useState(true);
  const [groupValue, setGroupValue] = useState("");
  const [artistCount, setArtistCount] = useState(0);
  const [artistColor, setArtistColor] = useState(true);
  const [artistValue, setArtistValue] = useState("");
  // 선택된 이미지의 URL을 저장하기 위한 상태
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [vaild, setVaild] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const navigation = useNavigate();

  const handleTitleInput = (e: any) => {
    setTitleCount(e.target.value.length);
    if (e.target.value.length >= 25) {
      setTitleColor(false);
    } else {
      setTitleColor(true);
    }
    setTitleValue(e.target.value);
  };
  const handleDescTextarea = (e: any) => {
    setDescCount(e.target.value.length);
    if (e.target.value.length >= 300) {
      setDescColor(false);
    } else {
      setDescColor(true);
    }
    setDescValue(e.target.value);
  };
  const handleGroupInput = (e: any) => {
    setGroupCount(e.target.value.length);
    if (e.target.value.length >= 10) {
      setGroupColor(false);
    } else {
      setGroupColor(true);
    }
    setGroupValue(e.target.value);
  };
  const handleArtistInput = (e: any) => {
    setArtistCount(e.target.value.length);
    if (e.target.value.length >= 10) {
      setArtistColor(false);
    } else {
      setArtistColor(true);
    }
    setArtistValue(e.target.value);
  };

  const handleEditIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    // Non-null assertion operators
    const imageUrl = URL.createObjectURL(file!);

    if (file) {
      // 파일을 선택했을 때 수행할 작업
      setSelectedImage(imageUrl);
    }
  };

  const handleDeleteImg = () => {
    setSelectedImage(undefined);
  };

  const handelReuquestRegister = async () => {
    if (
      titleValue.trim() === "" &&
      descValue.trim() === "" &&
      groupValue.trim() === "" &&
      artistValue.trim() === "" &&
      fileInputRef.current?.files?.[0] == null
    ) {
      return setVaild(false);
    }

    const formData = new FormData();
    formData.append("title", titleValue);
    formData.append("content", descValue);
    formData.append("groupName", groupValue);
    formData.append("artistName", artistValue);
    if (fileInputRef.current?.files?.[0]) {
      formData.append("image", fileInputRef.current?.files?.[0]);
    }

    try {
      const reponse = await axiosPrivate.post("/sonminsu-requests", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigation(`/requests/`);
    } catch (err) {
      
    }
  };

  return (
    <S.Wrap>
      <HeaderBar
        BackButton={true}
        title="새 의뢰 작성하기"
        items={[
          <S.RequestRegisterBTN
            onClick={handelReuquestRegister}
            key="requestform"
          >
            의뢰 등록
          </S.RequestRegisterBTN>,
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
            <S.QuestionImgBox onClick={handleEditIconClick}>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onInput={handleFileChange}
                style={{ display: "none" }}
              />
              <S.ImgSVG src={img} />
              <S.ImgLabel>사진등록</S.ImgLabel>
            </S.QuestionImgBox>
            {selectedImage && (
              <S.UploadImgBox>
                <S.UploadImg src={selectedImage} />
                <S.Delete src={x} onClick={handleDeleteImg} />
              </S.UploadImgBox>
            )}
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
          {!vaild && <S.VaildAlert>빈칸을 모두 입력해주세요</S.VaildAlert>}
        </S.QuestionSon>
      </S.QuestionForm>
    </S.Wrap>
  );
};

export default RequestForm;
