import * as S from "./style/FandomSearch.style";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import useInput from "../../hooks/useInput";
import MyFandomList from "../../components/MyFandom/MyFandomList";

import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
type FandomSearchData = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    image: string;
};
type FandomData = FandomSearchData[];

type FandomdataProps = {
    item: FandomSearchData;
};

const FandomSearch = () => {
    const navigation = useNavigate();

    const [inputVal, setInputVal] = useInput("");
    const [resVal, setResVal] = useState<FandomData>([]);

    const onClickHandler = async () => {
        try {
            const res = await axios.get(
                `/fandoms/search?search=${encodeURIComponent(inputVal)}`
            );
            setResVal(res.data.data);
        } catch (error) {
            console.error("Error", error);
        }
    };
    useEffect(() => {
        onClickHandler();
    }, []);
    return (
        <>
            <S.Container>
                <S.HomeContainer>
                    <S.HeaderBox>
                        <S.InputHeaderBox>
                            <S.InputIconBox>
                                <S.LeftArrowIcon
                                    onClick={() => navigation(-1)}
                                />
                                <S.Input onChange={setInputVal} />
                                <S.SearchIcon onClick={onClickHandler} />
                            </S.InputIconBox>
                        </S.InputHeaderBox>
                    </S.HeaderBox>

                    {resVal.map((item) => (
                        <MyFandomList key={item.id} item={item} />
                    ))}
                </S.HomeContainer>
            </S.Container>
            <FooterNavBar />
        </>
    );
};
export default FandomSearch;
