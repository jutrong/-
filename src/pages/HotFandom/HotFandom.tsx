import * as S from "./style/HotFandom.style";
import HotFandomCircle from "../../components/HotFandom/HotFandomCircle";
import HotFandomHeader from "../../components/HotFandom/HotFandomHeader";
import FandomRanking from "../../components/HotFandom/FandomRanking";

const HotFandom = () => {
    return (
        <S.Container>
            <S.HeaderBox>
                <HotFandomHeader />
                <HotFandomCircle />
            </S.HeaderBox>
            <FandomRanking /> <FandomRanking />
            <FandomRanking /> <FandomRanking /> <FandomRanking />{" "}
            <FandomRanking /> <FandomRanking /> <FandomRanking />{" "}
            <FandomRanking />
        </S.Container>
    );
};
export default HotFandom;
