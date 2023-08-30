import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-size: 14px;
  margin-bottom: 28px;
`;

interface PageNumberProps {
  $isActive: boolean;
}

const PageNumber = styled.span<PageNumberProps>`
  margin: 0 10px;
  cursor: pointer;
  color: ${(props) => (props.$isActive ? "purple" : "black")};

  &:hover {
    text-decoration: underline;
  }
`;

interface PageHeaderProps {
  totalPages: number;
  currentPage: number;
}

const PageHeader: React.FC<PageHeaderProps> = ({ totalPages, currentPage }) => {
  const page = [1, 2, 3];
  return (
    <Header>
      {page.map((_, index) => {
        return (
          <PageNumber key={index} $isActive={currentPage === index + 1}>
            {currentPage <= index + 1 ? index + 1 : "✓"}
          </PageNumber>
        );
      })}
    </Header>
  );
};

export default PageHeader;
