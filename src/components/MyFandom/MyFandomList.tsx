import * as S from "./style/MyFandomList.style";

type FandomRankData = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    thumbnailImgUrl: string;
};

type FandomdataProps = {
    item: FandomRankData;
};

const MyFandomList: React.FC<FandomdataProps> = ({ item }) => {
    return (
        <S.MyFandomListContainer key={item.id}>
            <S.CircleImg />
            <S.RnakingTextBox>
                <S.FandomNameMemberBox>
                    <S.FandomNameText>꾹이의 모든것</S.FandomNameText>
                    <S.MamberIcon />
                    <S.MemberQuantity>22k</S.MemberQuantity>
                </S.FandomNameMemberBox>
                <S.ActivityTime>채팅활동 10분전</S.ActivityTime>
            </S.RnakingTextBox>
        </S.MyFandomListContainer>
    );
};
export default MyFandomList;
