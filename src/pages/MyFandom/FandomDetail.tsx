import * as S from "./style/FandomDetail.style";

import FandomDetailHeader from "../../components/MyFandom/FandomDetailHeader";
import Notice from "../../components/MyFandom/Notice";

const FandomDetail = () => {
    return (
        <S.Container>
            <S.HeaderBox>
                <FandomDetailHeader />
                <S.Img />
                <S.FandomJoinBox>
                    <S.FandomName>A.R.M.Y</S.FandomName>
                    <S.FandomMember>멤버 22</S.FandomMember>
                    <S.JoimBtn>팬덤 가입</S.JoimBtn>
                </S.FandomJoinBox>
            </S.HeaderBox>

            <Notice />
        </S.Container>
    );
};
export default FandomDetail;
