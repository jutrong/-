import * as S from "./style/CreateNewFandom.style";
import CreateNewFandomHeader from "../../components/MyFandom/CreateNewFandomHeader";

const CreateNewFandom = () => {
    return (
        <S.Container>
            <CreateNewFandomHeader />
            <S.ImgBox>
                <S.ImgIcon />
                <S.ImgBoxText>이미지 추가</S.ImgBoxText>
            </S.ImgBox>
            <S.Input></S.Input>
        </S.Container>
    );
};
export default CreateNewFandom;
