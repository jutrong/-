import ContentHeader from "./ContentHeader";
import PopularFandomList from "./PopularFandomList";

import * as S from "./style/PopularFandomBoard.style";

const PopularFandomBoard: React.FC = () => {
    return (
        <S.PopularFandomBoarContainer>
            <ContentHeader />
            <PopularFandomList />
        </S.PopularFandomBoarContainer>
    );
};
export default PopularFandomBoard;
