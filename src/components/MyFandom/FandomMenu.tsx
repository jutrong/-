import * as S from "./style/FandomMenu.style";

const FandomMenu = () => {
    return (
        <S.Container>
            <S.MenuBox>
                <S.MenuIconText>🔍</S.MenuIconText>
                <S.MenuText>
                    또 다른 팬덤도 <br />
                    둘러보세요!
                </S.MenuText>
            </S.MenuBox>
            <S.MenuBox>
                <S.MenuIconText>💬</S.MenuIconText>
                <S.MenuText>
                    지금은 다같이
                    <br />
                    덕담을 해야할 때야!
                </S.MenuText>
            </S.MenuBox>
        </S.Container>
    );
};
export default FandomMenu;
