import * as S from "./style/SonminsooNewsBoard.style";
import ContentHeader from "./ContentHeader";
import SonminsooNewsContents from "./SonminsooNewsContents";

const SonminsooNewsBoard: React.FC = () => {
    return (
        <>
            <S.SonminsooNewsBoardContainer>
                <ContentHeader />
                <S.SonminsooNewsListBox>
                    <SonminsooNewsContents />
                    <SonminsooNewsContents />
                </S.SonminsooNewsListBox>
            </S.SonminsooNewsBoardContainer>
        </>
    );
};
export default SonminsooNewsBoard;
