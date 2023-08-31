import React, { useEffect, useState } from "react";
import * as S from "./style/RequestDatailNoWriter.style";
import RequestAnswerRegister from "../../components/Request/nowriter/RequestAnswerRegister";
import RequestDetaiNoWriterlHeader from "../../components/Request/nowriter/RequestDetailNoWriterHeader";
import RequestNoWriterResponse from "../../components/Request/nowriter/RequestNoWriterResponse";
import RequestDetailDesc from "../../components/Request/RequestDetailDesc";
import RequestResponse from "../../components/Request/writer/RequestWriterResponse";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import RequestLinkRegister from "../../components/Request/nowriter/RequestLinkRegister";
import { Button } from "../../elements/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RequestDescType } from "../../types/request";

const RequestDetailNoWriter: React.FC = () => {
  const navigation = useNavigate();
  const token = useSelector(({ auth }) => auth.accessToken);
  let { requestId } = useParams();
  const axiosPrivate = useAxiosPrivate();

  const [requestdata, setRequestData] = useState<RequestDescType>(Object);
  const [click, setClick] = useState(false);
  const [isSeleted, setIsSeleted] = useState(true);
  const [bookmarkdata, setBookMarkData] = useState<boolean | null>(null);

  useEffect(() => {
    fetchData();
  }, [token]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/sonminsu-requests/${requestId}`);
      setRequestData(response.data.data);
      //console.log(response.data.data);
      if (token) {
        //북마크 여부
        const responsebookmark = await axiosPrivate.get(
          `/sonminsu-requests/${requestId}`
        );
        console.log(responsebookmark);
        setBookMarkData(responsebookmark.data.data.isBookmark);
        console.log(responsebookmark.data.data.isBookmark);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <HeaderBar BackButton={true} color="#fff" />
      <RequestDetaiNoWriterlHeader
        title={requestdata.title}
        username={requestdata.user?.nickName}
        date={requestdata.createdAt}
        id={requestdata.id}
        bookmarkstate={bookmarkdata}
      />
      <RequestDetailDesc desc={requestdata.content} img={requestdata.image} />
      <S.AnswerNumber>답변 {requestdata.answers?.length}개</S.AnswerNumber>
      <S.ReponseBox>
        {requestdata.answers &&
          requestdata.answers.map((answer) => (
            <RequestNoWriterResponse
              key={answer.id}
              answeruserid={answer.user.id}
              answerUsername={answer.user.nickName}
              answerUserimg={answer.user.image}
              answerUserclearNum={answer.user.choosedCnt}
              answerDate={answer.createdAt}
              answerItems={answer.items}
              answerIsChoosed={answer.isChoosed}
            />
          ))}
      </S.ReponseBox>
      {!click &&
        requestdata.answers &&
        !requestdata.answers.find((answer) => answer.isChoosed === true) && (
          <Button
            background="#fff"
            border="1px solid #6138F8"
            color="#6138F8"
            margin="0 auto 20px auto"
            onClick={() => {
              if (!token) {
                navigation(`/login`);
              }
              setClick(true);
            }}
          >
            답변 하기
          </Button>
        )}
      {click && (
        <RequestLinkRegister
          setClick={setClick}
          groupName={requestdata.groupName}
          artistName={requestdata.artistName}
        />
      )}
    </>
  );
};

export default RequestDetailNoWriter;
