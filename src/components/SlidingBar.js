// // import { motion } from "framer-motion";
// import { motion, useScroll } from "framer-motion";
// const SlidingBar = () => {
//     const { scrollYProgress } = useScroll();

//     return (
//         <section className="flex relative flex-row w-full overflow-hidden">

//             <div className="relative flex flex-row max-h-fit">
//                 <div className="py-12 whitespace-nowrap"
//                 data-te-animation-init
//                 data-te-animation-start="onScroll"
//                 data-te-animation="[marquee_linear_infinite]">
//                     {/* <span className="text-9xl ml-48">
//                         <span className={fascinate.className}>
//                             FRONTEND * BACKEND
//                         </span>
//                     </span> */}
//                     <div className="flex flex-row ml-48">
//                         <span className="font-bold text-6xl">
//                             User Reasearch
//                         </span>
//                         <span className="font-bold text-6xl">
//                             User Reasearch
//                         </span>
//                         <span className="font-bold text-6xl">
//                             User Reasearch
//                         </span>
//                         <span className="font-bold text-6xl">
//                             User Reasearch
//                         </span>
//                         <span className="font-bold text-6xl">
//                             User Reasearch
//                         </span>
//                         <span className="font-bold text-6xl">
//                             User Reasearch
//                         </span>
//                     </div>
//                 </div>

//                 <div className="absolute top-0 py-12 whitespace-nowrap">
//                     {/* <span className="text-9xl ml-48">
//                         <span className={fascinate.className}>
//                             FRONTEND * BACKEND
//                         </span>
//                     </span> */}
//                     {/* <div className="flex flex-row ml-48">
//                         <span className="font-bold text-6xl">
//                             User Reasearch
//                         </span>
//                         <span className="font-bold text-6xl">
//                             User Reasearch
//                         </span>
//                         <span className="font-bold text-6xl">
//                             User Reasearch
//                         </span>
//                         <span className="font-bold text-6xl">
//                             User Reasearch
//                         </span>
//                         <span className="font-bold text-6xl">
//                             User Reasearch
//                         </span>
//                         <span className="font-bold text-6xl">
//                             User Reasearch
//                         </span> */}
//                     {/* </div> */}
//                 </div>
//             </div>
//         </section>
//     )

//   };

//   export default SlidingBar;

// import "./styles.css"

// import { useRef } from "react"
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   useMotionValue,
//   useVelocity,
//   useAnimationFrame
// } from "framer-motion"
// import { wrap } from "@motionone/utils"

// function ParallaxText({ children, baseVelocity = 100 }) {
//   const baseX = useMotionValue(0)
//   const { scrollY } = useScroll()
//   const scrollVelocity = useVelocity(scrollY)
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400
//   })
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false
//   })

//   /**
//    * This is a magic wrapping for the length of the text - you
//    * have to replace for wrapping that works for you or dynamically
//    * calculate
//    */
//   const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`)

//   const directionFactor = useRef(1)
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

//     /**
//      * This is what changes the direction of the scroll once we
//      * switch scrolling directions.
//      */
//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get()

//     baseX.set(baseX.get() + moveBy)
//   })

//   /**
//    * The number of times to repeat the child text should be dynamically calculated
//    * based on the size of the text and viewport. Likewise, the x motion value is
//    * currently wrapped between -20 and -45% - this 25% is derived from the fact
//    * we have four children (100% / 4). This would also want deriving from the
//    * dynamically generated number of children.
//    */
//   return (
//     <div className="parallax">
//       <motion.div className="scroller" style={{ x }}>
//         <span>{children} </span>
        
//       </motion.div>
//     </div>
//   )
// }

// export default function SlidingBar() {
//   return (
//     <section className="overflow-hidden">
//       <ParallaxText baseVelocity={-5} className="">
//             <div className="flex flex-row gap-2 text-7xl whitespace-nowrap">
//             <span>
//                 User Research
//             </span>
//             <span>
//                 Interface Design
//             </span>
//             <span>
//                 Design Analysis
//             </span>
//             <span>
//                 Prototyping
//             </span>
//             <span>
//                 High Fidelity Screens
//             </span>
//             <span>
//                 User Research
//             </span>
//             <span>
//                 Interface Design
//             </span>
//             <span>
//                 Design Analysis
//             </span>
//             <span>
//                 Prototyping
//             </span>
//             <span>
//                 High Fidelity Screens
//             </span>
//             <span>
//                 User Research
//             </span>
//             <span>
//                 Interface Design
//             </span>
//             <span>
//                 Design Analysis
//             </span>
//             <span>
//                 Prototyping
//             </span>
//             <span>
//                 High Fidelity Screens
//             </span>
//             <span>
//                 User Research
//             </span>
//             <span>
//                 Interface Design
//             </span>
//             <span>
//                 Design Analysis
//             </span>
//             <span>
//                 Prototyping
//             </span>
//             <span>
//                 High Fidelity Screens
//             </span>

//             </div>
            
        
//       </ParallaxText>
//       <ParallaxText baseVelocity={1}></ParallaxText>
//     </section>
//   )
// }

