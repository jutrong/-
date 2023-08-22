import React from "react";
import RequestAnswerRegister from "../../components/Request/RequestAnswerRegister";
import RequestDetailDesc from "../../components/Request/RequestDetailDesc";
import RequestDetailHeader from "../../components/Request/RequestDetailHeader";
import RequestNotAnswer from "../../components/Request/RequestNotAnswer";

const RequestDetail: React.FC = () => {
  return (
    <>
      <RequestDetailHeader />
      <RequestDetailDesc />
      {/* <RequestNotAnswer /> */}
      <RequestAnswerRegister />
    </>
  );
};

export default RequestDetail;
