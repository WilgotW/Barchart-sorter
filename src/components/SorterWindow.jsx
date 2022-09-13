import React, { useEffect, useState } from 'react'
import Bar from './Bar'

function SorterWindow() {
    const [bars, setBars] = useState([]);
   
    let barIndex = bars.length-1;
    let leftBarIndex = barIndex-1;

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
        
        //select bar
        const selectedBar = { ...allBars[barIndex] };
        //mark it with color blue
        selectedBar.background = "blue";
    
        //get bar to the left:
        const leftBar = { ...allBars[leftBarIndex] };
        leftBar.background = "green";
        
        allBars[barIndex] = selectedBar;
        allBars[leftBarIndex] = leftBar;
        setBars(allBars);

        console.log("selected bar: " + selectedBar.height);
        console.log("left bar: " + leftBar.height);

        if(selectedBar.height < leftBar.height){
            console.log("selected bar is shorter")
            swapItems(allBars, barIndex, leftBarIndex);
            setBars(allBars);
            
        }
        
        if(leftBarIndex > 0){
            barIndex--;
            leftBarIndex--;
            setTimeout(() => {
                
                sort();
            }, 1000);
        }
        
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