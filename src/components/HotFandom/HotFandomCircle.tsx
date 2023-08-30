import { ifError } from "assert";
import * as S from "./style/HotFandomCircle.style";

type FandomRankData = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    image: string;
};

type HotFandomCircleProps = {
    item: FandomRankData;
};

const HotFandomCircle: React.FC<HotFandomCircleProps> = ({ item }) => {
    console.log("이미지", item?.image);

    return (
        <S.PandomCircleContainer>
            <S.ImgContainer>
                <S.NumberOne />
                <S.PandomShadowCircle src={item?.image} />
                <S.PandomCircleName>
                    {item && item.fandomName}
                </S.PandomCircleName>
            </S.ImgContainer>
        </S.PandomCircleContainer>
    );
};
export default HotFandomCircle;
