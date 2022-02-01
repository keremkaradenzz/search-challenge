import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";
import List from "./components/List/List";
import { data } from "./data/data";
import logo from "./assets/logo.png";
import Pagination from "./components/Pagination/Pagination";
import { sortList } from "./helpers/helper";
function App() {
  const [datas, setDatas] = useState<Array<string[]>>(data?.data);
  const [filterDatas, setFilterDatas] = useState<Array<string[]>>(data?.data);
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [dataPerPage] = useState<any>(6);
  const [value, setValue] = useState<string>("");
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;

  const currentData = datas.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const onChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue(event.target.value);
  };

  const handleOrderBy = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
    let newData: string[] | any = sortList(datas, event.target.value);
    setDatas(newData);
  };

  const onSearch = () => {
    const lowerCaseArr: string[] | any = datas.map((element: string[]) => {
      return element.map((value: string) => value.toLocaleLowerCase());
    });

    let searchData: any = lowerCaseArr.filter((x: any) =>
      x[0].includes(searchValue.toLowerCase())
    );
    setFilterDatas(searchData);
  };

  return (
    <div className="main">
      <div
        style={{
          margin: "auto",
          width: "863px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="mb-10 w-100 flex-col justify-center flex">
          <div className="m-auto">
            <img src={logo} alt="tesodev" />
          </div>
          <div className="m-auto" style={{ paddingLeft: 220 }}>
            <span>Search web app</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 mb-10">
          <div className="col-span-1">
            <Input onChange={onChange} value={searchValue} />
          </div>
          <div className="col-end-5">
            <Button title="Search" onClick={onSearch} />
          </div>
        </div>
        {(!showMore || filterDatas.length < 3) ? (
          <div
            style={{ width: 709 }}
            className="mr-10 border  border-solid border-black rounded p-12"
          >
            {filterDatas.map(
              (value, index) =>
                index < 3 && (
                  <Card
                    key={index}
                    name={`${value[0]} - ${value[3]} `}
                    country={`${value[4]} - ${value[5]}`}
                    mail={value[2]}
                  />
                )
            )}
            <p
              onClick={() => setShowMore(true)}
              className="font-bold text-sm cursor-pointer text-center mt-5"
            >
              Show More...
            </p>
          </div>
        ) : (
          <>
            <List
              data={currentData}
              value={value}
              handleOrderBy={handleOrderBy}
            />
            <Pagination
              dataPerPage={dataPerPage}
              totalData={datas?.length}
              paginate={paginate}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
