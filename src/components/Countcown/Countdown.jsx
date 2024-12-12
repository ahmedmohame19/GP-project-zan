import React from 'react'
import "./Countdown.scss"
import count from "../../Assets/Assets/Frame 10.png"
export default function Countdown() {
    return <>
        <div className="main-count-down">
            <div className="img">
                <img src={count} alt="count" />
            </div>
        </div>
    </>
}
