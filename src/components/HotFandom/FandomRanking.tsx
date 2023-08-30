import { useNavigate } from "react-router-dom";
import * as S from "./style/FandomRanking.style";

type FandomRankData = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    image: string;
};

type FandomdataProps = {
    item: FandomRankData;
};

const FandomRanking: React.FC<FandomdataProps> = ({ item }) => {
    const navigate = useNavigate();
    const handleItemClick = () => {
        navigate(`/fandom/${item.id}`);
    };

    return (
        <S.FandomRankingContainer key={item.id} onClick={handleItemClick}>
            <S.RankingNumberText>{item.rank}</S.RankingNumberText>
            <S.CircleImg src={item?.image} />
            <S.RnakingTextBox>
                <S.FandomNameMemberBox>
                    <S.FandomNameText>{item.fandomName}</S.FandomNameText>
                    <S.MamberIcon />
                    <S.MemberQuantity>{item.memberLength}k</S.MemberQuantity>
                </S.FandomNameMemberBox>
                <S.ActivityTime>채팅활동 10분전</S.ActivityTime>
            </S.RnakingTextBox>
        </S.FandomRankingContainer>
    );
};

export default FandomRanking;
