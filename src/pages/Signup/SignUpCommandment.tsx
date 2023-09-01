import React from "react";
import * as S from "./style/SignUpCommandment.style";
import { Button } from "../../elements/Button";
import title from "../../assets/images/svg/commandment/ic-commandment-title.svg";
import one from "../../assets/images/svg/commandment/ic-1.svg";
import two from "../../assets/images/svg/commandment/ic-2.svg";
import three from "../../assets/images/svg/commandment/ic-3.svg";
import four from "../../assets/images/svg/commandment/ic-4.svg";
import five from "../../assets/images/svg/commandment/ic-5.svg";
import six from "../../assets/images/svg/commandment/ic-6.svg";
import seven from "../../assets/images/svg/commandment/ic-7.svg";
import eight from "../../assets/images/svg/commandment/ic-8.svg";
import nine from "../../assets/images/svg/commandment/ic-9.svg";
import ten from "../../assets/images/svg/commandment/ic-10.svg";

const SignUpCommandment = ({ onClick }: { onClick: any }) => {
  return (
    <S.Wrap>
      <S.Container>
        <S.TitleBox>
          <S.Title src={title} />
        </S.TitleBox>
        <S.DescBox>
          <S.SentenceBox>
            <S.Order src={one} />
            <S.Desc>
              우리는 사랑하는 아티스트를 지키는 정의로운 손민수다.
            </S.Desc>
          </S.SentenceBox>
          <S.SentenceBox>
            <S.Order src={two} />
            <S.Desc>
              우리는 사랑하는 아티스트의 마음을 다치게 하지않는다.
            </S.Desc>
          </S.SentenceBox>
          <S.SentenceBox>
            <S.Order src={three} />
            <S.Desc>
              우리는 사랑하는 아티스트의 사생활을 침범하지 않는다.
            </S.Desc>
          </S.SentenceBox>
          <S.SentenceBox>
            <S.Order src={four} />
            <S.Desc>우리는 모든 아티스트를 존중하며 보호한다.</S.Desc>
          </S.SentenceBox>
          <S.SentenceBox>
            <S.Order src={five} />
            <S.Desc>우리는 불건전한 정보를 경계하며 유포하지 않는다.</S.Desc>
          </S.SentenceBox>
          <S.SentenceBox>
            <S.Order src={six} />
            <S.Desc>
              우리는 공유하고 공유하여 모두가 널리 이롭게 할 것이다.
            </S.Desc>
          </S.SentenceBox>
          <S.SentenceBox>
            <S.Order src={seven} />
            <S.Desc>우리는 그저 지갑을 열고 기뻐하고 만족할 뿐이다.</S.Desc>
          </S.SentenceBox>
          <S.SentenceBox>
            <S.Order src={eight} />
            <S.Desc>우리는 그저 공기처럼 존재 할 뿐, 분탕질하지 않는다.</S.Desc>
          </S.SentenceBox>
          <S.SentenceBox>
            <S.Order src={nine} />
            <S.Desc>우리는 모든 아티스트를 존중한다.</S.Desc>
          </S.SentenceBox>
          <S.SentenceBox>
            <S.Order src={ten} />
            <S.Desc>우리는 자랑스런 손민수다.</S.Desc>
          </S.SentenceBox>
        </S.DescBox>
      </S.Container>
      <Button
        background="#6138F8"
        border="none"
        onClick={onClick}
        margin={"27px auto 0 auto"}
        color="#FFF"
      >
        확인
      </Button>
    </S.Wrap>
  );
};

export default SignUpCommandment;
