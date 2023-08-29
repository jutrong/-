import { type } from "os";
import * as S from "./style/ContentHeader.style";
import { useNavigate } from "react-router-dom";

type Headerprops = {
    nav: string;
    name: string;
};

const ContentHeader: React.FC<Headerprops> = ({ nav, name }) => {
    const navigate = useNavigate();

    return (
        <S.ContentHeaderContainer>
            <S.MyFandomHeaderText>{name}</S.MyFandomHeaderText>
            <S.ViewAllBtn
                onClick={() => {
                    navigate(nav);
                }}
            />
        </S.ContentHeaderContainer>
    );
};
export default ContentHeader;
