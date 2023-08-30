import { useLocation } from "react-router-dom";
import IconWithText from "./IconWithText";
import * as S from "./style/FooterNavBar.style";

const FooterNavBar = () => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <S.FooterNavBarWrapper>
            <S.TabIconWrapper>
                <S.LinkItem to="/home">
                    <IconWithText text="홈" pathname={pathname} />
                </S.LinkItem>
                <S.LinkItem to="/feed">
                    <IconWithText text="피드" pathname={pathname} />
                </S.LinkItem>
                <S.LinkItem to="/minsooItem">
                    <IconWithText text="손민수템" pathname={pathname} />
                </S.LinkItem>
                <S.LinkItem to="/chatting">
                    <IconWithText text="채팅방" pathname={pathname} />
                </S.LinkItem>
                <S.LinkItem to="/myPage">
                    <IconWithText text="마이페이지" pathname={pathname} />
                </S.LinkItem>
            </S.TabIconWrapper>
        </S.FooterNavBarWrapper>
    );
};

export default FooterNavBar;
