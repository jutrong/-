import * as S from "./style/MyFandomBoard.style";
import ContentHeader from "./ContentHeader";
import FandomCircle from "./FandomCircle";

const MyFandomBoard: React.FC = () => {
    return (
        <S.MyFandomBoardContainer>
            <ContentHeader />
            <S.FandomCircleListBox>
                <FandomCircle />

                <FandomCircle />

                <FandomCircle />

                <FandomCircle />

                <FandomCircle />
            </S.FandomCircleListBox>
        </S.MyFandomBoardContainer>
    );
};
export default MyFandomBoard;
