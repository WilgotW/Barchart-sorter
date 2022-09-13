import React, { useEffect, useState } from 'react'
import Bar from './Bar'

function SorterWindow() {
    const [bars, setBars] = useState([]);
   
    let barIndex;
    let leftBarIndex;

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
        
        barIndex = bars.length-1;
        leftBarIndex = barIndex-1

        console.log("checking " + barIndex + " to " + leftBarIndex);

        //select bar
        const selectedBar = { ...allBars[barIndex] };
        //mark it with color blue
        selectedBar.background = "blue";
    
        //get bar to the left:
        const leftBar = { ...allBars[leftBarIndex] };
        leftBar.background = "green";
        
        allBars[barIndex] = selectedBar;
        allBars[leftBarIndex] = leftBar;
        
        
        if(selectedBar.height < leftBar.height){
            console.log("selected bar is shorter")
            swapItems(allBars, barIndex, leftBarIndex);
           
                
        }else {
            console.log("not shorter")
            
        }
        
        setBars(allBars);

        selectedBar.background = "orange";
        leftBar.background = "orange";

        setBars(allBars);
    }

    function callSort(){

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