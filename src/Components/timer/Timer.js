import React from "react";
import "./Timer.css";
let TimerArea= (props)=>{
    console.log(props.startinit);
    return <div className="col-md-4"><p   className={`timer ${props.borcol} animated wobble timeincrease`}><span className="textCenter">{" "+props.startinit+" "}</span></p></div>

}
export default  TimerArea;