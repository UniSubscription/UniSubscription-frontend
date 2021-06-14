import React from "react";

export const Pagination: React.FC<{
  total: number | undefined;
  page: number;
  handlePageChange: (pageCount: number) => void;
}> = ({ total, page, handlePageChange }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            onClick={() => handlePageChange(Math.max(page - 1, 1))}
            className="page-link"
          >
            Previous
          </button>
        </li>
        {total !== undefined &&
          [...Array(total)].map((e, num) => (
            <li
              key={num}
              className={`page-item ${num + 1 === page && "active"}`}
            >
              <button
                onClick={() => handlePageChange(num + 1)}
                className="page-link"
              >
                {num + 1}
              </button>
            </li>
          ))}

        <li className="page-item">
          {total !== undefined && (
            <button
              onClick={() => handlePageChange(Math.min(page + 1, total))}
              className="page-link"
            >
              Next
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};
