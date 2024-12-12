import React from 'react'
import "./Opinions.scss"
import { IoStar } from "react-icons/io5";
import { ImQuotesLeft } from "react-icons/im";
export default function Opinions() {
    return <>
        <div className="main-opinions-container">
            <h1>
                Customer Testimonials Real Results, Real Feedback
            </h1>
            <div className="main-opinions">

                <div className="card-opinions">

                    <div className="head-of-opinons">
                        <span>
                            <ImQuotesLeft />
                        </span>
                        <span className='flex items-center'>
                            <IoStar /> (4.8/5)
                        </span>
                    </div>

                    <div className="body-of-opinons">
                        <p>"Zam transformed our online store into a sleek, user-friendly platform. Our sales skyrocketed by 35% in just three months! Their team is professional, creative, and incredibly responsive."</p>
                    </div>

                    <div className="footer-of-opinons">
                        <span>Name</span>
                        <span><img src="" alt="" /></span>
                    </div>

                </div>

            </div>

        </div>
    </>
}
