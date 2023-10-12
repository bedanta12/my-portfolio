import Image from "next/image";

const Loading = () => {
    return (
        <div className="w-screen h-screen flex items-center  justify-center bg-black z-50">
            
                    <div> 
                    <Image

                        src="/loader.gif"
                        loading="lazy"
                        alt="loader"
                  
                        width={30}
                        height={30}
                        className=" !static"

                    />
                    </div>
               
        </div>
    )

  };
  
  export default Loading;