import React, { useEffect, useState } from "react";
import * as S from "./style/Request.style";
import RequestList from "../../components/Request/RequestList";
import document from "../../assets/images/svg/ic-document.svg";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import edit from "../../assets/images/svg/ic-edit.svg";
import Icon from "../../elements/Icon";
import { Link } from "react-router-dom";
import axios from "../../api/axios";

const Requests: React.FC = () => {
  const [requestdata, setRequestData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/sonminsu-requests");
      setRequestData(response.data.data);
      return console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("dd", requestdata);

  return (
    <>
      <HeaderBar
        BackButton={true}
        title="손민수템 의뢰"
        items={[
          <Link to="/requests/form">
            <Icon src={edit} />
          </Link>,
        ]}
        color="#fff"
      />
      <S.Wrap>
        {requestdata.length === 0 ? (
          <S.NoRequest>
            <S.NoRequestIcon src={document} />
            <S.NoRequestDesc>새 의뢰를 작성해주세요!</S.NoRequestDesc>
          </S.NoRequest>
        ) : (
          <Link to="/requests/writer/:requestId">
            <RequestList
              title="제발 이것좀 찾아 주세요 ㅜㅜ"
              username="아마추어 손민수"
              date="10분전"
            />
          </Link>
        )}
      </S.Wrap>
    </>
  );
};

export default Requests;
