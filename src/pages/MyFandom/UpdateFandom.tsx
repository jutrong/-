import * as S from "./style/UpdateFandom.style";
import { Outlet } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useInput from "../../hooks/useInput";
import { useParams, useNavigate } from "react-router-dom";

import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";

type Fandom = {
    fandomName: string;
    image: string;
};

const UpdateFandom: React.FC<Fandom> = ({ fandomName, image }) => {
    const axiosPrivate = useAxiosPrivate();
    const navigation = useNavigate();
    const { fandomId } = useParams();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [selectedImage, setSelectedImage] = useState<string>("");
    const [inputVal, setInputVal] = useInput("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        const imageUrl = URL.createObjectURL(file!);

        if (file) {
            setSelectedImage(imageUrl);
        }
    };

    const handleEditIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const createNewFandomPost = async () => {
        const formData = new FormData();
        formData.append("fandomName", inputVal);
        if (fileInputRef.current?.files?.[0]) {
            formData.append("file", fileInputRef.current?.files?.[0]);
        }

        if (selectedImage && inputVal) {
            try {
                const res = await axiosPrivate.patch(
                    `/fandoms/${fandomId}`,
                    formData,
                    {
                        headers: { "Content-Type": "multipart/form-data" },
                    }
                );
                navigation(`/myfandom/`);
            } catch (error) {
                console.error("Error", error);
            }
        }
    };
    return (
        <>
            <S.Container>
                <S.FandomContainer>
                    <S.ContentHeaderContainer>
                        <S.MyFandomHeaderBox>
                            <S.LeftArrowBtn onClick={() => navigation(-1)} />
                            <S.MyFandomHeaderText>
                                팬덤 편집
                            </S.MyFandomHeaderText>
                        </S.MyFandomHeaderBox>

                        <S.CheckIconBtn
                            style={{
                                filter:
                                    inputVal && selectedImage
                                        ? "brightness(100%)"
                                        : "brightness(50%)",
                            }}
                            onClick={createNewFandomPost}
                        />
                    </S.ContentHeaderContainer>
                    <S.ImgContainer>
                        <S.ImgBox>
                            <S.ImgIconTextBox>
                                <S.ImgIcon onClick={handleEditIconClick} />
                                <S.ImgBoxText>이미지 추가</S.ImgBoxText>
                            </S.ImgIconTextBox>
                            <S.Img src={image} alt="Fandom Image" />
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onInput={handleFileChange}
                                style={{ display: "none" }}
                            />
                            {selectedImage && (
                                <S.ImgBox>
                                    <S.UploadImg src={selectedImage} />
                                </S.ImgBox>
                            )}
                        </S.ImgBox>
                        <S.Input
                            onChange={setInputVal}
                            placeholder={fandomName}
                            style={{ color: "gray" }}
                        />
                    </S.ImgContainer>
                </S.FandomContainer>
            </S.Container>
            <FooterNavBar />
        </>
    );
};

export default UpdateFandom;
