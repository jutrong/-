import * as S from "./style/FandomSearch.style";
import React, { useState } from "react";
import axios from "../../api/axios";
import useInput from "../../hooks/useInput";
import MyFandomList from "../../components/MyFandom/MyFandomList";

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
    const [inputVal, setInputVal] = useInput("");
    const [resVal, setResVal] = useState<FandomData>([]);

    console.log(encodeURIComponent(inputVal));
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

    return (
        <S.Container>
            <S.HomeContainer>
                <S.HeaderBox>
                    <S.InputHeaderBox>
                        <S.InputIconBox>
                            <S.LeftArrowIcon />
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
    );
};
export default FandomSearch;
