import * as S from "./style/PopularFandomList.style";

const PopularFandomList: React.FC = () => {
    return (
        <S.PopularFandomListContainer>
            <S.PopularFandomImg>
                <S.NumberOneBox>
                    {" "}
                    <S.NumberOneText>1</S.NumberOneText>
                    <S.NumberOneFandomNameText>
                        A.R.M.Y
                    </S.NumberOneFandomNameText>
                </S.NumberOneBox>
            </S.PopularFandomImg>
            <S.NextNumberFandomBox>
                <S.RankingText>2</S.RankingText>
                <S.FandomNameText>팬덤이름</S.FandomNameText>
            </S.NextNumberFandomBox>
            <S.NextNumberFandomBox>
                <S.RankingText>3</S.RankingText>
                <S.FandomNameText>팬덤이름</S.FandomNameText>
            </S.NextNumberFandomBox>
            <S.NextNumberFandomBox>
                <S.RankingText>4</S.RankingText>
                <S.FandomNameText>팬덤이름</S.FandomNameText>
            </S.NextNumberFandomBox>
        </S.PopularFandomListContainer>
    );
};
export default PopularFandomList;
