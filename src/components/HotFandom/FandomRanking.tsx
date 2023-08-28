import { useEffect } from "react";
import * as S from "./style/FandomRanking.style";
import { Button } from "../../elements/Button";

type FandomRankData = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    image: string;
};
type FandomData = FandomRankData[];

type FandomdataProps = {
    item: FandomRankData;
};

const FandomRanking: React.FC<FandomdataProps> = ({ item }) => {
    console.log("dd", item);

    useEffect(() => {}, []);

    return (
        <S.FandomRankingContainer key={item.id}>
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
