import Intro from "./Intro";
import SlidingBar from "./SlidingBar";

const LandingPage = () => {
    
    return (
        <section id="home">
            <div className="max-h-fit flex flex-col justify-center items-center mt-20 pl-[5.1rem] w-screen -z-20">
                <SlidingBar />
                <Intro />
            </div>
        </section>
        
    )

  };
  
  export default LandingPage;