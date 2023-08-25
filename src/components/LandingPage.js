import localFont from "next/font/local";

const dirtyline = localFont({src: "../../fonts/dirtyline.ttf"})
// const aeonik = localFont({src: "../../fonts/Aeonik-Regular.ttf"})

const LandingPage = () => {
    
    return (
        <section id="home" className="flex flex-col justify-between px-10">
            <div className="flex flex-col mt-auto">
                <div className="flex flex-col" id="landing-text">
                    <div className="flex flex-row justify-between items-end">
                        <p className="mb-3">I'm</p>
                        <p style={dirtyline.style} className="text-[4rem]">Digital</p>
                    </div>
                    <div className="flex flex-row justify-between items-end">
                        <p style={dirtyline.style} className="text-[4rem]">Bedanta</p>
                        <p style={dirtyline.style} className="text-[4rem] text-[#FF4900]">Designer</p>
                    </div>
                    <div className="flex flex-row justify-between items-end">
                        <p style={dirtyline.style} className="text-[4rem]">Rick</p>
                        {/* <div className="border-b-2 border-white w-96"></div> */}
                        <p style={dirtyline.style} className="text-[4rem]">Creative Enthusiast</p>
                    </div>
                </div>
                <p className="ml-auto text-[0.875rem] mr-1" id="landing-text">Still a student, in IIT Guwahati</p>
                {/* <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-col items-start gap-0" id="landing-text">
                        <p style={aeonik.style} className="mb-1">I'm</p>
                        <p style={dirtyline.style} className="text-[4rem]">Bedanta</p>
                        <p style={dirtyline.style} className="text-[4rem]">Rick</p>
                    </div>
                    <div className="flex flex-col items-end" id="landing-text">
                        <p style={dirtyline.style} className="text-[4rem]">Digital</p>
                        <p style={dirtyline.style} className="text-[4rem]">Designer</p>
                        <p style={dirtyline.style} className="text-[4rem]">Creative Enthusiast</p>
                    </div>
                </div> */}
                <svg width="45" height="66" viewBox="0 0 45 66" className="scale-75 ml-auto my-10 mr-2">
                    <rect x="15.9999" width="12" height="65" fill="#FF4900"/>
                    <rect x="35.5565" y="41" width="12" height="22" transform="rotate(45 35.5565 41)" fill="#FF4900"/>
                    <rect width="12" height="10.7347" transform="matrix(-0.707107 0.707107 0.707107 0.707107 8.48523 41)" fill="#FF4900"/>
                </svg>
            </div>
            
        </section>
        
    )

  };
  
  export default LandingPage;