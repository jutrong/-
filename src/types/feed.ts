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
  sonminsuItems: any[];
  image: string;
  tags: string[];
  comments: number;
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
