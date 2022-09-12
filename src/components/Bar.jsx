import React from 'react'

function Bar({bars}) {
    const randomNum = (max, min) => Math.floor(Math.random() * (max - min) + min); 

    return bars.map((bar, index) => (
        <div key={index} style={{
            background: "orange",
            height: randomNum(200, 400),
        }}>
            <h1>I'm a bar</h1>
        </div>
    ))
}

export default Bar