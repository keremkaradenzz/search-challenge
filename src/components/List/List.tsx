import React from "react";
import Card from "../Card/Card";
import ordericon from "../../assets/ordericon.png";


const List = ({ data, value, handleOrderBy }: { data: Array<any>, value: any, handleOrderBy:any}) => {
  return (
    <div
      style={{ width: 709 }}
    >
      <div className="flex justify-end">

        <img src={ordericon} alt="order"/>
        <select onChange={handleOrderBy} value={value}>
          <option value="sortNameAsc">Name ascending</option>
          <option value="sortNameDesc">Name descending</option>
          <option value="sortYearAsc">Year ascending</option>
          <option value="sortYearDesc">Year descending</option>
        </select>
      </div>
      {data.map((value, index) => (
        <Card
          key={index}
          name={`${value[0]} - ${value[3]} `}
          country={`${value[4]} - ${value[5]}`}
          mail={value[2]}
        />
      ))}
    </div>
  );
};

export default List;
