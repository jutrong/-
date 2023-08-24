import * as S from "./style/FandomRanking.style";

const FandomRanking = () => {
    return (
        <S.FandomRankingContainer>
            <S.RankingNumberText>2</S.RankingNumberText>
            <S.CircleImg />
            <S.RnakingTextBox>
                <S.FandomNameMemberBox>
                    <S.FandomNameText>꾹이의 모든것</S.FandomNameText>
                    <S.MamberIcon />
                    <S.MemberQuantity>22k</S.MemberQuantity>
                </S.FandomNameMemberBox>
                <S.ActivityTime>채팅활동 10분전</S.ActivityTime>
            </S.RnakingTextBox>
        </S.FandomRankingContainer>
    );
};
export default FandomRanking;
