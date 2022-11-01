import React, { Component } from 'react';
import Hoc from './hoc/HOC';
import StockList from './components/StockList';
import UserList from './components/UserList';
import DummyList from './components/DummyList';
import SampleRenderProps from './renderProp/SampleRenderProps';
import HardRenderProps from './renderProp/HardRenderProps';

const StocksData = [
  {
      id: 1,
      name: 'TCS'
        
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
];
const UsersData = [
  {
      id: 1,
      name: 'Krunal'
        
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
];

const DummyData = [
  {
      id: 1,
      name: 'Dummy'
        
  },
  {
      id: 2,
      name: 'Stupid'
  },
  {
      id: 3,
      name: 'Ugly'
  }
];

const Stocks = Hoc(
  StockList,
  StocksData
);

const Users = Hoc(
  UserList,
  UsersData
);


class App extends Component {
  
  render() {
    return (
      <div>
        <h1>0. Just component</h1>
        <DummyList data={DummyData}></DummyList>
        <h1>1. HOC Example</h1>
        <Users></Users>
        <br></br>
        <Stocks></Stocks>
        <h1>2. Render Props Example</h1>
        <SampleRenderProps />
        <HardRenderProps/>
      </div>
    )
  }
}

export default App;