import React, { useEffect, useState } from "react";

function SlidingBar() {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const slideAmount = (scrollPosition  * 0.2); // Adjust the sliding speed
  
    return (
      <section className="overflow-x-hidden overflow-y-auto scrollbar-hide h-36 flex flex-col gap-2">
        <div className="flex flex-row gap-6 font-bold text-6xl whitespace-nowrap items-center"
            style={{ 
            initial: '-100vw',
            transform: `translateX(${slideAmount-360}px)` 
            }}>
            <div>
                    <svg width="78" height="64" viewBox="0 0 78 64" className="scale-75">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.822266 7C0.822266 3.13401 3.95627 0 7.82227 0H30.3933L24.4192 12.2617H13.666V40.0748L33.9777 0H39.8223C43.6883 0 46.8223 3.13401 46.8223 7V57C46.8223 60.866 43.6883 64 39.8223 64H17.2499L23.2239 51.7383H33.9772L33.9772 23.9252L13.6655 64H7.82227C3.95627 64 0.822266 60.866 0.822266 57V7Z" fill="#FF4900"/>
                        <path d="M77.8223 64H62.8223V43.0345L77.8223 17.6552H62.8223V0H69.2508L77.8223 17.6552V64Z" fill="#FF4900"/>
                    </svg>
            </div>
             <span className="">
                 User Research
             </span>
            <div>
                <svg width="104" height="64" viewBox="0 0 104 64" className="scale-75">
                    <path d="M0 0H19.9111L47.6444 48.3556L38.4 64H18.4889L29.1556 48.3556L0 0Z" fill="#FF4900"/>
                    <path d="M36.9778 0H56.8889L84.6222 48.3556L75.3778 64H55.4667L66.1333 48.3556L36.9778 0Z" fill="#FF4900"/>
                    <path d="M73.9556 0H94.5778L103.822 15.6444L94.5778 31.2889H75.3778L83.9111 15.6444L73.9556 0Z" fill="#FF4900"/>
                </svg>
            </div>
             <span className="">
                 Interface Design
             </span>
             <div>
                    <svg width="78" height="64" viewBox="0 0 78 64" className="scale-75">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.822266 7C0.822266 3.13401 3.95627 0 7.82227 0H30.3933L24.4192 12.2617H13.666V40.0748L33.9777 0H39.8223C43.6883 0 46.8223 3.13401 46.8223 7V57C46.8223 60.866 43.6883 64 39.8223 64H17.2499L23.2239 51.7383H33.9772L33.9772 23.9252L13.6655 64H7.82227C3.95627 64 0.822266 60.866 0.822266 57V7Z" fill="#FF4900"/>
                        <path d="M77.8223 64H62.8223V43.0345L77.8223 17.6552H62.8223V0H69.2508L77.8223 17.6552V64Z" fill="#FF4900"/>
                    </svg>
                </div>
             <span className="">
                 Design Analysis
             </span>
             <div>
                <svg width="104" height="64" viewBox="0 0 104 64" className="scale-75">
                    <path d="M0 0H19.9111L47.6444 48.3556L38.4 64H18.4889L29.1556 48.3556L0 0Z" fill="#FF4900"/>
                    <path d="M36.9778 0H56.8889L84.6222 48.3556L75.3778 64H55.4667L66.1333 48.3556L36.9778 0Z" fill="#FF4900"/>
                    <path d="M73.9556 0H94.5778L103.822 15.6444L94.5778 31.2889H75.3778L83.9111 15.6444L73.9556 0Z" fill="#FF4900"/>
                </svg>
            </div>
             <span className="">
                 Prototyping
             </span>
             <div>
                    <svg width="78" height="64" viewBox="0 0 78 64" className="scale-75">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.822266 7C0.822266 3.13401 3.95627 0 7.82227 0H30.3933L24.4192 12.2617H13.666V40.0748L33.9777 0H39.8223C43.6883 0 46.8223 3.13401 46.8223 7V57C46.8223 60.866 43.6883 64 39.8223 64H17.2499L23.2239 51.7383H33.9772L33.9772 23.9252L13.6655 64H7.82227C3.95627 64 0.822266 60.866 0.822266 57V7Z" fill="#FF4900"/>
                        <path d="M77.8223 64H62.8223V43.0345L77.8223 17.6552H62.8223V0H69.2508L77.8223 17.6552V64Z" fill="#FF4900"/>
                    </svg>
                </div>
             <span className="">
                 High Fidelity Screens
             </span>
             <div>
                <svg width="104" height="64" viewBox="0 0 104 64" className="scale-75">
                    <path d="M0 0H19.9111L47.6444 48.3556L38.4 64H18.4889L29.1556 48.3556L0 0Z" fill="#FF4900"/>
                    <path d="M36.9778 0H56.8889L84.6222 48.3556L75.3778 64H55.4667L66.1333 48.3556L36.9778 0Z" fill="#FF4900"/>
                    <path d="M73.9556 0H94.5778L103.822 15.6444L94.5778 31.2889H75.3778L83.9111 15.6444L73.9556 0Z" fill="#FF4900"/>
                </svg>
            </div>
        </div>
        <div className="flex flex-row gap-6 font-bold text-6xl whitespace-nowrap items-center"
            style={{ 
            initial: '-100vw',
            transform: `translateX(${-slideAmount}px)` 
            }}>
            <div>
                <svg width="104" height="64" viewBox="0 0 104 64" className="scale-75">
                    <path d="M0 0H19.9111L47.6444 48.3556L38.4 64H18.4889L29.1556 48.3556L0 0Z" fill="#FF4900"/>
                    <path d="M36.9778 0H56.8889L84.6222 48.3556L75.3778 64H55.4667L66.1333 48.3556L36.9778 0Z" fill="#FF4900"/>
                    <path d="M73.9556 0H94.5778L103.822 15.6444L94.5778 31.2889H75.3778L83.9111 15.6444L73.9556 0Z" fill="#FF4900"/>
                </svg>
            </div>
             <span className="">
             Design Analysis
             </span>
             <div>
                    <svg width="78" height="64" viewBox="0 0 78 64" className="scale-75">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.822266 7C0.822266 3.13401 3.95627 0 7.82227 0H30.3933L24.4192 12.2617H13.666V40.0748L33.9777 0H39.8223C43.6883 0 46.8223 3.13401 46.8223 7V57C46.8223 60.866 43.6883 64 39.8223 64H17.2499L23.2239 51.7383H33.9772L33.9772 23.9252L13.6655 64H7.82227C3.95627 64 0.822266 60.866 0.822266 57V7Z" fill="#FF4900"/>
                        <path d="M77.8223 64H62.8223V43.0345L77.8223 17.6552H62.8223V0H69.2508L77.8223 17.6552V64Z" fill="#FF4900"/>
                    </svg>
                </div>
             <span className="">
                 Prototyping
             </span>
             <div>
                <svg width="104" height="64" viewBox="0 0 104 64" className="scale-75">
                    <path d="M0 0H19.9111L47.6444 48.3556L38.4 64H18.4889L29.1556 48.3556L0 0Z" fill="#FF4900"/>
                    <path d="M36.9778 0H56.8889L84.6222 48.3556L75.3778 64H55.4667L66.1333 48.3556L36.9778 0Z" fill="#FF4900"/>
                    <path d="M73.9556 0H94.5778L103.822 15.6444L94.5778 31.2889H75.3778L83.9111 15.6444L73.9556 0Z" fill="#FF4900"/>
                </svg>
            </div>
             <span className="">
                 High Fidelity Screens
             </span>
             <div>
                    <svg width="78" height="64" viewBox="0 0 78 64" className="scale-75">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.822266 7C0.822266 3.13401 3.95627 0 7.82227 0H30.3933L24.4192 12.2617H13.666V40.0748L33.9777 0H39.8223C43.6883 0 46.8223 3.13401 46.8223 7V57C46.8223 60.866 43.6883 64 39.8223 64H17.2499L23.2239 51.7383H33.9772L33.9772 23.9252L13.6655 64H7.82227C3.95627 64 0.822266 60.866 0.822266 57V7Z" fill="#FF4900"/>
                        <path d="M77.8223 64H62.8223V43.0345L77.8223 17.6552H62.8223V0H69.2508L77.8223 17.6552V64Z" fill="#FF4900"/>
                    </svg>
                </div>
             <span className="">
                 Interface Design
             </span>
             <div>
                <svg width="104" height="64" viewBox="0 0 104 64" className="scale-75">
                    <path d="M0 0H19.9111L47.6444 48.3556L38.4 64H18.4889L29.1556 48.3556L0 0Z" fill="#FF4900"/>
                    <path d="M36.9778 0H56.8889L84.6222 48.3556L75.3778 64H55.4667L66.1333 48.3556L36.9778 0Z" fill="#FF4900"/>
                    <path d="M73.9556 0H94.5778L103.822 15.6444L94.5778 31.2889H75.3778L83.9111 15.6444L73.9556 0Z" fill="#FF4900"/>
                </svg>
            </div>
             <span className="">
                 User Research
             </span>
             <div>
                    <svg width="78" height="64" viewBox="0 0 78 64" className="scale-75">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.822266 7C0.822266 3.13401 3.95627 0 7.82227 0H30.3933L24.4192 12.2617H13.666V40.0748L33.9777 0H39.8223C43.6883 0 46.8223 3.13401 46.8223 7V57C46.8223 60.866 43.6883 64 39.8223 64H17.2499L23.2239 51.7383H33.9772L33.9772 23.9252L13.6655 64H7.82227C3.95627 64 0.822266 60.866 0.822266 57V7Z" fill="#FF4900"/>
                        <path d="M77.8223 64H62.8223V43.0345L77.8223 17.6552H62.8223V0H69.2508L77.8223 17.6552V64Z" fill="#FF4900"/>
                    </svg>
            </div>
             
        </div>
        
      </section>
    );
  }
  
  export default SlidingBar;