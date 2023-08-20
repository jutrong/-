import styled from "styled-components";
import { ReactComponent as LikeIcon } from "../../assets/images/svg/home/likeIcon.svg";
import { ReactComponent as CommentIcon } from "../../assets/images/svg/home/commentIcon.svg";
// 손민수 뉴스 컨텐츠 컨테이너
const SonminsooNewsContentsContainer = styled.div`
    width: 258px;
    height: 330px;
    margin-left: 15px;
    border-radius: 8px;
    border: solid black;

    box-shadow: 5px 5px;
`;

// 손민수 뉴스 컨텐츠 헤더 박스
const SonminsooNewsContentsHeader = styled.div`
    height: 66px;
    display: flex;
    align-items: center;
`;

// 손민수 뉴스 컨텐츠 헤더 서클 이미지
const SonminsooNewsProfileImg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 16px;
    background-color: black;
`;

// 손민수 뉴스 텍스트들 박스
const SonminsooNewsTextBox = styled.div`
    height: 33px;
    margin-left: 6px;
`;
// 손민수 뉴스 헤더 닉네임 텍스트
const SonminsooNewsNickNameText = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin: 0;
`;

// 팬던 네임, 시간 박스
const TextBox = styled.div`
    display: flex;
    margin-top: 5px;
`;

// 손민수 뉴스 헤더 팬덤네임 텍스트
const SonminsooNewsFandomNameText = styled.p`
    font-size: 13px;
    opacity: 0.5;
    margin: 0;
`;
// 손민수 뉴스 헤더 시간 텍스트
const SonminsooNewsTimeText = styled.p`
    font-size: 13px;
    opacity: 0.5;
    margin: 0;
`;
// 손민수 뉴스 이미지
const SonminsooNewsImg = styled.div`
    height: 153px;
    width: 100%;
    background-color: black;
`;
// 손민수 내용 전체 박스
const SonminsooNewsArticleBox = styled.div`
    height: 108px;
    padding-left: 21px;
`;

// 손민수 내용 글 박스
const SonminsooNewsArticleTextBox = styled.div`
    display: flex;
    margin-top: 12px;
`;

// 손민수 내용 텍스트
const SonminsooNewsArticleText = styled.div`
    font-size: 14px;
`;
// 손민수 내용 더보기 버튼
const SonminsooNewsArticleViewAllBtn = styled.div`
    font-size: 14px;
    color: rgba(186, 186, 186, 1);
`;

// 손민수 해쉬태그 박스
const SonminsooNewsArticleHashtagBox = styled.div`
    display: flex;
`;
// 손민수 해쉬태그 텍스트
const SonminsooNewsArticleHashtagText = styled.p`
    color: #6138f8;
    font-size: 14px;
`;

// 손민수 아이콘 박스
const SonminsooNewsArticleIconBox = styled.div`
    display: flex;
`;
// 하트 아이콘

const LikeIconSvg = styled(LikeIcon)`
    width: 16px;
    height: 16px;

    float: right;
`;

// 하트 갯수
const LikeQuantity = styled.div`
    font-size: 14px;
    color: #6c7080;
    margin-left: 3px;
`;

// 댓글 아이콘
const CommentIconSvg = styled(CommentIcon)`
    width: 16px;
    height: 16px;
    margin-left: 12px;
    float: right;
`;

// 댓글 갯수
const CommentQuantity = styled.div`
    font-size: 14px;
    color: #6c7080;
    margin-left: 3px;
`;

const SonminsooNewsContents = () => {
    return (
        <>
            <SonminsooNewsContentsContainer>
                <SonminsooNewsContentsHeader>
                    <SonminsooNewsProfileImg />
                    <SonminsooNewsTextBox>
                        <SonminsooNewsNickNameText>
                            정의로운 손민수
                        </SonminsooNewsNickNameText>
                        <TextBox>
                            <SonminsooNewsFandomNameText>
                                꾹이의 모든 것
                            </SonminsooNewsFandomNameText>
                            <SonminsooNewsTimeText>
                                10분전
                            </SonminsooNewsTimeText>
                        </TextBox>
                    </SonminsooNewsTextBox>
                </SonminsooNewsContentsHeader>
                <SonminsooNewsImg />
                <SonminsooNewsArticleBox>
                    <SonminsooNewsArticleTextBox>
                        <SonminsooNewsArticleText>
                            럽셒 울쩡구기 리허설 영상ㅜ...
                        </SonminsooNewsArticleText>
                        <SonminsooNewsArticleViewAllBtn>
                            더보기
                        </SonminsooNewsArticleViewAllBtn>
                    </SonminsooNewsArticleTextBox>

                    <SonminsooNewsArticleHashtagBox>
                        <SonminsooNewsArticleHashtagText>
                            #우리애들절대지켜
                        </SonminsooNewsArticleHashtagText>
                        <SonminsooNewsArticleHashtagText>
                            #ARMY
                        </SonminsooNewsArticleHashtagText>
                        <SonminsooNewsArticleHashtagText>
                            외 3개
                        </SonminsooNewsArticleHashtagText>
                    </SonminsooNewsArticleHashtagBox>
                    <SonminsooNewsArticleIconBox>
                        <LikeIconSvg />
                        <LikeQuantity>23</LikeQuantity>
                        <CommentIconSvg />
                        <CommentQuantity>12</CommentQuantity>
                    </SonminsooNewsArticleIconBox>
                </SonminsooNewsArticleBox>
            </SonminsooNewsContentsContainer>
        </>
    );
};
export default SonminsooNewsContents;
