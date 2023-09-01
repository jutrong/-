import styled from 'styled-components';



const getHeight = ($imageCount: number) => {

    if ($imageCount >= 3) {
        return '181px';
    } else if ($imageCount === 2) {
        return '135px';
    } else {
        return '272px';
    }
}

const getGridColumns = ($imageCount: number) => {

    if ($imageCount >= 3) {
        return '181px 90px';
    } else if ($imageCount === 2) {
        return '135px 136px';
    } else {
        return '272px';
    }
}

const getGridRows = ($imageCount: number) => {

    if ($imageCount >= 3) {
        return '90px 90px 90px';
    } else if ($imageCount === 2) {
        return '135px';
    } else {
        return '272px';
    }
}

const gridCombine = () => {

    return `&:nth-child(1) {
        grid-row: 1 / span 2;
    }`
}

export const GridImageWrapper = styled.div`
    margin-bottom: 8px;
    display: flex;
`;

export const GridImageContainer = styled.div<{$imageCount: number}>`
    width: 272px;
    height: ${({$imageCount}) => getHeight($imageCount)};

    display: grid;
    grid-template-columns: ${({$imageCount}) => getGridColumns($imageCount)};
    grid-template-rows: ${({$imageCount}) => getGridRows($imageCount)};
    gap: 1px;

    border-radius: 8px;
    position: relative;
`;

export const GridImage = styled.img<{$imageCount: number}>`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    display: grid;
    ${({$imageCount}) => $imageCount >= 3 && gridCombine};

    cursor: pointer;
    object-fit: cover;
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