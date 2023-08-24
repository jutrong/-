import * as S from "./style/FandomSearch.style";
import MyFandomList from "../../components/MyFandom/MyFandomList";

const FandomSearch = () => {
    return (
        <S.Container>
            <S.HeaderBox>
                {" "}
                <S.InputHeaderBox>
                    <S.InputIconBox>
                        <S.LeftArrowIcon />
                        <S.Input />
                        <S.SearchIcon />
                    </S.InputIconBox>
                </S.InputHeaderBox>
            </S.HeaderBox>

            <MyFandomList />
            <MyFandomList />
            <MyFandomList />
            <MyFandomList />
        </S.Container>
    );
};
export default FandomSearch;
