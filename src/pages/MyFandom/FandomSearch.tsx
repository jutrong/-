import styled from "styled-components";
import MyFandomList from "../../components/MyFandom/MyFandomList";
import { ReactComponent as LeftArrow } from "../../assets/images/svg/ic-arrow-left.svg";
import { ReactComponent as Search } from "../../assets/images/svg/ic-search.svg";
// 홈 컨테이너
const Container = styled.div`
    width: 100%;
    max-width: 390px;
    min-height: 844px;
    background-color: #f5f5f5;
`;

const HeaderBox = styled.div`
    height: 97px;
    background-color: white;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.1);
`;

// 인풋 헤더 박스
const InputHeaderBox = styled.div`
    padding-top: 40px;
`;
// 인풋 아이콘 박스
const InputIconBox = styled.div`
    height: 50px;
    padding-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
`;
// 인풋
const Input = styled.input`
    background-color: white;
    border: none;
    width: 70%;
`;

// 뒤로가기 아이콘
const LeftArrowIcon = styled(LeftArrow)`
    width: 24px;
    height: 24px;
`;

//검색아이콘
const SearchIcon = styled(Search)`
    width: 24px;
    height: 24px;
    padding-right: 16px;
`;

// 리스트박스
// 리스트 임포트하기
const FandomSearch = () => {
    return (
        <Container>
            <HeaderBox>
                {" "}
                <InputHeaderBox>
                    <InputIconBox>
                        <LeftArrowIcon />
                        <Input />
                        <SearchIcon />
                    </InputIconBox>
                </InputHeaderBox>
            </HeaderBox>

            <MyFandomList />
            <MyFandomList />
            <MyFandomList />
            <MyFandomList />
        </Container>
    );
};
export default FandomSearch;
