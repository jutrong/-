import React, { useEffect, useState } from "react";
import * as S from "./style/RequestDatailNoWriter.style";
import RequestAnswerRegister from "../../components/Request/nowriter/RequestAnswerRegister";
import RequestDetaiNoWriterlHeader from "../../components/Request/nowriter/RequestDetailNoWriterHeader";
import RequestNoWriterResponse from "../../components/Request/nowriter/RequestNoWriterResponse";
import RequestDetailDesc from "../../components/Request/RequestDetailDesc";
import RequestResponse from "../../components/Request/writer/RequestWriterResponse";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import { useParams } from "react-router-dom";
import axios, { axiosPrivate } from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import RequestLinkRegister from "../../components/Request/nowriter/RequestLinkRegister";
import { Button } from "../../elements/Button";

type RequestDescProps = {
  image: string;
  id: number;
  title: string;
  content: string;
  groupName: string;
  artistName: string;
  answerCnt: number;
  createdAt: string;
  user: {
    id: number;
    nickName: string;
    image: string;
  };
  answers: [
    {
      id: number;
      createdAt: string;
      user: {
        id: number;
        image: string;
        nickName: string;
        choosedCnt: number;
      };
      items: [
        {
          id: number;
          originUrl: string;
          imgUrl: string;
          price: string;
          title: string;
        }
      ];
    }
  ];
};

const RequestDetailNoWriter: React.FC = () => {
  let { requestId } = useParams();
  const axiosPrivate = useAxiosPrivate();

  const [requestdata, setRequestData] = useState<RequestDescProps>(Object);
  const [click, setClick] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get(
        `/sonminsu-requests/${requestId}`
      );
      setRequestData(response.data.data);
      //console.log(response.data.data);
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
      />
      <RequestDetailDesc desc={requestdata.content} img={requestdata.image} />
      <S.AnswerNumber>답변 {requestdata.answers?.length}개</S.AnswerNumber>
      {requestdata.answers &&
        requestdata.answers.map((answer) => (
          <RequestNoWriterResponse
            key={answer.id}
            answerUsername={answer.user.nickName}
            answerUserimg={answer.user.image}
            answerUserclearNum={answer.user.choosedCnt}
            answerDate={answer.createdAt}
            answerItems={answer.items}
          />
        ))}
      {!click && (
        <Button
          background="#fff"
          border="1px solid #6138F8"
          color="#6138F8"
          onClick={() => {
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
