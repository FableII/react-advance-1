import React  from 'react';
import './App.css'

import Hoc from './hoc/HOC';
import StockList from './hoc/StockList';
import UserList from './hoc/UserList';
import DummyList from './hoc/DummyList';

import SampleRenderProps from './renderProp/SampleRenderProps';
import HardRenderProps from './renderProp/HardRenderProps';

import useTheme from './hooks/useTheme'
import UseStateEffectTester from './components/UseStateEffectTester';

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


function App() {
  const { theme, toggleTheme } = useTheme();

    return (
      <div className={`App ${theme}`} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1>0. Just component</h1>
        <DummyList data={DummyData}></DummyList>
        <h1>1. HOC Example</h1>
        <Users></Users>
        <br></br>
        <Stocks></Stocks>
        <h1>2. Render Props Example</h1>
        <SampleRenderProps />
        <HardRenderProps/>
        <h1>3. Custom Hooks</h1>
        <button type="button" onClick={toggleTheme}>
          Switch theme
      </button>
      <h1>4. UseState and UseEffect Hooks</h1>
      <UseStateEffectTester></UseStateEffectTester>
      </div>
    )
  }

export default App;