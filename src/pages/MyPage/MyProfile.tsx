import React, { useEffect, useRef, useState } from "react";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import * as S from "./style/MyProfile.style";
import check from "../../assets/images/svg/ic-check.svg";
import { Link } from "react-router-dom";
import Icon from "../../elements/Icon";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type UserData = {
  id: number;
  nickName: string;
  introduction: string;
  image: string;
};

const MyProfile: React.FC = () => {
  let { userId } = useParams() as { userId: any };
  const axiosPrivate = useAxiosPrivate();
  const navigation = useNavigate();

  const [userdata, setUserData] = useState<UserData>();
  const [titleCount, setTitleCount] = useState(0);
  const [titleColor, setTitleColor] = useState(true);
  const [titleValue, setTitleValue] = useState("");
  const [descCount, setDescCount] = useState(0);
  const [descColor, setDescColor] = useState(true);
  const [descValue, setDescValue] = useState("");
  // 선택된 이미지의 URL을 저장하기 위한 상태
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      //유저 프로필
      const responseuser = await axiosPrivate.get(`/profile`);
      setUserData(responseuser.data.data);
      setTitleValue(responseuser.data.data.nickName);
      setTitleCount(responseuser.data.data.nickName.length);
      setDescValue(responseuser.data.data.introduction);
      setDescCount(responseuser.data.data.introduction.length);
    } catch (err) {
      
    }
  };

  const handleTitleInput = (e: any) => {
    setTitleCount(e.target.value.length);
    if (e.target.value.length >= 10) {
      setTitleColor(false);
    } else {
      setTitleColor(true);
    }
    setTitleValue(e.target.value);
  };

  const handleDescTextarea = (e: any) => {
    setDescCount(e.target.value.length);
    if (e.target.value.length >= 10) {
      setDescColor(false);
    } else {
      setDescColor(true);
    }
    setDescValue(e.target.value);
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

  const clickProfileCompleteBTN = async () => {
    const formData = new FormData();
    formData.append("nickName", titleValue);
    formData.append("introduction", descValue);
    if (fileInputRef.current?.files?.[0]) {
      formData.append("file", fileInputRef.current?.files?.[0]);
    }

    try {
      const reponse = await axiosPrivate.patch("/profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigation(`/mypage/${userId}`);
    } catch (err) {
      
    }
  };

  return (
    <>
      <HeaderBar
        BackButton={true}
        title="프로필 편집"
        color="#fff"
        items={[<Icon src={check} onClick={clickProfileCompleteBTN} />]}
      />
      <S.Wrap>
        <S.UserImg src={selectedImage ? selectedImage : userdata?.image} />
        <S.UserImgEditBTN onClick={handleEditIconClick}>
          사진 수정
        </S.UserImgEditBTN>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onInput={handleFileChange}
          style={{ display: "none" }}
        />
        <S.UserNameBox color={titleColor}>
          <S.UserName
            placeholder="닉네입을 입력해주세요"
            defaultValue={userdata?.nickName}
            onChange={handleTitleInput}
            maxLength={10}
          />
          {titleCount}/10자
        </S.UserNameBox>
        <S.IntroduceBox color={descColor}>
          <S.Introduce
            placeholder="소개글을 입력해주세요"
            defaultValue={userdata?.introduction}
            onChange={handleDescTextarea}
            maxLength={10}
          />
          {descCount}/10자
        </S.IntroduceBox>
      </S.Wrap>
    </>
  );
};

export default MyProfile;
