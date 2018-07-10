import React from 'react'
const rasel=(props)=>{
    return <div>
        <h1>Hi Rasel Comes from {props.name} File</h1>
        <h1>Hi Rasel Comes from {props.children} File</h1>

    </div>;
}

export default rasel;