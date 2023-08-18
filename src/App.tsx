import React from 'react';
import './App.css';
import moment from 'moment';
import Train from './test/Train';
import Cell from './components/cell/Cell';
import { CellProps } from './components/cell/CellInterface';


function App() {
  console.log(moment())
  return (
    <div className='contribution-calendar'>
      {[1,2,3,4,5,6].map((item, index) => {
        return (<Cell color="#0000" key={index} />)
      })}
    </div>
  );
}

export default App;
