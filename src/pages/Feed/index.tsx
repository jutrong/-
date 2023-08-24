import { Outlet } from "react-router-dom";
import styled from "styled-components";
import StatusBar from "../../components/StatusBar";

const FeedContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  padding-bottom: 77px;
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
