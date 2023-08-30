import React, { useEffect, useState } from "react";
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
  isActive: boolean;
  checked: boolean;
}

const PageNumber = styled.span<PageNumberProps>`
  margin: 0 10px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "purple" : "black")};

  &:hover {
    text-decoration: underline;
  }
`;

interface PageHeaderProps {
  totalPages: number;
  currentPage: number;
}

interface CheckedPages {
  [key: number]: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ totalPages, currentPage }) => {
  const [checkedPages, setCheckedPages] = useState<CheckedPages>({});

  useEffect(() => {
    if (currentPage > 1) {
      setCheckedPages((prev) => ({ ...prev, [currentPage - 1]: true }));
    }
  }, [currentPage]);

  return (
    <Header>
      {Array.from({ length: totalPages }).map((_, index) => (
        <PageNumber
          key={index}
          isActive={currentPage === index + 1}
          checked={Boolean(checkedPages[index + 1])}
        >
          {checkedPages[index + 1] && currentPage !== index + 1
            ? "✓"
            : index + 1}
        </PageNumber>
      ))}
    </Header>
  );
};

export default PageHeader;
