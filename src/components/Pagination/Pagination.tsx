import React from "react";

const Pagination = ({
  dataPerPage,
  totalData,
  paginate,
}: {
  dataPerPage: number;
  totalData: number;
  paginate: any;
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mr-10">
      <ul className="pagination list-none flex mt-5 mb-5">
        {pageNumbers.map((number) => (
          <li key={number} className="ml-5">
            <div onClick={()=> paginate(number)} className="border border-black rounded cursor-pointer"><p className="p-1 m-0 text-sm">{number}</p></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
