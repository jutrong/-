import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    const handleItemClick = () => {
        if (item && item.id) {
            navigate(`/fandom/${item.id}`);
        }
    };

    if (!item || !item.id) {
        return null; // item 또는 id가 없는 경우 렌더링하지 않음
    }
    return (
        <S.PandomCircleContainer key={item.id} onClick={handleItemClick}>
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
