import * as S from "./style/MyFandomList.style";

type FandomRankData = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    image: string;
};

type FandomdataProps = {
    item: FandomRankData;
};

const MyFandomList: React.FC<FandomdataProps> = ({ item }) => {
    return (
        <S.MyFandomListContainer key={item.id}>
            <S.CircleImg src={item?.image} />
            <S.RnakingTextBox>
                <S.FandomNameMemberBox>
                    <S.FandomNameText>{item.fandomName}</S.FandomNameText>
                    <S.MamberIcon />
                    <S.MemberQuantity>{item.memberLength}</S.MemberQuantity>
                </S.FandomNameMemberBox>
                <S.ActivityTime>채팅활동 10분전</S.ActivityTime>
            </S.RnakingTextBox>
        </S.MyFandomListContainer>
    );
};
export default MyFandomList;
