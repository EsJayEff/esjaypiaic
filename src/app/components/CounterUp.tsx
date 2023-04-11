"use client";
// As Chakra components run of client side only

// imports of the libraries
import CountUp from 'react-countup';
import Wrapper from "./wrapper"

export default function CounterUp() {
  return (
    <Wrapper>
    <div className="float-right">
    <div className="font-extrabold text-4xl"><br/> <CountUp end={100} duration={10}/> K+ </div>
    <p>Applications Received</p>
    </div>
    </Wrapper>
  )
}