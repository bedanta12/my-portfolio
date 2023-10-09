import localFont from "next/font/local";
const dirtyline = localFont({src: "../../fonts/dirtyline.ttf"})
import withCursor from "./WithCursor";

const LandingPage = (props) => {
    const { onCursor } = props.context;
    
    return (
        <section id="home" className="flex flex-col justify-between px-5 md:px-10"
        //  onMouseEnter={() => onCursor('pointer')} onMouseLeave={onCursor}
        >
            <div className="flex flex-col md:mt-auto">
                <div className="hidden md:flex flex-col" id="landing-text">
                    <div className="flex flex-row justify-between items-end">
                        <p className="mb-1 md:mb-3 text-[7px] md:text-[20px] 2xl:text-[28px]">I'm</p>
                        <p style={dirtyline.style} className="text-[20px] md:text-[3rem] lg:text-[4rem] 2xl:text-[8rem]">Digital</p>
                    </div>
                    <div className="flex flex-row justify-between items-end">
                        <p style={dirtyline.style} className="text-[20px] md:text-[3rem] lg:text-[4rem] 2xl:text-[8rem]">Bedanta</p>
                        <p style={dirtyline.style} className="text-[20px] md:text-[3rem] lg:text-[4rem] 2xl:text-[8rem] text-[#FF4900]">Designer</p>
                    </div>
                    <div className="flex flex-row justify-between items-end">
                        <p style={dirtyline.style} className="text-[20px] md:text-[3rem] lg:text-[4rem] 2xl:text-[8rem]">Rick</p>
                        {/* <div className="border-b-2 border-white w-96"></div> */}
                        <p style={dirtyline.style} className="text-[20px] md:text-[3rem] lg:text-[4rem] 2xl:text-[8rem] whitespace-nowrap">Creative Enthusiast</p>
                    </div>
                </div>
                <div className="flex md:hidden flex-col h-[60vh] mt-24 justify-between" id="landing-text">
                    <div className="flex flex-col items-start mb-auto">
                        <p className="mb-2 text-[14px]">I'm</p>
                        <p style={dirtyline.style} className="text-[32px]">Bedanta</p>
                        <p style={dirtyline.style} className="text-[32px]">Rick</p>
                    </div>
                    <div className="flex flex-col items-end mt-auto">
                        <p style={dirtyline.style} className="text-[32px]">Digital</p>
                        <p style={dirtyline.style} className="text-[32px] text-[#FF4900]">Designer</p>
                        <p style={dirtyline.style} className="text-[32px] whitespace-nowrap">Creative Enthusiast</p>
                    </div>
                </div>
                <p className="ml-auto text-[14px] mr-1" id="landing-text">Still a student, in IIT Guwahati</p>
                <svg viewBox="0 0 45 66" className="w-[22px] h-[33px] md:w-[33px] md:h-[50px] mx-auto md:ml-auto my-5 md:my-10 md:mr-2">
                    <rect x="15.9999" width="12" height="65" fill="#FF4900"/>
                    <rect x="35.5565" y="41" width="12" height="22" transform="rotate(45 35.5565 41)" fill="#FF4900"/>
                    <rect width="12" height="10.7347" transform="matrix(-0.707107 0.707107 0.707107 0.707107 8.48523 41)" fill="#FF4900"/>
                </svg>
            </div>
            
        </section>
        
    )

  };
  
  export default withCursor(LandingPage);