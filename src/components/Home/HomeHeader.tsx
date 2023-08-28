import * as S from "./style/HomeHeader.style";

const HomeHeader: React.FC = () => {
    return (
        <S.HomeHeaderBox>
            <S.HomeLogo />
            <S.HomeSettingIcon />
        </S.HomeHeaderBox>
    );
};
export default HomeHeader;
