import React, { useEffect, useState } from 'react'
import Bar from './Bar'

function SorterWindow() {
    const [bars, setBars] = useState([]);
    
    const randomNum = (max, min) => Math.floor(Math.random() * (max - min) + min); 

    const addBar = bar => {
        const test = []
        
        const newBar = {
            height: randomNum(50, 200),
            background: "orange"
        }
        const newBars = [newBar, ...bars];
        setBars(newBars);
        
    }
    
    function sort () {
        
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