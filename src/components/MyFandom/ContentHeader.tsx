import * as S from "./style/ContentHeader";

const ContentHeader = () => {
    return (
        <S.ContentHeaderContainer>
            <S.MyFandomHeaderText>마이 팬덤</S.MyFandomHeaderText>
            <S.CreateBtn>+ 새 팬덤 만들기</S.CreateBtn>
        </S.ContentHeaderContainer>
    );
};
export default ContentHeader;
