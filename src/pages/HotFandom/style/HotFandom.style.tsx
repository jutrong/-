import styled from "styled-components";
import BgBlue from "../../../assets/images/png/background Blue.png";

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const HotFandomContainer = styled.div`
    margin: 0 auto;

    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderBox = styled.div`
    flex-direction: row;
    justify-content: left;
    background-image: url(${BgBlue});
    background-color: blue;
    height: 292px;
`;
