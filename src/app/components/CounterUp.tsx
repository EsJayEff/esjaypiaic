"use client";
import React, { useEffect, useState, useRef } from "react";
import CountUp from 'react-countup';

export default function CounterUp() {
  return (
    <div className="float-right">
    <div className="font-extrabold text-4xl"><br/> <CountUp end={100} duration={10}/> K+ </div>
    <p>Applications Received</p>
    </div>
  )
}



// export default function CounterUp({ start = 0, end, timer = 50 }) {
//   const [state, setstate] = useState(null);
//   const ref = useRef(start);
//   const accumulator = end / 200;
//   const updateCounterState = () => {
//     if (ref.current < end) {
//       const result = Math.ceil(ref.current + accumulator);
//       if (result > end) return setstate(end);
//       setstate(result);
//       ref.current = result;
//     }
//     setTimeout(updateCounterState, timer);
//   };

 
  // useEffect(() => {
  //   let isMounted = true;
  //   if (isMounted) 
  //   {updateCounterState();} 

  //   return () => {(isMounted = false)};
  // }, [end, start]);

// return (
//  <div className="float-right">
//   <div className="font-extrabold text-4xl"><br/> <CountUp end={100} duration={5}/> K+ <br/> </div>
//   <p>Applications Received</p>
//   </div>
// )
// }
