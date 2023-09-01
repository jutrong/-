import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FeedHeaderWrite from "./FeedWriteHeader";
import WriteFandom from "./WriteFandom";
import FeedWriteHashTag from "./FeedWriteHashTag";
import FeedWriteLink from "./FeedWriteLink";
import FeedWriteTarget from "./FeedWriteTarget";
import FeedWriteRegister from "./FeedWriteRegister";
import * as S from "./style/NewFeed.style";
import useInput from "../../hooks/useInput";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
export type Data = {
  id: number;
  content: string;
  createdAt: string;
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  fandom: {
    id: number;
    fandomName: string;
  };
  sonminsuItems: SonminsuItems[];
  image: string;
  tags: string[];
  comments: number;
  groupName: string;
  artistName: string;
};
export type SonminsuItems = {
  id: number;
  originUrl: string;
  title: string;
  price: number;
  imgUrl: string;
  groupName: string;
  artistName: string;
};
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
  const location = useLocation();

  const [feedData, setFeedData] = useState<Data>();
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
  const [isFandomJang, setIsFandomJang] = useState<boolean>();

  const $updatePage = location.state?.isUpdate;
  const writeImg = location.state?.selectedImage;
  const selectImg = location.state?.imageObject;
  const feedId = location.state?.feedId;
  // #넣어입력하면 배열로 변환
  const hashtagss =
    hashTagInput
      .match(/#([\uAC00-\uD7A3a-zA-Z\u3131-\u3163\u314F-\uD7A3]+)/g)
      ?.map((tag) => tag.slice(1)) || [];

  useEffect(() => {
    fetchFandom();
    fetchFeedData();
  }, []);

  //TODO: 유저 정보 새로고침 시 다시 받아와야 하는지 체크
  useEffect(() => {
    if (selectedFandom?.id) {
      isAdmin();
    }
  }, [selectedFandom]);
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
  const fetchFeedData = async () => {
    try {
      const response = await axiosPrivate.get(`/feeds/${feedId}`);
      setFeedData(response.data.data);
    } catch (error) {
      
    }
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

  const isAdmin = async () => {
    try {
      const response = await axiosPrivate.get(`/fandoms/${selectedFandom?.id}`);
      setIsFandomJang(response.data.isAdmin);
    } catch (error) {
      
    }
  };
  const updateFeed = async () => {
    let data = {
      content: contentInput,
      hashTags: hashtagss,
    };
    try {
      const response = await axiosPrivate.patch(`/feeds/${feedId}`, data);
      navigation("/feed");
    } catch (error) {
      
    }
  };
  const moveToFandom = () => {
    if (fandomOptions.length === 0) {
      navigation("/myfandom");
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

    try {
      const response = await axiosPrivate.post("/feeds", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
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
      
    }
    navigation("/feed");
  };

  return (
    <>
      <FeedHeaderWrite
        $updatePage={$updatePage}
        handleHeaderSubmit={handleHeaderSubmit}
        isFormValid={isFormValid}
        updateFeed={updateFeed}
        moveToFandom={moveToFandom}
      />
      {$updatePage && feedData ? (
        <S.FeedWriteImage src={feedData.image} />
      ) : (
        <S.FeedWriteImage src={writeImg} />
      )}
      <WriteFandom
        $updatePage={$updatePage}
        fandomOptions={fandomOptions}
        setSelectedFandom={setSelectedFandom}
        selectedFandom={selectedFandom}
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
            feedData={feedData}
          />
          <FeedWriteTarget
            $updatePage={$updatePage}
            groupInput={groupInput}
            setGroupInput={setGroupInput}
            artistInput={artistInput}
            setArtistInput={setArtistInput}
            feedData={feedData}
          />
        </>
      )}
      {$updatePage || isFandomJang ? null : (
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
