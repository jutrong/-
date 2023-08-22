import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/images/svg/home/homeLogo.svg";
import { ReactComponent as SettingIcon } from "../../assets/images/svg/home/settingIcon.svg";

// 홈 헤더 박스
const HomeHeaderBox = styled.div`
    height: 50px;

    padding-top: 40px;

    //background-color: beige;
`;

// 홈 헤더 로고
const HomeLogo = styled(Logo)`
    width: 100px;
    height: 18px;
    margin-left: 16px;
`;

// 홈 헤더 설정 아이콘
const HomeSettingIcon = styled(SettingIcon)`
    width: 24px;
    height: 24px;
    margin-right: 16px;
    float: right;
`;

const HomeHeader = () => {
    return (
        <HomeHeaderBox>
            <HomeLogo />
            <HomeSettingIcon />
        </HomeHeaderBox>
    );
};
export default HomeHeader;
