import React, { useEffect, useState } from 'react'
import Bar from './Bar'

function SorterWindow() {
    const [bars, setBars] = useState([]);
   
    let barIndex;

    const randomNum = (max, min) => Math.floor(Math.random() * (max - min) + min); 

    const addBar = bar => {        
        const newBar = {
            height: randomNum(50, 200),
            background: "orange"
        }
        const newBars = [newBar, ...bars];
        setBars(newBars);
        
    }
    
    function sort () {
        const allBars = [...bars];
        //get selected bar array index value
        barIndex = allBars.length-1;   
        //select bar
        const selectedBar = { ...allBars[barIndex] };
        //mark it with color blue
        selectedBar.background = "blue";
    
        if(selectedBar)
        
        swapItems(allBars, barIndex, 1);
        allBars[barIndex] = selectedBar;
        setBars(allBars);
    }

    const swapItems = (arr, item1, item2) => {
        const temp = arr[item1];
        arr[item1] = arr[item2];
        arr[item2] = temp;
    }

  return (
    <div>
        <button onClick={addBar}>Add</button>
        <button onClick={sort}>Sort</button>
        <div className='bar-positioning'>
            <Bar height={"1000px"} bars={bars}></Bar>
        </div>
    </div>
  )
}

export default SorterWindow