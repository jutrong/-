import React, { useEffect, useState } from "react";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import MyRequestItem from "../../components/MyPage/MyRequestItem";
import * as S from "./style/MyRequest.style";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

type MyRequestType = {
  image: string;
  id: number;
  title: string;
  createdAt: string;
  user: {
    id: number;
    nickName: string;
  };
};

const MyReqeust: React.FC = () => {
  const axiosPrivate = useAxiosPrivate();

  //메뉴 상태
  const [myMenu, setMyMenu] = useState(true);
  const [bookmarkMenu, setBookMarkMenu] = useState(false);
  const [clearMenu, setClearMenu] = useState(false);

  //메뉴 상태에 따른 데이터
  const [mydata, setMyData] = useState<MyRequestType[]>([]);
  const [bookmarkdata, setBookMarkData] = useState([]);
  const [cleardata, setClearData] = useState<MyRequestType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      //나의 의뢰
      const responsemy = await axiosPrivate.get(`sonminsu-requests`);
      setMyData(responsemy.data.data);
      console.log(responsemy.data.data);
      //찜한 의뢰
      // const responsebookmark = await axiosPrivate.get(
      //   `/sonminsu-requests/bookmarks`
      // );
      // setBookMarkData(responsebookmark.data.data);
      //완료된 의뢰
      // const responseclear = await axiosPrivate.get(
      //   `/sonminsu-requests??done=true`
      // );
      // setClearData(responseclear.data.data);
      // console.log(responseclear.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const clickMy = () => {
    setMyMenu(true);
    setBookMarkMenu(false);
    setClearMenu(false);
  };
  const clickBookMark = () => {
    setMyMenu(false);
    setBookMarkMenu(true);
    setClearMenu(false);
  };
  const clickClear = () => {
    setMyMenu(false);
    setBookMarkMenu(false);
    setClearMenu(true);
  };

  return (
    <>
      <HeaderBar BackButton={true} color="#fff" title="나의 버킷리스트" />
      <S.Wrap>
        <S.Nav>
          <S.MyRequestBTN bgcolor={myMenu} onClick={clickMy}>
            나의 의뢰
          </S.MyRequestBTN>
          <S.MySelectRequestBTN bgcolor={bookmarkMenu} onClick={clickBookMark}>
            찜한 의뢰
          </S.MySelectRequestBTN>
          <S.MyClearRequestBTN bgcolor={clearMenu} onClick={clickClear}>
            완료된 의뢰
          </S.MyClearRequestBTN>
        </S.Nav>
        <S.RequestList>
          {myMenu &&
            mydata.map((request) => (
              <MyRequestItem
                title={request.title}
                userName={request.user.nickName}
                date={request.createdAt}
                mainimg={request.image}
              />
            ))}
          {/* {bookmarkMenu && bookmarkdata.map((request) => <MyRequestItem />)}
          {clearMenu &&
            cleardata.map((request) => (
              <MyRequestItem
                title={request.title}
                userName={request.user.nickName}
                date={request.createdAt}
                img={request.image}
              />
            ))} */}
        </S.RequestList>
      </S.Wrap>
    </>
  );
};

export default MyReqeust;
