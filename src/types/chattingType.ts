export type Fandom = {
    id: number;
    title: string;
    memberCount: number;
    image: string;
    createAt: string;
}

export type Chat = {
    imageList: string[];
    setIsViewerOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}