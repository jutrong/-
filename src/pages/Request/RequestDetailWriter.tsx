import React from "react";
import * as S from "./style/RequestDatailWriter.style";
import RequestNoWriterResponse from "../../components/Request/nowriter/RequestNoWriterResponse";
import RequestDetailDesc from "../../components/Request/RequestDetailDesc";
import RequestDetailWriterHeader from "../../components/Request/writer/RequestDetailWriterHeader";
import RequestWriterResponse from "../../components/Request/writer/RequestWriterResponse";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";

const RequestDetailWriter: React.FC = () => {
  return (
    <>
      <HeaderBar BackButton={true} color="#fff" />
      <RequestDetailWriterHeader />
      <RequestDetailDesc />
      <S.ResponseNumber>답변 0개</S.ResponseNumber>
      <RequestWriterResponse />
    </>
  );
};

export default RequestDetailWriter;
