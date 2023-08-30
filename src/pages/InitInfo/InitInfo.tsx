import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { Button } from "../../elements/Button";
import useInput from "../../hooks/useInput";
import { setToken } from "../../redux/config/rootReducer";
import * as S from "./style/InitInfo.style";

const InitInfo = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [nickName, setNickName] = useInput("");
  const [introduction, setIntroduction] = useInput("");
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  //TODO: 타이머 세팅
  const fileInputRef = useRef<HTMLInputElement>(null);

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
  return (
    <S.Container>
      <S.ImageRegistContainer>
        <S.CircleImg src={selectedImage} />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onInput={handleFileChange}
          style={{ display: "none" }}
        />
        <S.ImageRegistButton
          value={"사진 등록"}
          onClick={handleEditIconClick}
        />
      </S.ImageRegistContainer>
      <S.TextContainer>
        <S.InputText
          placeholder="닉네임을 입력해주세요"
          value={nickName}
          onChange={setNickName}
        />
        <S.InputText
          placeholder="소개글을 입력해주세요"
          value={introduction}
          onChange={setIntroduction}
        />
        {introduction.length < 10 && (
          <S.Warning>10자 이상 입력해주세요.</S.Warning>
        )}
      </S.TextContainer>

      {introduction.length < 10 ? (
        <Button
          background="#EBEEF2"
          border="none"
          color="#6A6774"
          margin="375px auto 0 auto"
        >
          완료
        </Button>
      ) : (
        <Button
          background="#6138F8"
          border="none"
          color="#fff"
          margin="375px auto 0 auto"
          onClick={() => {
            const formData = new FormData();
            formData.append("nickName", nickName);
            formData.append("introduction", introduction);
            if (fileInputRef.current?.files?.[0]) {
              formData.append("file", fileInputRef.current?.files?.[0]);
            }
            formData.forEach((value, key) => console.log(`${key}: ${value}`));
            axios
              .post("/auth/init-info", formData, {
                headers: { "Content-Type": "multipart/form-data" },
              })
              .then((response) => {
                console.log(response);
                dispatch(setToken(response.headers.authorization));
                navigation("/home");
              })
              .catch((err) => console.log(err));
          }}
        >
          완료
        </Button>
      )}
    </S.Container>
  );
};
export default InitInfo;
