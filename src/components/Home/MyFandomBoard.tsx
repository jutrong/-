import styled from "styled-components";
import ContentHeader from "./ContentHeader";
import FandomCircle from "./FandomCircle";

// 팬덤 서클 리스트 컨테이너
const MyFandomBoardContainer = styled.div`
    height: 193px;
`;

// 서클 리스트 박스
const FandomCircleListBox = styled.div`
    height: 144px;

    display: flex;
    overflow: scroll;
`;

// PandomCircle 임포트

const MyFandomBoard = () => {
    return (
        <div>
            <MyFandomBoardContainer>
                <ContentHeader />
                <FandomCircleListBox>
                    <FandomCircle />

                    <FandomCircle />

                    <FandomCircle />

                    <FandomCircle />

                    <FandomCircle />
                </FandomCircleListBox>
            </MyFandomBoardContainer>
        </div>
    );
};
export default MyFandomBoard;
