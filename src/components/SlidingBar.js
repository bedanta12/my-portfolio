import { Fascinate } from "next/font/google";
const fascinate = Fascinate({ 
    subsets: ['latin'],
    weight: '400'
  })
  

const SlidingBar = () => {
   
    return (
        <section id="marquee" className="flex relative flex-row w-full">
            
            <div className="relative flex flex-row max-h-fit">
                <div className="py-12 animate-marquee whitespace-nowrap">
                    {/* <span className="text-9xl ml-48">
                        <span className={fascinate.className}>
                            FRONTEND * BACKEND
                        </span>
                    </span> */}
                    <div className="flex flex-row ml-48">
                        <span className="font-bold text-6xl">
                            User Reasearch
                        </span>
                        <span className="font-bold text-6xl">
                            User Reasearch
                        </span>
                        <span className="font-bold text-6xl">
                            User Reasearch
                        </span>
                        <span className="font-bold text-6xl">
                            User Reasearch
                        </span>
                        <span className="font-bold text-6xl">
                            User Reasearch
                        </span>
                        <span className="font-bold text-6xl">
                            User Reasearch
                        </span>
                    </div>
                </div>

                <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                    {/* <span className="text-9xl ml-48">
                        <span className={fascinate.className}>
                            FRONTEND * BACKEND
                        </span>
                    </span> */}
                    <div className="flex flex-row ml-48">
                        <span className="font-bold text-6xl">
                            User Reasearch
                        </span>
                        <span className="font-bold text-6xl">
                            User Reasearch
                        </span>
                        <span className="font-bold text-6xl">
                            User Reasearch
                        </span>
                        <span className="font-bold text-6xl">
                            User Reasearch
                        </span>
                        <span className="font-bold text-6xl">
                            User Reasearch
                        </span>
                        <span className="font-bold text-6xl">
                            User Reasearch
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )

  };
  
  export default SlidingBar;