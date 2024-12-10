import React from 'react'
import "./Landing.scss"
import { GoSearch } from "react-icons/go";
import Why from '../../components/Why/Why';
export default function Landing() {
  return <>
    <div className="main-landing">
      <div className="text">
        <h1>Make Your <span>Interior</span>  More</h1>
        <h2>Minimalistic & Modern</h2>
        <p>
          Turn your room with Zan into a lot more minimalist and modern with ease and speed
        </p>
        <div className="search">
          <GoSearch className='rounded-full' />
          <input type="search" placeholder='search furniture' className='rounded-full' />
        </div>
      </div>
    </div>
    <Why />
  </>
}
