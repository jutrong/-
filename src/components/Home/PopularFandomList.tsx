import styled from "styled-components";

//인기팬덤리스트 컨네이너
const PopularFandomListContainer = styled.div`
    height: 209px;
    width: 358px;
    border: solid black;
    border-radius: 8px;
    margin: 0 auto;
`;
// 팬덤 이미지 box
const PopularFandomImg = styled.div`
    height: 95px;
    background-color: black;
`;

const NumberOneBox = styled.div`
    display: flex;
    padding: 35px 0 35px;
`;
// 1위 팬덤 텍스트
const NumberOneText = styled.div`
    color: #d5f033;
    font-size: 15px;
    font-weight: 700;
    margin-left: 26px;
`;
// 팬덤 이름 텍스트
const NumberOneFandomNameText = styled.div`
    color: white;
    margin-left: 12px;
    font-size: 15px;
    font-weight: 700;
`;

// 2, 3, 4 팬덤 텍스트 박스
const NextNumberFandomBox = styled.div`
    display: flex;
    height: 30px;
`;

// 순위 텍스트
const RankingText = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: #6138f8;
    margin-left: 22px;
`;

// 팬덤이름 텍스트
const FandomNameText = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: #000000;
    margin-left: 15px;
`;

const PopularFandomList = () => {
    return (
        <>
            <PopularFandomListContainer>
                <PopularFandomImg>
                    <NumberOneBox>
                        {" "}
                        <NumberOneText>1</NumberOneText>
                        <NumberOneFandomNameText>
                            A.R.M.Y
                        </NumberOneFandomNameText>
                    </NumberOneBox>
                </PopularFandomImg>
                <NextNumberFandomBox>
                    <RankingText>2</RankingText>
                    <FandomNameText>팬덤이름</FandomNameText>
                </NextNumberFandomBox>
                <NextNumberFandomBox>
                    <RankingText>3</RankingText>
                    <FandomNameText>팬덤이름</FandomNameText>
                </NextNumberFandomBox>
                <NextNumberFandomBox>
                    <RankingText>4</RankingText>
                    <FandomNameText>팬덤이름</FandomNameText>
                </NextNumberFandomBox>
            </PopularFandomListContainer>
        </>
    );
};
export default PopularFandomList;
