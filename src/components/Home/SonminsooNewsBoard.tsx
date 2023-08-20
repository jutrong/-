import styled from "styled-components";
import ContentHeader from "./ContentHeader";
import SonminsooNewsContents from "./SonminsooNewsContents";

const SonminsooNewsBoardContainer = styled.div`
    height: 415px;
    padding-top: 8px;
`;
const SonminsooNewsListBox = styled.div`
    height: 360px;
    margin-top: 8px;
    width: 100%;
    max-width: 390px;
    display: inline-flex;
    white-space: nowrap;
    overflow-x: scroll;
`;

const SonminsooNewsBoard = () => {
    return (
        <>
            <SonminsooNewsBoardContainer>
                <ContentHeader />
                <SonminsooNewsListBox>
                    <SonminsooNewsContents />
                    <SonminsooNewsContents />
                </SonminsooNewsListBox>
            </SonminsooNewsBoardContainer>
        </>
    );
};
export default SonminsooNewsBoard;
