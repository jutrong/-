import styled from 'styled-components';



const getHeight = ($imageCount: number) => {
    let height: string = '';

    if ($imageCount >= 3) {
        height = '181px';
    } else if ($imageCount === 2) {
        height = '135px';
    } else {
        height = '272px';
    }

    return height;
}

const getGridColumns = ($imageCount: number) => {
    let columns: string = '';

    if ($imageCount >= 3) {
        columns = '181px 90px';
    } else if ($imageCount === 2) {
        columns = '135px 136px';
    } else {
        columns = '272px';
    }

    return columns;
}

const getGridRows = ($imageCount: number) => {
    let row: string = '';

    if ($imageCount >= 3) {
        row = '90px';
    } else if ($imageCount === 2) {
        row = '135px';
    } else {
        row = '272px';
    }
    return row;
}

const gridCombine = () => {

    return `&:nth-child(1) {
        grid-row: 1 / span 2;
    }`
}

export const GridImageWrapper = styled.div<{isMe: boolean}>`
    display: flex;
    justify-content: ${props => props.isMe ? 'flex-end' : 'flex-start'}
`;

export const GridImageContainer = styled.div<{$imageCount: number}>`
    width: 272px;
    height: ${props => getHeight(props.$imageCount)};

    display: grid;
    grid-template-columns: ${props => getGridColumns(props.$imageCount)};
    grid-template-rows: ${props => getGridRows(props.$imageCount)};
    gap: 1px;

    border-radius: 8px;
    position: relative;
`;

export const GridImage = styled.img<{$imageCount: number}>`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    display: grid;

    background: pink;
    cursor: pointer;
    ${props => props.$imageCount >= 3 && gridCombine};
`;

export const ModalImage = styled.div`
    width: 90px;
    height: 90px;
    margin: 0 auto;
    
    color: white;
    background: black;
    opacity: 0.6;
    border-radius: 8px;
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;
    right: 0; 
`;