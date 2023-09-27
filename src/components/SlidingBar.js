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
      <div className="overflow-x-hidden overflow-y-auto scrollbar-hide h-32 md:h-48 items-center flex flex-col gap-0 md:gap-2">
        <div className="flex flex-row gap-3 md:gap-6 font-bold text-[38px] md:text-6xl whitespace-nowrap items-center"
            style={{ 
            initial: '-100vw',
            transform: `translateX(${slideAmount-360}px)` 
            }}>
            <div>
                    <svg viewBox="0 0 78 64" className="w-[46px] h-[38px] md:w-[59px] md:h-[48px]">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.822266 7C0.822266 3.13401 3.95627 0 7.82227 0H30.3933L24.4192 12.2617H13.666V40.0748L33.9777 0H39.8223C43.6883 0 46.8223 3.13401 46.8223 7V57C46.8223 60.866 43.6883 64 39.8223 64H17.2499L23.2239 51.7383H33.9772L33.9772 23.9252L13.6655 64H7.82227C3.95627 64 0.822266 60.866 0.822266 57V7Z" fill="#FF4900"/>
                        <path d="M77.8223 64H62.8223V43.0345L77.8223 17.6552H62.8223V0H69.2508L77.8223 17.6552V64Z" fill="#FF4900"/>
                    </svg>
            </div>
             <span className="">
                 User Research
             </span>
            <div>
                <svg viewBox="0 0 104 64" className="w-[60px] h-[38px] md:w-[78px] md:h-[48px]">
                    <path d="M0 0H19.9111L47.6444 48.3556L38.4 64H18.4889L29.1556 48.3556L0 0Z" fill="#FF4900"/>
                    <path d="M36.9778 0H56.8889L84.6222 48.3556L75.3778 64H55.4667L66.1333 48.3556L36.9778 0Z" fill="#FF4900"/>
                    <path d="M73.9556 0H94.5778L103.822 15.6444L94.5778 31.2889H75.3778L83.9111 15.6444L73.9556 0Z" fill="#FF4900"/>
                </svg>
            </div>
             <span className="">
                 Interface Design
             </span>
             <div>
                    <svg viewBox="0 0 78 64" className="w-[46px] h-[38px] md:w-[59px] md:h-[48px]">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.822266 7C0.822266 3.13401 3.95627 0 7.82227 0H30.3933L24.4192 12.2617H13.666V40.0748L33.9777 0H39.8223C43.6883 0 46.8223 3.13401 46.8223 7V57C46.8223 60.866 43.6883 64 39.8223 64H17.2499L23.2239 51.7383H33.9772L33.9772 23.9252L13.6655 64H7.82227C3.95627 64 0.822266 60.866 0.822266 57V7Z" fill="#FF4900"/>
                        <path d="M77.8223 64H62.8223V43.0345L77.8223 17.6552H62.8223V0H69.2508L77.8223 17.6552V64Z" fill="#FF4900"/>
                    </svg>
                </div>
             <span className="">
                 Design Analysis
             </span>
             <div>
                <svg viewBox="0 0 104 64" className="w-[60px] h-[38px] md:w-[78px] md:h-[48px]">
                    <path d="M0 0H19.9111L47.6444 48.3556L38.4 64H18.4889L29.1556 48.3556L0 0Z" fill="#FF4900"/>
                    <path d="M36.9778 0H56.8889L84.6222 48.3556L75.3778 64H55.4667L66.1333 48.3556L36.9778 0Z" fill="#FF4900"/>
                    <path d="M73.9556 0H94.5778L103.822 15.6444L94.5778 31.2889H75.3778L83.9111 15.6444L73.9556 0Z" fill="#FF4900"/>
                </svg>
            </div>
             <span className="">
                 Prototyping
             </span>
             <div>
                    <svg viewBox="0 0 78 64" className="w-[46px] h-[38px] md:w-[59px] md:h-[48px]">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.822266 7C0.822266 3.13401 3.95627 0 7.82227 0H30.3933L24.4192 12.2617H13.666V40.0748L33.9777 0H39.8223C43.6883 0 46.8223 3.13401 46.8223 7V57C46.8223 60.866 43.6883 64 39.8223 64H17.2499L23.2239 51.7383H33.9772L33.9772 23.9252L13.6655 64H7.82227C3.95627 64 0.822266 60.866 0.822266 57V7Z" fill="#FF4900"/>
                        <path d="M77.8223 64H62.8223V43.0345L77.8223 17.6552H62.8223V0H69.2508L77.8223 17.6552V64Z" fill="#FF4900"/>
                    </svg>
                </div>
             <span className="">
                 High Fidelity Screens
             </span>
             <div>
                <svg viewBox="0 0 104 64" className="w-[60px] h-[38px] md:w-[78px] md:h-[48px]">
                    <path d="M0 0H19.9111L47.6444 48.3556L38.4 64H18.4889L29.1556 48.3556L0 0Z" fill="#FF4900"/>
                    <path d="M36.9778 0H56.8889L84.6222 48.3556L75.3778 64H55.4667L66.1333 48.3556L36.9778 0Z" fill="#FF4900"/>
                    <path d="M73.9556 0H94.5778L103.822 15.6444L94.5778 31.2889H75.3778L83.9111 15.6444L73.9556 0Z" fill="#FF4900"/>
                </svg>
            </div>
        </div>
        <div className="flex flex-row gap-3 md:gap-6 font-bold text-[38px] md:text-6xl whitespace-nowrap items-center"
            style={{ 
            initial: '-100vw',
            transform: `translateX(${-slideAmount}px)` 
            }}>
            <div>
                <svg viewBox="0 0 104 64" className="w-[60px] h-[38px] md:w-[78px] md:h-[48px]">
                    <path d="M0 0H19.9111L47.6444 48.3556L38.4 64H18.4889L29.1556 48.3556L0 0Z" fill="#FF4900"/>
                    <path d="M36.9778 0H56.8889L84.6222 48.3556L75.3778 64H55.4667L66.1333 48.3556L36.9778 0Z" fill="#FF4900"/>
                    <path d="M73.9556 0H94.5778L103.822 15.6444L94.5778 31.2889H75.3778L83.9111 15.6444L73.9556 0Z" fill="#FF4900"/>
                </svg>
            </div>
             <span className="">
             Design Analysis
             </span>
             <div>
                    <svg viewBox="0 0 78 64" className="w-[46px] h-[38px] md:w-[59px] md:h-[48px]">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.822266 7C0.822266 3.13401 3.95627 0 7.82227 0H30.3933L24.4192 12.2617H13.666V40.0748L33.9777 0H39.8223C43.6883 0 46.8223 3.13401 46.8223 7V57C46.8223 60.866 43.6883 64 39.8223 64H17.2499L23.2239 51.7383H33.9772L33.9772 23.9252L13.6655 64H7.82227C3.95627 64 0.822266 60.866 0.822266 57V7Z" fill="#FF4900"/>
                        <path d="M77.8223 64H62.8223V43.0345L77.8223 17.6552H62.8223V0H69.2508L77.8223 17.6552V64Z" fill="#FF4900"/>
                    </svg>
                </div>
             <span className="">
                 Prototyping
             </span>
             <div>
                <svg viewBox="0 0 104 64" className="w-[60px] h-[38px] md:w-[78px] md:h-[48px]">
                    <path d="M0 0H19.9111L47.6444 48.3556L38.4 64H18.4889L29.1556 48.3556L0 0Z" fill="#FF4900"/>
                    <path d="M36.9778 0H56.8889L84.6222 48.3556L75.3778 64H55.4667L66.1333 48.3556L36.9778 0Z" fill="#FF4900"/>
                    <path d="M73.9556 0H94.5778L103.822 15.6444L94.5778 31.2889H75.3778L83.9111 15.6444L73.9556 0Z" fill="#FF4900"/>
                </svg>
            </div>
             <span className="">
                 High Fidelity Screens
             </span>
             <div>
                    <svg viewBox="0 0 78 64" className="w-[46px] h-[38px] md:w-[59px] md:h-[48px]">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.822266 7C0.822266 3.13401 3.95627 0 7.82227 0H30.3933L24.4192 12.2617H13.666V40.0748L33.9777 0H39.8223C43.6883 0 46.8223 3.13401 46.8223 7V57C46.8223 60.866 43.6883 64 39.8223 64H17.2499L23.2239 51.7383H33.9772L33.9772 23.9252L13.6655 64H7.82227C3.95627 64 0.822266 60.866 0.822266 57V7Z" fill="#FF4900"/>
                        <path d="M77.8223 64H62.8223V43.0345L77.8223 17.6552H62.8223V0H69.2508L77.8223 17.6552V64Z" fill="#FF4900"/>
                    </svg>
                </div>
             <span className="">
                 Interface Design
             </span>
             <div>
                <svg viewBox="0 0 104 64" className="w-[60px] h-[38px] md:w-[78px] md:h-[48px]">
                    <path d="M0 0H19.9111L47.6444 48.3556L38.4 64H18.4889L29.1556 48.3556L0 0Z" fill="#FF4900"/>
                    <path d="M36.9778 0H56.8889L84.6222 48.3556L75.3778 64H55.4667L66.1333 48.3556L36.9778 0Z" fill="#FF4900"/>
                    <path d="M73.9556 0H94.5778L103.822 15.6444L94.5778 31.2889H75.3778L83.9111 15.6444L73.9556 0Z" fill="#FF4900"/>
                </svg>
            </div>
             <span className="">
                 User Research
             </span>
             <div>
                    <svg viewBox="0 0 78 64" className="w-[46px] h-[38px] md:w-[59px] md:h-[48px]">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.822266 7C0.822266 3.13401 3.95627 0 7.82227 0H30.3933L24.4192 12.2617H13.666V40.0748L33.9777 0H39.8223C43.6883 0 46.8223 3.13401 46.8223 7V57C46.8223 60.866 43.6883 64 39.8223 64H17.2499L23.2239 51.7383H33.9772L33.9772 23.9252L13.6655 64H7.82227C3.95627 64 0.822266 60.866 0.822266 57V7Z" fill="#FF4900"/>
                        <path d="M77.8223 64H62.8223V43.0345L77.8223 17.6552H62.8223V0H69.2508L77.8223 17.6552V64Z" fill="#FF4900"/>
                    </svg>
            </div>
             
        </div>
        
      </div>
    );
  }
  
  export default SlidingBar;