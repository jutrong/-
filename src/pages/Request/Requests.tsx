import React, { useEffect, useState } from "react";
import * as S from "./style/Request.style";
import RequestList from "../../components/Request/RequestList";
import document from "../../assets/images/svg/ic-document.svg";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import edit from "../../assets/images/svg/ic-edit.svg";
import Icon from "../../elements/Icon";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";

type Requests = {
  title: string;
  id: number;
  image: string;
  user: {
    id: number;
    nickName: string;
  };
  createAt: string;
};

const Requests: React.FC = () => {
  const [requestdata, setRequestData] = useState<Requests[]>([]);

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
          requestdata.map((request) => (
            <RequestList
              img={request.image}
              title={request.title}
              username={request.user.nickName}
              date="10분전"
              userid={request.user.id}
              requestid={request.id}
            />
          ))
        )}
      </S.Wrap>
      <FooterNavBar />
    </>
  );
};

export default Requests;
