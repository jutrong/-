import * as S from "./style/MyFandom.style";

import HomeHeader from "../../components/Home/HomeHeader";
import FandomMenu from "../../components/MyFandom/FandomMenu";
import ContentHeader from "../../components/MyFandom/ContentHeader";
import MyFandomList from "../../components/MyFandom/MyFandomList";

const MyFandom = () => {
    return (
        <S.Container>
            <S.MyFandomHeaderBox>
                <HomeHeader />
                <FandomMenu />
            </S.MyFandomHeaderBox>
            <S.MyFandomListBox>
                <ContentHeader />

                <MyFandomList />
                <MyFandomList />
                <MyFandomList />
                <MyFandomList />
            </S.MyFandomListBox>
        </S.Container>
    );
};
export default MyFandom;
