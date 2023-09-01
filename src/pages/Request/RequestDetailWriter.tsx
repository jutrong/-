import React, { useEffect, useState } from "react";
import * as S from "./style/RequestDatailWriter.style";
import RequestNoWriterResponse from "../../components/Request/nowriter/RequestNoWriterResponse";
import RequestDetailDesc from "../../components/Request/RequestDetailDesc";
import RequestDetailWriterHeader from "../../components/Request/writer/RequestDetailWriterHeader";
import RequestWriterResponse from "../../components/Request/writer/RequestWriterResponse";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { RequestDescType } from "../../types/request";

const RequestDetailWriter: React.FC = () => {
  let { requestId } = useParams();

  const [requestdata, setRequestData] = useState<RequestDescType>(Object);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/sonminsu-requests/${requestId}`);
      setRequestData(response.data.data);
    } catch (err) {
      
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
        userid={requestdata.user?.id}
      />
      <RequestDetailDesc desc={requestdata.content} img={requestdata.image} />
      <S.ResponseNumber>답변 {requestdata.answerCnt}개</S.ResponseNumber>
      {requestdata.answers &&
        requestdata.answers.map((answer) => (
          <RequestWriterResponse
            key={answer.id}
            answeruserid={answer.user.id}
            answerUsername={answer.user.nickName}
            answerUserimg={answer.user.image}
            answerUserclearNum={answer.user.choosedCnt}
            answerDate={answer.createdAt}
            answerItems={answer.items}
            answerId={answer.id}
            answerIsChoosed={answer.isChoosed}
          />
        ))}
    </>
  );
};

export default RequestDetailWriter;
