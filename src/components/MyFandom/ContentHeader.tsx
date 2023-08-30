import * as S from "./style/ContentHeader";
import { useNavigate } from "react-router-dom";
const ContentHeader = () => {
    const navigate = useNavigate();
    return (
        <S.ContentHeaderContainer>
            <S.MyFandomHeaderText>마이 팬덤</S.MyFandomHeaderText>
            <S.CreateBtn onClick={() => navigate("/myfandom/createfandom")}>
                + 새 팬덤 만들기
            </S.CreateBtn>
        </S.ContentHeaderContainer>
    );
};
export default ContentHeader;
