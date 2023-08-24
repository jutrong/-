import * as S from "./style/ContentHeader.style";

const ContentHeader: React.FC = () => {
    return (
        <S.ContentHeaderContainer>
            <S.MyFandomHeaderText>마이 팬덤</S.MyFandomHeaderText>
            <S.ViewAllBtn />
        </S.ContentHeaderContainer>
    );
};
export default ContentHeader;
