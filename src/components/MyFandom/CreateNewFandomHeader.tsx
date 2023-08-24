import * as S from "./style/CreateNewFandomHeader.style";

const CreateNewFandomHeader = () => {
    return (
        <S.ContentHeaderContainer>
            <S.MyFandomHeaderBox>
                <S.LeftArrowBtn />
                <S.MyFandomHeaderText>새 팬덤 만들기</S.MyFandomHeaderText>
            </S.MyFandomHeaderBox>

            <S.CheckIconBtn />
        </S.ContentHeaderContainer>
    );
};
export default CreateNewFandomHeader;
