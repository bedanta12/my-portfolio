import React from "react";
import Link from "next/link";
import { usePopup } from "./PopupContext";
import localFont from "next/font/local";
import SlidingBar from "./SlidingBar";
const dirtyline = localFont({ src: "../../fonts/dirtyline.ttf" });

const Footer = () => {
  const { isPopupOpen, togglePopup } = usePopup();
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer" className="p-8 md:p-10 flex flex-col-reverse">
      <div>@2023</div>
      <div className="flex flex-col-reverse md:flex-row items-end justify-between">
        <div
          id="footer-landing-text"
          className="md:w-1/2 text-[32px] md:text-6xl"
          style={dirtyline.style}
        >
          Lets make something Useful
        </div>
        <div className="ml-auto hidden md:flex flex-col text-3xl mr-20">
          <div
            onClick={goToTop}
            className="flex flex-row items-center mt-10 gap-2 hover:cursor-pointer"
          >
            <div>Get</div>
            <svg
              width="40"
              height="32"
              viewBox="0 0 40 32"
              className="fill-[#121212] dark:fill-[#FFF8F8]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.3142 15.0408V32H14.6695V15.1067L7.52693 22.2493L0 14.7223L14.6111 0.111243L14.6695 0.16964V0.0659458H25.2613L25.3272 0L39.9383 14.6111L32.4114 22.138L25.3142 15.0408ZM25.3141 15.0937H14.6695L25.3141 24.6426V15.0937Z"
              />
            </svg>
            <div>Back up</div>
          </div>
          <a
            href="https://drive.google.com/file/d/1teguoPNWgoDj3p1hDeEX_PcjqBuPF7NN/view?usp=drive_link"
            target="_blank"
            className="my-10"
          >
            Resume
          </a>
          <Link href="/knowme">Know Me!</Link>
          <a
            href="https://open.spotify.com/user/yoej0p7xokdteneg1h4xduy0t?si=juhD4IzbQ3-i4WE6jagxAA"
            target="_blank"
          >
            Spotify
          </a>
          <a href="https://www.linkedin.com/in/bedanta-mandal" target="_blank">
            LinkedIn
          </a>
          <button
            onClick={togglePopup}
            
            className=" flex flex-col py-1 pl-1 pr-6 mr-6 mb-4 mt-20 button-container"
            style={{ transition: "all 0.3s" ,inlineSize:"150px", overflowWrap:"no-break"}} 
          >
           
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="36"
            height="36"
            viewBox="0 0 36 36" 
            fill="none"
            className="scale-75 fill-current text-[#D9D9D9] dark:text-[#121212] arrow-icon"
            style={{ ttransition: "all 0.3s", marginBottom: "-10px"}}
            >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4779 12.8745L35.1267 26.5233L26.5598 35.0902L12.964 21.4944L12.964 32.9911L0.8486 32.9911L0.848601 9.47297H0.942594L0.859142 9.38952L9.38344 0.86522L9.38344 0.759073H32.9016L32.9016 12.8745H21.4779Z" fill="#FFF8F8"/>
            </svg>
            <div
              className="font-bold text-4xl text-label"
              style={{
                color: "transparent",
                transition: "all 0.3s",
                whiteSpace: "nowrap",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                inlineSize:"150px",
                overflowWrap:"no-break"
              }}
            >
              cl
            </div>
          </button>
          <style>{`
          .button-container  {
            background-image: url("/Contact1.png");
            background-size: cover
        }
        .button-container:hover  { 
            background-image: url("/Contactt.png");
            backgroud-size:cover
          }
         
  .button-container:hover .arrow-icon {
    animation: flyAnimation 0.6s forwards;
  }

  @keyframes flyAnimation {
    0% {
      transform: translateY(100px) translateX(100px) scale(1);
    }
    100% {
      transform:translateY(17px) translateX(17px) scale(2.0)
    }
  }

`}</style>
        </div>
        <div className="md:hidden flex flex-row justify-between items-end w-full h-[40vh] mb-16">
          <div className="flex flex-col text-[20px]">
            <a
              href="https://drive.google.com/file/d/1teguoPNWgoDj3p1hDeEX_PcjqBuPF7NN/view?usp=drive_link"
              target="_blank"
              className="my-10"
            >
              Resume
            </a>
            <Link href="/knowme">Know Me!</Link>
            <a
              href="https://open.spotify.com/user/yoej0p7xokdteneg1h4xduy0t?si=juhD4IzbQ3-i4WE6jagxAA"
              target="_blank"
            >
              Spotify
            </a>
            <a
              href="https://www.linkedin.com/in/bedanta-mandal"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div
              onClick={goToTop}
              className="flex flex-row items-center gap-2 hover:cursor-pointer"
            >
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                className="fill-[#121212] dark:fill-[#FFF8F8]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.3142 15.0408V32H14.6695V15.1067L7.52693 22.2493L0 14.7223L14.6111 0.111243L14.6695 0.16964V0.0659458H25.2613L25.3272 0L39.9383 14.6111L32.4114 22.138L25.3142 15.0408ZM25.3141 15.0937H14.6695L25.3141 24.6426V15.0937Z"
                />
              </svg>
              <div className="text-base">Back up</div>
            </div>
            <button
              onClick={togglePopup}
              className="bg-[#FF4900] flex flex-col h-fit py-2 pl-2 pr-12"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className=" fill-current text-[#D9D9D9] dark:text-[#121212]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.4779 12.8744L35.1267 26.5232L26.5598 35.0901L12.964 21.4943L12.964 32.9911L0.8486 32.9911L0.848601 9.47291H0.942594L0.859142 9.38946L9.38344 0.865159L9.38344 0.759012L32.9016 0.759012L32.9016 12.8744L21.4779 12.8744Z"
                />
              </svg>
              <div id="zero-line-height" className="font-bold text-[24px]">
                Contact
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
