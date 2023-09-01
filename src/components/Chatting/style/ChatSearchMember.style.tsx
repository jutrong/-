import styled from 'styled-components';


export const SearchHeader = styled.div`
    width: 100%;
    max-width: 450px;
    height: 50px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: #fff;

    display: flex;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 1001;
`;

export const BackButtonIcon = styled.img`
    width: 24px;
    height: 24px;

    margin-right: 14px;
    cursor: pointer;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 90%;
    padding: 16px;
    
    background-color: #F6F6F6;
    border: 1px solid #E8E8E8;
    border-radius: 8px;
    box-sizing: border-box;

    $::placeholder {
        color: #BDBDBD;
        font-size: 16px;
    }
`;

export const SearchMemberContainer = styled.div`
    width: 100%;
    height: 100%;

    padding: 82px 16px 0;
    background-color: #fff;
`;

export const SearchMemberWrapper = styled.div`
    width: 100%;
    max-width: 450px;
    height: 100%;

    position: fixed;
    top: 0;
    z-index: 1000;
`;