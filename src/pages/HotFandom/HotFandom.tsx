import styled from "styled-components";

import HotFandomCircle from "../../components/HotFandom/HotFandomCircle";
import HotFandomHeader from "../../components/HotFandom/HotFandomHeader";
import FandomRanking from "../../components/HotFandom/FandomRanking";
// 핫 팬덤 컨테이너
const Container = styled.div`
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 390px;
`;
const HeaderBox = styled.div`
    flex-direction: row;
    justify-content: left;
    background-color: blue;
    height: 292px;
`;

const HotFandom = () => {
    return (
        <Container>
            <HeaderBox>
                {" "}
                <HotFandomHeader />
                <HotFandomCircle />
            </HeaderBox>
            <FandomRanking /> <FandomRanking />
            <FandomRanking /> <FandomRanking /> <FandomRanking />{" "}
            <FandomRanking /> <FandomRanking /> <FandomRanking />{" "}
            <FandomRanking />
        </Container>
    );
};
export default HotFandom;
