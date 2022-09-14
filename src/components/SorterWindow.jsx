import React, { useEffect, useState } from 'react'
import Bar from './Bar'

function SorterWindow() {
    const [bars, setBars] = useState([]);
   
    const [barIndex, setBarIndex] = useState(0);
    const [leftBarIndex, setLeftBarIndex] = useState(0);
    const [iterations, setIterations] = useState(0);

    const randomNum = (max, min) => Math.floor(Math.random() * (max - min) + min); 
    
    

    const addBar = () => { 
        let newBars = [...bars];  
        for (let i = 0; i < 30; i++) {
            const newBar = {
                height: randomNum(20, 500),
                background: "orange"
            }
            
            newBars = [newBar, ...newBars];
            
        } 
        setBars(newBars);
        setBarIndex(newBars.length);
        setLeftBarIndex(newBars.length - 1);    
        
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
            
    //     }, 2000);
    //     return () => clearInterval(interval);
    // }, []);
    

    const sort = () => {
        let allBars = [...bars];
        
        //select bar
        const selectedBar = { ...allBars[barIndex] };
        const leftBar = { ...allBars[leftBarIndex] };
        //mark it with color
        selectedBar.background = "blue";
        leftBar.background = "green";
        
        allBars[barIndex] = selectedBar;
        allBars[leftBarIndex] = leftBar;
        
        if(selectedBar.height < leftBar.height){    
            allBars = swapItems(bars, barIndex, leftBarIndex);
        }

        if(leftBarIndex != 0){
            setBarIndex(barIndex - 1);
            setLeftBarIndex(leftBarIndex - 1);
        }else{
            setIterations(iterations + 1);
            setBarIndex(allBars.length - iterations);
            setLeftBarIndex(allBars.length - 1 - iterations);
        }

        setBars(allBars);
    }

    // let i = 0;
    // function myLoop() {         
    //     setTimeout(function() {   
    //     sort()
    //     i++;                    
    //     if (i < 20) {          
    //         myLoop();             
    //     }                       
    //     }, 1000)
    // }
    // myLoop(); 

    const swapItems = (arr, item1, item2) => {
        const temp = arr[item1];
        arr[item1] = arr[item2];
        arr[item2] = temp;
        return arr;
    }
    
  return (
    <div>
        <button onClick={addBar}>Add</button>
        <button>Sort</button>
        <div className='bar-positioning'>
            <Bar height={"1000px"} bars={bars}></Bar>
        </div>
    </div>
  )
}

export default SorterWindow