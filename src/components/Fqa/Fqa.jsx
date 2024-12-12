import React from 'react'
import "./Fqa.scss"
import { Question } from '../Question/Question'
export default function Fqa() {
    return <>
        <h1 className='text-2xl Freq_Title text-center mt-10'>Frequently asked questions</h1>
        <div className="flex items-center flex-col py-3 " id='question'>
            <Question Delay={0} desc={`hello`} number={`1`} title={`hello`} />
            <Question Delay={0} desc={`hello`} number={`2`} title={`hello`} />
            <Question Delay={0} desc={`hello`} number={`3`} title={`hello`} />
            <Question Delay={0} desc={`hello`} number={`4`} title={`hello`} />
            <Question Delay={0} desc={`hello`} number={`5`} title={`hello`} />
        </div>


    </>
}
