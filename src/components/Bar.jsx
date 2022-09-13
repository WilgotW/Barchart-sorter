import React, { Component } from 'react'

function Bar({bars}) {
    return bars.map((bar, index) => (
        <div key={index} style={{
            background: bar.background,
            height: bar.height,
            width: "30px"
        }}>
        </div>
    ))
}

export default Bar