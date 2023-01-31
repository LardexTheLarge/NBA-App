import React from "react";

export const Pagination = ({
  currentPage,
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item" aria-current="page">
            <a
              onClick={() => paginate(number)}
              href={"/players"}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
