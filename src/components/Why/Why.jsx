import React from 'react'
import "./Why.scss"

import mobile from "../../Assets/Assets/Mobile screen + shadow.png"
import qulity from "../../Assets/Assets/icons/quality.png"
export default function Why() {
    return <>
        <div className="main-why my-5">
            <h1 className='my-5'>
                Why you should <br /> choose Zan
            </h1>
            <div className="why-content">

                <div className="mobile-secreen-img">
                    <img src={mobile} alt="mobile screen" />
                </div>

                <div className="rest-why">
                    <div className="content mb-7">

                        <div className="content-child">

                            <div className="icon-why rounded-full">
                                <img src={qulity} alt="qulity" />
                            </div>

                            <h2>
                                High Quality
                            </h2>
                            <p>
                                Lorem,
                            </p>
                        </div>

                        <div className="content-child">
                            <div className="icon-why rounded-full">
                                <img src={qulity} alt="qulity" />
                            </div>

                            <h2>
                                High Quality
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet!
                            </p>
                        </div>

                    </div>

                    <div className="content mb-7">

                        <div className="content-child">

                            <div className="icon-why rounded-full">
                                <img src={qulity} alt="qulity" />
                            </div>

                            <h2>
                                High Quality
                            </h2>
                            <p>
                                Lorem,
                            </p>
                        </div>

                        <div className="content-child">
                            <div className="icon-why rounded-full">
                                <img src={qulity} alt="qulity" />
                            </div>

                            <h2>
                                High Quality
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet!
                            </p>
                        </div>

                    </div>

                    <div className="content mb-7">

                        <div className="content-child">

                            <div className="icon-why rounded-full">
                                <img src={qulity} alt="qulity" />
                            </div>

                            <h2>
                                High Quality
                            </h2>
                            <p>
                                Lorem,
                            </p>
                        </div>

                        <div className="content-child">
                            <div className="icon-why rounded-full">
                                <img src={qulity} alt="qulity" />
                            </div>

                            <h2>
                                High Quality
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet!
                            </p>
                        </div>

                    </div>
                </div>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    </>
}
