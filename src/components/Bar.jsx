import React, { Component } from 'react'

function Bar({bars}) {
    return bars.map((bar, index) => (
        <div key={index} style={{
            background: bar.background,
            height: bar.height,
        }}>
            <h1>I'm a bar</h1>
        </div>
    ))
}

export default Bar