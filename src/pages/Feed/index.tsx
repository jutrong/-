import { Outlet } from "react-router-dom";
import styled from "styled-components";
import StatusBar from "../../components/StatusBar";

const FeedContainer = styled.div`
  width: 390px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
const FeedIndex = () => {
  return (
    <FeedContainer>
      <StatusBar />
      <Outlet />
    </FeedContainer>
  );
};

export default FeedIndex;
