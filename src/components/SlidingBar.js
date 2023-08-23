import { Fascinate } from "next/font/google";
const fascinate = Fascinate({ 
    subsets: ['latin'],
    weight: '400'
  })
  

const SlidingBar = () => {
   
    return (
        <main className="flex relative overflow-hidden flex-row text-[#2B0C7D] dark:text-white w-full">
            
            <div className="relative flex flex-row max-h-fit">
                <div className="py-12 animate-marquee whitespace-nowrap">
                    <span className="text-9xl ml-48">
                        <span className={fascinate.className}>
                            FRONTEND * BACKEND
                        </span>
                    </span>
                </div>

                <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                <span className="text-9xl ml-48">
                        <span className={fascinate.className}>
                            FRONTEND * BACKEND
                        </span>
                    </span>
                </div>
            </div>
        </main>
    )

  };
  
  export default SlidingBar;