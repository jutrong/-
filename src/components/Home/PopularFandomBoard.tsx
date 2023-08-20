import ContentHeader from "./ContentHeader";
import PopularFandomList from "./PopularFandomList";
import styled from "styled-components";

const PopularFandomBoarContainer = styled.div`
    height: 365px;
    width: 100%;
    max-width: 390px;
`;

const PopularFandomBoard = () => {
    return (
        <>
            <PopularFandomBoarContainer>
                <ContentHeader />
                <PopularFandomList />
            </PopularFandomBoarContainer>
        </>
    );
};
export default PopularFandomBoard;
