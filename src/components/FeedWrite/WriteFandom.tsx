import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import * as S from "./style/WriteFandom.style";
import dropdown from "../../assets/images/svg/ic-arrow-down-14.svg";

type FeedWriteProps = {
  $updatePage: boolean;
};

const options = [
  { value: "꾹이의 모든 것", label: "꾹이의 모든 것" },
  { value: "카시오페아", label: "카시오페아" },
  { value: "소녀시대짱짱", label: "소녀시대짱짱" },
];

const WriteFandom: React.FC<FeedWriteProps> = ({ $updatePage }) => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <S.WritingFandom>
      <S.WritingFandomText>작성 팬덤</S.WritingFandomText>
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        options={options}
        styles={S.FandomStyles($updatePage)}
        placeholder="팬덤을 선택해주세요."
        isDisabled={$updatePage}
      />
    </S.WritingFandom>
  );
};
export default WriteFandom;
