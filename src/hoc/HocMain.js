import React from "react";
import Stocks from './StockList';
import Users from './UserList';

const HocMain = () => {
  return (
    <React.Fragment>
      <h1>1. HOC Example</h1>
      <Users></Users>
      <br></br>
      <Stocks></Stocks>
    </React.Fragment>
  );
};


export default HocMain