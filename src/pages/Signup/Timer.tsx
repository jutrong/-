import { useEffect, useState } from "react";
import styled from "styled-components";

const TimeCount = styled.span`
  width: 80px;
  height: 12px;
  white-space: nowrap;
  color: #208df1;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  display: inline;
  position: relative;
  right: 61px;
  top: 20px;
`;
export const Timer = () => {
  const MINUTES_IN_MS = 5 * 60 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    if (timeLeft <= 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return (
    <TimeCount>
      {minutes} : {second}
    </TimeCount>
  );
};
