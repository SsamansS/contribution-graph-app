import React from 'react';
import '../../styles/graphstyle.scss';
import { CellProps } from '../cell/CellInterface';

//parameter: { color }: {color: string}
function Cell(props: CellProps) {
    let style = {
      backgroundColor: props.color
    };
  
    return (
      <div className='cell' style={style}></div>
    )
  }

export default Cell