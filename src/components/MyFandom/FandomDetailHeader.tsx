import * as S from "./style/FandomDetailHeader.style";

const FandomDetailHeader = () => {
    return (
        <S.ContentHeaderContainer>
            <S.MyFandomHeaderBox>
                <S.LeftArrowBtn />
            </S.MyFandomHeaderBox>
            <S.CheckIconBtn />
        </S.ContentHeaderContainer>
    );
};
export default FandomDetailHeader;
