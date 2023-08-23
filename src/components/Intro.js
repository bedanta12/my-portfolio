import Image from 'next/image';
import Link from 'next/link';

const Intro = () => {
    
    return (
        <div className="flex flex-row w-full h-fit items-center justify-center">
            <Image className="scale-75" src="/code-image.svg" alt="code" width={664} height={246} />
            <div className="flex flex-col text-lg font-medium">
                <div>
                    Hello, I’m  <span className="font-extrabold">Ipsita Jain</span>
                </div>
                <div className="whitespace-pre">
                    A tech savvy, obsessed with website development.{"\n"}
                    I do full stack development. I am a quick learner.
                </div>
                <Link href="/#projects">
                    <div className="flex flex-row">
                        <svg width="53" height="82" viewBox="0 0 53 82" className="stroke-[#2B0B7D] dark:stroke-white fill-transparent scale-75">
                            <line x1="26.5" y1="2.18561e-08" x2="26.5" y2="67"/>
                                <path d="M26.5 68.5C26.5 66.7928 26.8363 65.1023 27.4896 63.5251C28.1429 61.9479 29.1005 60.5148 30.3076 59.3076C31.5148 58.1004 32.9479 57.1429 34.5251 56.4896C36.1024 55.8363 37.7928 55.5 39.5 55.5"/>
                                <path d="M26.5 68.5C26.5 66.7928 26.1637 65.1023 25.5104 63.5251C24.8571 61.9479 23.8995 60.5148 22.6924 59.3076C21.4852 58.1004 20.0521 57.1429 18.4749 56.4896C16.8976 55.8363 15.2072 55.5 13.5 55.5"/>
                        </svg>
                        <span className="whitespace-pre flex items-center">
                            Know more {"\n"}
                            down below
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )

  };
  
  export default Intro;