import styled from "styled-components";

// 팬덤메뉴 컨테이너
const Container = styled.div`
    display: flex;
`;

// 팬덤 메뉴박스
const MenuBox = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    border: solid black;
    box-shadow: 3px 3px;
    background-color: rgba(255, 255, 255, 0.6);

    margin-left: 20px;
`;

//팬덤 메뉴 텍스트
const MenuText = styled.div`
    color: #1d1b20;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    margin-top: 12px;
`;

//팬덤 메뉴 아이콘 텍스트
const MenuIconText = styled.div`
    font-size: 31px;
    text-align: center;
    margin-top: 32px;
`;

const FandomMenu = () => {
    return (
        <Container>
            <MenuBox>
                <MenuIconText>🔍</MenuIconText>
                <MenuText>
                    또 다른 팬덤도 <br />
                    둘러보세요!
                </MenuText>
            </MenuBox>
            <MenuBox>
                <MenuIconText>💬</MenuIconText>
                <MenuText>
                    지금은 다같이
                    <br />
                    덕담을 해야할 때야!
                </MenuText>
            </MenuBox>
        </Container>
    );
};
export default FandomMenu;
