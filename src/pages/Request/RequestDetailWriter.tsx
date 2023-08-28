import React, { useEffect, useState } from "react";
import * as S from "./style/RequestDatailWriter.style";
import RequestNoWriterResponse from "../../components/Request/nowriter/RequestNoWriterResponse";
import RequestDetailDesc from "../../components/Request/RequestDetailDesc";
import RequestDetailWriterHeader from "../../components/Request/writer/RequestDetailWriterHeader";
import RequestWriterResponse from "../../components/Request/writer/RequestWriterResponse";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import { useParams } from "react-router-dom";
import axios, { axiosPrivate } from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

type RequestDescProps = {
  image: string;
  id: number;
  title: string;
  content: string;
  answerCnt: number;
  createdAt: string;
  groupName: string;
  artistName: string;
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

const RequestDetailWriter: React.FC = () => {
  let { requestId } = useParams();
  const axiosPrivate = useAxiosPrivate();

  const [requestdata, setRequestData] = useState<RequestDescProps>(Object);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get(
        `/sonminsu-requests/${requestId}`
      );
      setRequestData(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <HeaderBar BackButton={true} color="#fff" />
      <RequestDetailWriterHeader
        title={requestdata.title}
        username={requestdata.user?.nickName}
        date={requestdata.createdAt}
        id={requestdata.id}
      />
      <RequestDetailDesc desc={requestdata.content} img={requestdata.image} />
      <S.ResponseNumber>답변 {requestdata.answerCnt}개</S.ResponseNumber>
      {requestdata.answers &&
        requestdata.answers.map((answer) => (
          <RequestWriterResponse
            key={answer.id}
            answerUsername={answer.user.nickName}
            answerUserimg={answer.user.image}
            answerUserclearNum={answer.user.choosedCnt}
            answerDate={answer.createdAt}
            answerItems={answer.items}
            answerId={answer.id}
          />
        ))}
    </>
  );
};

export default RequestDetailWriter;
