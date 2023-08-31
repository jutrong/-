import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import edit from "../../assets/images/svg/ic-edit.svg";
import setting from "../../assets/images/svg/ic-settings.svg";
import logo from "../../assets/images/svg/logo.svg";
import * as S from "./style/FeedHeaderBar.style";
import { useNavigate } from "react-router-dom";

const FeedHeaderBar = () => {
  const navigate = useNavigate();
  const token = useSelector(({ auth }) => auth.accessToken);

  const fileInputRef = useRef<HTMLInputElement>(null);
  // 선택된 이미지의 URL을 저장하기 위한 상태
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
      navigate("/feedwrite", {
        state: {
          isUpdate: false,
          selectedImage: imageUrl,
          imageObject: fileInputRef.current?.files?.[0],
        },
      });
    }
  };

  return (
    <S.Container>
      <S.Logo
        src={logo}
        onClick={() => {
          navigate("/home");
        }}
      ></S.Logo>
      <S.Icons>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        {token ? <S.Icon src={edit} onClick={handleEditIconClick} /> : null}
        <S.Icon src={setting} onClick={() => navigate("/settings")} />
      </S.Icons>
    </S.Container>
  );
};

export default FeedHeaderBar;
