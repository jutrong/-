import * as S from "./style/Notice.style";
const Notice = () => {
    return (
        <S.NoticeContainer>
            <S.NoticeHeaderBox>
                <S.NoticeHeaderText>공지</S.NoticeHeaderText>
                <S.ProfileBox>
                    <S.ProfileImg />
                    <S.ProfileTextBox>
                        <S.NicknameText>정의로운 손민수</S.NicknameText>
                        <S.FandomNameTimeBox>
                            <S.NameTimeText>꾹이의 모든 것</S.NameTimeText>
                            <S.NameTimeText>10분전</S.NameTimeText>
                        </S.FandomNameTimeBox>
                    </S.ProfileTextBox>
                    <S.ProfileIcon />
                </S.ProfileBox>
            </S.NoticeHeaderBox>

            <S.NoticeTextBox>
                <S.NoticeText>
                    공지는 하나만 상위 고정할 수 있으며
                    <br />긴 내용은 3줄까지만 허용
                    <br />
                    3줄이 넘어가고 글이 너무 길어서 더이상 표시 되지
                </S.NoticeText>
            </S.NoticeTextBox>
        </S.NoticeContainer>
    );
};
export default Notice;
