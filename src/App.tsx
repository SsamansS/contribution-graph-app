import React from 'react';
import './App.css';
import moment from 'moment';
import Train from './test/Train';
import Cell from './components/cell/Cell';
import { CellProps } from './components/cell/CellInterface';


function App() {
  const array: number[] = [];

  for (let i = 0; i < 365; i++) {
    array.push(i);
  }

  console.log(array);
  return (
    <div className='contribution-calendar'>
      {array.map((item, index) => {
        return (<Cell color="#e63946" key={index} />)
      })}
    </div>
  );
}

export default App;
