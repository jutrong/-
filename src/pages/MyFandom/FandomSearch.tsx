import * as S from "./style/FandomSearch.style";
import React, { useState } from "react";
import axios from "../../api/axios";
import useInput from "../../hooks/useInput";

const FandomSearch = () => {
    const [inputVal, setInputVal] = useInput("");
    const [resVal, setResVal] = useState("");

    console.log(inputVal);
    const onClickHandler = async () => {
        try {
            const res = await axios.post("url", {
                data: inputVal,
            });
            console.log("검색결과:", res.data.data);
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
                {/* 
                {resVal.map((item)=>( <MyFandomList key={} item={}/>))}
                 */}
            </S.HomeContainer>
        </S.Container>
    );
};
export default FandomSearch;
