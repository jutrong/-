import ContentHeader from "./ContentHeader";
import PopularFandomList from "./PopularFandomList";

import React, { useState, useEffect } from "react";

import * as S from "./style/PopularFandomBoard.style";

const PopularFandomBoard: React.FC = () => {
    return (
        <S.PopularFandomBoarContainer>
            <ContentHeader nav={"/hotfandom"} name={"❤️‍🔥 HOT 타오르는 팬덤"} />
            <PopularFandomList />
        </S.PopularFandomBoarContainer>
    );
};
export default PopularFandomBoard;
