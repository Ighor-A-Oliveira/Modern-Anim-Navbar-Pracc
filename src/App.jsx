/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useRef, useState } from "react"
import {motion} from "framer-motion"


function App() {
  

  return (
    <div className="grid h-screen place-content-center bg-neutral-100">
      <SlideTabs />
    </div>
  )
}

export default App

function SlideTabs() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return(
    <ul className="relative mx-auto flex w-fit rounded-full border-2 border-black border-solid bg-white p-1"
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }
        ))}
      }
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>

      <Cursor position={position} />
    </ul>
  )
}


function Tab({children, setPosition}){
  const ref = useRef(null)

  return(
    <li className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
      ref={ref}
      onMouseEnter={() => {
        if(!ref?.current) return;

        /* gives us a bunch of data from the element */
        /* one the pieces of data is the width */
        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
    >
      {children}
    </li>
  )
}

function Cursor({position}) {

  return(
    <motion.li animate={position} className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    
    />
  )
}