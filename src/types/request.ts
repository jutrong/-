export type RequestsType = {
  title: string;
  id: number;
  image: string;
  user: {
    id: number;
    nickName: string;
  };
  createdAt: string;
};

export type RequestDescType = {
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
      isChoosed: boolean;
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

export type RequestAnswerRegisterType = {
  groupName: string;
  artistName: string;
};

export type RequestTitleProps = {
  title: string;
  username: string;
  date: string;
  id: number;
};

export type RegisterModalProps = {
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  groupName: string;
  artistName: string;
};

export type itemtype = {
  id: number;
  imgUrl: string;
  title: string;
  price: string;
};

export type answerItmesType = {
  id: number;
  originUrl: string;
  imgUrl: string;
  price: string;
  title: string;
};

export type RequestAnswerProps = {
  answeruserid?: number;
  answerUsername: string;
  answerUserimg: string;
  answerUserclearNum: number;
  answerDate: string;
  answerItems: answerItmesType[];
  answerIsChoosed: boolean;
  answerId?: number;
};

export type LinkItemType = {
  deletevalue?: boolean;
  itemImg: string;
  itemPrice: string;
  itemName: string;
  deleteclick?: () => void;
};

export type RequestDescProps = {
  desc: string;
  img: string;
};

export type RequestListProps = {
  img: string;
  title: string;
  username: string;
  date: string;
  userid: number;
  requestid: number;
};
