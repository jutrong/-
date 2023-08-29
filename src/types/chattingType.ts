export type Fandom = {
    id: number;
    fandomName: string;
    memberLength: number;
    image: string;
    lastCreateTime: string;
}

export type Chat = {
    imageList: string[];
    setIsViewerOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    startSlideIndex?: number;
}

export type ChatMember = {
    $ban: boolean;
    userName: string;
}