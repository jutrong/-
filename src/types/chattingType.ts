export type Fandom = {
    id: number;
    fandomName: string;
    memberLength: number;
    image: string;
    lastMessage: [{
        content: string;
        createdAt: string;
    }]
}

export type Chat = {
    imageList: string[];
    setIsViewerOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    startSlideIndex?: number;
}

export type ChatMemberType = {
    $ban: boolean;
    userName: string;
}
