import React, { useEffect, useRef, useState } from "react";
import * as S from "./style/RequestForm.style";
import questionfill from "../../assets/images/svg/ic-question-fill.svg";
import img from "../../assets/images/svg/ic-image-gray.svg";
import x from "../../assets/images/svg/ic-x.svg";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { RequestDescType } from "../../types/request";

const RequestFormModify: React.FC = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigation = useNavigate();
  let { requestId } = useParams();

  const [titleCount, setTitleCount] = useState(0);
  const [titleColor, setTitleColor] = useState(true);
  const [titleValue, setTitleValue] = useState("");
  const [descCount, setDescCount] = useState(0);
  const [descColor, setDescColor] = useState(true);
  const [descValue, setDescValue] = useState("");
  const [groupCount, setGroupCount] = useState(0);
  const [groupColor, setGroupColor] = useState(true);
  const [artistCount, setArtistCount] = useState(0);
  const [artistColor, setArtistColor] = useState(true);

  const [requestdata, setRequestData] = useState<RequestDescType>(Object);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get(
        `/sonminsu-requests/${requestId}`
      );
      setRequestData(response.data.data);
      setTitleValue(response.data.data.title);
      setDescValue(response.data.data.content);
      setTitleCount(response.data.data.title.length);
      setDescCount(response.data.data.content.length);
      setGroupCount(response.data.data.groupName.length);
      setArtistCount(response.data.data.artistName.length);
    } catch (err) {
      
    }
  };

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

  const handelReuquestRegister = async () => {
    try {
      const reponse = await axiosPrivate.patch(
        `/sonminsu-requests/${requestdata.id}`,
        {
          title: titleValue,
          content: descValue,
        }
      );
      navigation(`/requests/`);
    } catch (err) {
      
    }
  };

  return (
    <S.Wrap>
      <HeaderBar
        BackButton={true}
        title="의뢰 수정하기"
        items={[
          <S.RequestRegisterBTN onClick={handelReuquestRegister}>
            의뢰 등록
          </S.RequestRegisterBTN>,
        ]}
        color="#fff"
        key="requestformmodify"
      />
      <S.QuestionForm>
        <S.QuestionTitle>
          <S.QuestionSVG src={questionfill} />
          <S.QuestionTitleInput
            onChange={handleTitleInput}
            placeholder="의뢰 제목을 입력해 주세요."
            maxLength={25}
            defaultValue={requestdata.title}
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
            maxLength={300}
            defaultValue={requestdata.content}
          />
          <S.QuestionDescLabel color={descColor}>
            {descCount}/300자
          </S.QuestionDescLabel>
        </S.QuestionDesc>
        <S.QuestionImg>
          <S.QuetionImgLabel>사진</S.QuetionImgLabel>
          {/* <S.QuetionImgSubLabel>
            최대 1장의 사진 업로드 가능
          </S.QuetionImgSubLabel> */}
          <S.ImgContents>
            {/* <S.QuestionImgBox onClick={handleEditIconClick}>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onInput={handleFileChange}
                style={{ display: "none" }}
              />
              <S.ImgSVG src={img} />
              <S.ImgLabel>사진등록</S.ImgLabel>
            </S.QuestionImgBox> */}
            {requestdata.image && (
              <S.UploadImgBox>
                <S.UploadImg src={requestdata.image} />
              </S.UploadImgBox>
            )}
          </S.ImgContents>
        </S.QuestionImg>
        <S.QuestionSon>
          <S.QuestionSonTitle>손민수 대상자</S.QuestionSonTitle>
          <S.QuestionSonBox>
            <S.QuestionGroupInputBox color={groupColor}>
              <S.QuestionGroupInput
                readOnly
                // onChange={handleGroupInput}
                placeholder="그룹명"
                maxLength={10}
                defaultValue={requestdata.groupName}
              />
              {groupCount}/10자
            </S.QuestionGroupInputBox>
            <S.QuestionArtistInputBox color={artistColor}>
              <S.QuestionArtistInput
                readOnly
                // onChange={handleArtistInput}
                placeholder="아티스트 이름"
                maxLength={10}
                defaultValue={requestdata.artistName}
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

export default RequestFormModify;
