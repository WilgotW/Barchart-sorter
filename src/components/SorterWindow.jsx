import React, { useEffect, useState } from 'react'
import Bar from './Bar'

function SorterWindow() {
    const [bars, setBars] = useState([]);
   
    const [barIndex, setBarIndex] = useState(0);
    const [leftBarIndex, setLeftBarIndex] = useState(0);
    
    
    let iterations = 0;

    const randomNum = (max, min) => Math.floor(Math.random() * (max - min) + min); 

    const addBar = () => {        
        const newBar = {
            height: randomNum(20, 500),
            background: "orange"
        }
        const newBars = [newBar, ...bars];
        setBars(newBars);

        setBarIndex(bars.length);
        setLeftBarIndex(bars.length - 1);
    }

    function sort () {
        const allBars = [...bars];
        //select bar
        const selectedBar = { ...allBars[barIndex] };
        const leftBar = { ...allBars[leftBarIndex] };
        //mark it with color
        selectedBar.background = "blue";
        leftBar.background = "green";
        
        allBars[barIndex] = selectedBar;
        allBars[leftBarIndex] = leftBar;
        
        if(selectedBar.height < leftBar.height){
            swapItems(allBars, barIndex, leftBarIndex);
        }

        if(leftBarIndex != 0){
            setBarIndex(barIndex - 1);
            setLeftBarIndex(leftBarIndex - 1);
        }else{
            iterations++;
            // console.log("left bar reached the end");
            setBarIndex(allBars.length - iterations);
            setLeftBarIndex(allBars.length - 1 - iterations);
        }
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