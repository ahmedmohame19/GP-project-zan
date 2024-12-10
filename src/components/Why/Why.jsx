import React from 'react'
import "./Why.scss"
import mobile from "../../Assets/Assets/Mobile screen + shadow.png"
export default function Why() {
    return <>
        <div className="main-why">
            <h1>
                Why you should choose Zan
            </h1>
            <div className="why-content">
                <div className="mobile-secreen-img">
                    <img src={mobile} alt="mobile screen" />
                </div>
                <div className="rest-why">

                </div>
            </div>
        </div>
    </>
}
