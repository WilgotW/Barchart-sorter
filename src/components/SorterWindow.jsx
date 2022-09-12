import React, { useEffect, useState } from 'react'
import Bar from './Bar'

function SorterWindow() {
    const [bars, setBars] = useState([]);
    const addBar = bar => {
        const newBars = [bar, ...bars];
        setBars(newBars);
    }

  return (
    <div>
        <button onClick={addBar}>Add</button>
        <div className='bar-positioning'>
            <Bar height={"1000px"} bars={bars}></Bar>
        </div>
    </div>
  )
}

export default SorterWindow