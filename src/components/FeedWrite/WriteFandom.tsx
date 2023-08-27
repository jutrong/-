import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "react-select";
import * as S from "./style/WriteFandom.style";
import dropdown from "../../assets/images/svg/ic-arrow-down-14.svg";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

type FeedWriteProps = {
  $updatePage: boolean;
  fandomOptions: OptionType[];
  setSelectedFandom: (option: OptionType) => void;
};
type OptionType = {
  value: string;
  label: string;
  id?: number;
};
const WriteFandom: React.FC<FeedWriteProps> = ({
  $updatePage,
  fandomOptions,
  setSelectedFandom,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
    if (option) {
      setSelectedFandom(option);
    }
  };

  return (
    <S.WritingFandom>
      <S.WritingFandomText>작성 팬덤</S.WritingFandomText>
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        options={fandomOptions}
        styles={S.FandomStyles($updatePage)}
        placeholder="팬덤을 선택해주세요."
        isDisabled={$updatePage}
      />
    </S.WritingFandom>
  );
};
export default WriteFandom;
