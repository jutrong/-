export type Data = {
  id: number;
  content: string;
  createdAt: string;
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  fandom: {
    id: number;
    fandomName: string;
  };
  sonminsuItems: SonminsuItems[];
  image: string;
  tags: string[];
  comments: number;
  groupName: string;
  artistName: string;
};
export type SonminsuItems = {
  id: number;
  originUrl: string;
  title: string;
  price: number;
  imgUrl: string;
  groupName: string;
  artistName: string;
};
export type DataArray = Data[];

//props type
export type FeedDataProps = {
  feedData: Data;
  setIsFeedDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

export type FeedItemProps = {
  feedData: Data;
};

export type FeedTextProps = {
  feedData: {
    content: string;
  };
};

export type FeedHashTagProps = {
  feedData: {
    tags: string[];
  };
};

export type CommentBtnProps = {
  commentOpen: () => void;
  commentClicked: boolean;
  feedData: Data;
};
