import { Pagination } from 'react-bootstrap';

type PaginationProps = {
  setCurrentPage: (arg0: number) => void;
  activePage: number;
  totalPages: number;
};

export const PaginationBlock = ({
  setCurrentPage,
  activePage = 1,
  totalPages = 10,
}: PaginationProps) => {
  const active = activePage;
  const items = [];
  for (let number = 1; number <= totalPages; number += 1) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div style={{ marginTop: '2rem', marginBottom: '4rem' }}>
      <Pagination className="justify-content-center">{items}</Pagination>
    </div>
  );
};
