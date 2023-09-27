'use client'
import localFont from "next/font/local";
import Image from 'next/image';
const dirtyline = localFont({src: "../../fonts/dirtyline.ttf"})
const aeonik_loading = localFont({src: "../../fonts/Aeonik-ThinItalic.ttf"})

const AboutLandingPage = () => {
    
    return (
        <main id="landing-text" className="flex flex-col justify-between px-36">
            <section style={dirtyline.style} className="mt-auto mx-auto flex flex-col items-center justify-end">
                <div className="flex flex-row items-center gap-48 text-[8.25rem]">
                    <span>
                        Hello
                    </span>
                    <span>
                        there
                    </span>
                </div>
                <div className="flex flex-row items-end gap-4">
                    <span className="text-[4rem] mb-1 text-[#FF4900]">
                        i'm
                    </span>
                    <span className="text-[8.25rem]">
                        Bedanta
                    </span>
                </div>
            </section>
            <section>
            <Image className="scale-90 rounded-2xl" src="/bedanta.png" height={1141} width={1091} alt="" />
            </section>
            <section id="about-landing-text" className="flex flex-col">
                <div className="flex flex-col text-[64px] font-medium">
                    <span>
                    I’m <span className="text-[#FF4900]">Bedanta</span>. aka Ricky
                    </span>
                    <span>
                    Currently a student in IIT Guwahati, Keeping my focus on UX and Interface design.
                    </span>
                </div>
                <div className="flex flex-col mt-20 text-[40px] font-normal">
                    <span>
                    Born in Kolkata, India
                    </span>
                    <span>
                    Currently in Guwahati, Assam
                    </span>
                    <span>
                    Next destination...........<span style={aeonik_loading.style}>Loading</span>
                    </span>
                </div>
            </section>
        </main>
    )

  };
  
  export default AboutLandingPage;