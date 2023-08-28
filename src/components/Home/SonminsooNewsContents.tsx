import * as S from "./style/SominsooNewsContents.style";

const SonminsooNewsContents: React.FC = () => {
    return (
        <S.SonminsooNewsContentsContainer>
            <S.SonminsooNewsContentsHeader>
                <S.SonminsooNewsProfileImg />
                <S.SonminsooNewsTextBox>
                    <S.SonminsooNewsNickNameText>
                        정의로운 손민수
                    </S.SonminsooNewsNickNameText>
                    <S.TextBox>
                        <S.SonminsooNewsFandomNameText>
                            꾹이의 모든 것
                        </S.SonminsooNewsFandomNameText>
                        <S.SonminsooNewsTimeText>
                            10분전
                        </S.SonminsooNewsTimeText>
                    </S.TextBox>
                </S.SonminsooNewsTextBox>
            </S.SonminsooNewsContentsHeader>
            <S.SonminsooNewsImg />
            <S.SonminsooNewsArticleBox>
                <S.SonminsooNewsArticleTextBox>
                    <S.SonminsooNewsArticleText>
                        럽셒 울쩡구기 리허설 영상ㅜ...
                    </S.SonminsooNewsArticleText>
                    <S.SonminsooNewsArticleViewAllBtn>
                        더보기
                    </S.SonminsooNewsArticleViewAllBtn>
                </S.SonminsooNewsArticleTextBox>

                <S.SonminsooNewsArticleHashtagBox>
                    <S.SonminsooNewsArticleHashtagText>
                        #우리애들절대지켜
                    </S.SonminsooNewsArticleHashtagText>
                    <S.SonminsooNewsArticleHashtagText>
                        #ARMY
                    </S.SonminsooNewsArticleHashtagText>
                    <S.SonminsooNewsArticleHashtagText>
                        외 3개
                    </S.SonminsooNewsArticleHashtagText>
                </S.SonminsooNewsArticleHashtagBox>
                <S.SonminsooNewsArticleIconBox>
                    <S.LikeIconSvg />
                    <S.LikeQuantity>23</S.LikeQuantity>
                    <S.CommentIconSvg />
                    <S.CommentQuantity>12</S.CommentQuantity>
                </S.SonminsooNewsArticleIconBox>
            </S.SonminsooNewsArticleBox>
        </S.SonminsooNewsContentsContainer>
    );
};
export default SonminsooNewsContents;
