export type Feed = {
  id: number;
  user: User;
  feedImg: string;
  content: string;
  hashTag: string[];
  created_at: string;
  sonminsuItems: SonminsuItem[];
  comments: CommentType[];
};

export type User = {
  id: number;
  user_id: number;
  profileImg: string;
  user_name: string;
  fandom_name: string;
};

export type SonminsuItem = {
  id: number;
  itemImg: string;
  title: string;
  price: number;
  url: string;
};
export type CommentType = {
  id: number;
  feed_id: number;
  user_id: number;
  profileImg: string;
  user_name: string;
  content: string;
  created_at: string;
};
export type FeedData = Feed[];

//props type
export type FeedDataProps = {
  feedData: Feed;
  setIsFeedDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

export type FeedItemProps = {
  feedData: Feed;
};

export type FeedTextProps = {
  feedData: {
    content: string;
  };
};

export type FeedHashTagProps = {
  feedData: {
    hashTag: string[];
  };
};

export type CommentBtnProps = {
  commentOpen: () => void;
  commentClicked: boolean;
  feedData: Feed;
};
