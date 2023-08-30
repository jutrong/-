import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import FeedHeaderWrite from "./FeedWriteHeader";
import WriteFandom from "./WriteFandom";
import FeedWriteHashTag from "./FeedWriteHashTag";
import FeedWriteLink from "./FeedWriteLink";
import FeedWriteTarget from "./FeedWriteTarget";
import FeedWriteRegister from "./FeedWriteRegister";
import * as S from "./style/NewFeed.style";
import useInput from "../../hooks/useInput";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import idol1 from "../../assets/images/png/idol1.png";

type OptionType = {
  value: string;
  label: string;
  id?: number;
};

type itemtype = {
  id: number;
  imgUrl: string;
  title: string;
  price: string;
};

const NewFeed = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigation = useNavigate();
  const [noticeChecked, setNoticeChecked] = useState<boolean>(false);
  const [contentInput, setContentInput] = useState<string>("");
  const [hashTagInput, handleHashTagChange] = useInput("");
  const [groupInput, setGroupInput] = useState<string>("");
  const [artistInput, setArtistInput] = useState<string>("");
  const [fandomOptions, setFandomOptions] = useState([]);
  const [selectedFandom, setSelectedFandom] = useState<OptionType | null>();
  const [linkModalClick, setLinkModalClick] = useState<boolean>(false);
  const [urlItem, setUrlItem] = useState<itemtype[]>([]);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const location = useLocation();

  const $updatePage = location.state?.isUpdate;
  const writeImg = location.state?.selectedImage;
  const selectImg = location.state?.imageObject;
  // #넣어입력하면 배열로 변환
  const hashtagss = hashTagInput.match(/#\w+/g) || [];

  useEffect(() => {
    fetchFandom();
  }, []);

  useEffect(() => {
    if (noticeChecked) {
      setIsFormValid(contentInput.trim() !== "" && !!selectedFandom);
    } else {
      if (
        contentInput.trim() !== "" &&
        hashTagInput.trim() !== "" &&
        groupInput.trim() !== "" &&
        artistInput.trim() !== "" &&
        selectedFandom &&
        urlItem.length > 0
      ) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    }
  }, [
    contentInput,
    hashTagInput,
    groupInput,
    artistInput,
    selectedFandom,
    urlItem,
    noticeChecked,
  ]);

  const handleHeaderSubmit = () => {
    if (isFormValid) {
      if (noticeChecked) {
        handleNoticeSubmit();
      } else {
        handleSubmitFeed();
      }
    }
  };
  const sonminsuItemArray = urlItem.map((item) => item.id);
  const handleContentInput = (e: any) => {
    setContentInput(e.target.value);
  };

  const fetchFandom = async () => {
    try {
      const response = await axiosPrivate.get("/fandoms");
      const fetchedFandoms = response.data.data.map((fandom: any) => ({
        value: fandom.fandomName,
        label: fandom.fandomName,
        id: fandom.id,
      }));
      setFandomOptions(fetchedFandoms);
    } catch (error) {
      console.error("Errore", error);
    }
  };

  const handleSubmitFeed = async () => {
    const formData = new FormData();

    formData.append("content", contentInput);
    hashtagss.forEach((tag) => {
      formData.append("hashTags", tag);
    });
    formData.append("groupName", groupInput);
    formData.append("artistName", artistInput);
    formData.append("fandomId", `${selectedFandom?.id}`);
    sonminsuItemArray.forEach((item) => {
      formData.append("sonminsuItems", String(item));
    });
    if (selectImg) {
      formData.append("image", selectImg);
    }

    // formData.forEach((value, key) => console.log(`${key}: ${value}`));
    try {
      const response = await axiosPrivate.post("/feeds", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log("error", error);
      throw error;
    }
    navigation("/feed");
  };
  const handleNoticeSubmit = async () => {
    try {
      const response = await axiosPrivate.post(
        `/fandom-announcements/${selectedFandom?.id}`,
        {
          content: contentInput,
        }
      );
    } catch (error) {
      console.log("error", error);
    }
    navigation("/feed");
  };
  return (
    <>
      <FeedHeaderWrite
        $updatePage={$updatePage}
        handleHeaderSubmit={handleHeaderSubmit}
        isFormValid={isFormValid}
      />
      {$updatePage ? (
        <S.FeedWriteImage src={idol1} />
      ) : (
        <S.FeedWriteImage src={writeImg} />
      )}
      <WriteFandom
        $updatePage={$updatePage}
        fandomOptions={fandomOptions}
        setSelectedFandom={setSelectedFandom}
      />
      <S.FeedWriteContent
        placeholder="작성할 내용을 입력해 주세요.&#13;(정의로운 손민수 주의사항 내용 필요해 보임)"
        value={contentInput}
        onChange={handleContentInput}
      />
      {noticeChecked ? null : (
        <>
          <FeedWriteHashTag
            hashTagInput={hashTagInput}
            handleHashTagChange={handleHashTagChange}
          />
          <FeedWriteLink
            $updatePage={$updatePage}
            setLinkModalClick={setLinkModalClick}
            urlItem={urlItem}
          />
          <FeedWriteTarget
            $updatePage={$updatePage}
            grouptInput={groupInput}
            setGroupInput={setGroupInput}
            artistInput={artistInput}
            setArtistInput={setArtistInput}
          />
        </>
      )}
      {$updatePage ? null : (
        <S.NoticeText>
          <S.NoticeBtn
            type="checkbox"
            checked={noticeChecked}
            onChange={() => setNoticeChecked(!noticeChecked)}
          />
          공지피드
        </S.NoticeText>
      )}
      {linkModalClick && (
        <FeedWriteRegister
          groupName={groupInput}
          artistName={artistInput}
          setClick={setLinkModalClick}
          urlItem={urlItem}
          setUrlItem={setUrlItem}
        />
      )}
    </>
  );
};

export default NewFeed;
