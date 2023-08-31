import * as S from "./style/HomeHeader.style";
import { useNavigate } from "react-router-dom";

const HomeHeader: React.FC = () => {
    const navigate = useNavigate();
    return (
        <S.HomeHeaderBox>
            <S.HomeLogo />
            <S.HomeSettingIcon
                onClick={() => {
                    navigate("설정페이지 경로");
                }}
            />
        </S.HomeHeaderBox>
    );
};
export default HomeHeader;
