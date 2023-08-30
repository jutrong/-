export interface HomeDataType {
    myFandomData: MyFandomType;
    sonminnsooNewsData: SonminsooNewsType;
    sonminsooItemData: SonminsooItemType;
    hotFandomData: HotFandomType;
}

export interface MyFandomType {
    fandomImg: string;
    fandomName: string;
}

export interface SonminsooNewsType {
    profileImg: string;
    nickname: string;
    fandomName: string;
    createTime: string;
    postImg: string;
    postText: string;
    hashtag: string;
    likeQuantity: number;
    commentQuantity: number;
}

// 6개의 데이터만 보내줄 예정
export interface SonminsooItemType {
    productImg: string;
    artistName: string;
    productName: string;
    price: number;
    bookmark: boolean;
}

// 4위까지의 데이터만 보내줄 예정
export interface HotFandomType {
    ranking: number;
    numberOneFandomImg: string;
    fandomName: string;
}

export interface HomeContextProviderProps {
    children: React.ReactNode;
}
