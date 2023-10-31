import ThemeButton from "./ThemeButton";
import { usePopup } from "./PopupContext";
import Link from "next/link";
import React, { useState } from "react";
import Collapse from "react-collapse";
import { useEffect } from "react";
import '../app/navBarButton.css'

const Navbar = () => {
  const { isPopupOpen, togglePopup } = usePopup();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleLinkClick = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.querySelectorAll("a, button").forEach((elem) => {
      elem.addEventListener("click", handleLinkClick);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.querySelectorAll("a, button").forEach((elem) => {
        elem.removeEventListener("click", handleLinkClick);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div style={{ position: "relative" }}>
      <nav className="flex flex-row items-center mt-2 lg:mt-0 justify-between mx-auto max-w-screen-xl pt-2 pr-4 md:p-4 fixed left-3 right-3 md:left-6 top-0 md:right-6 z-20 overflow-hidden scrollbar-hide backdrop-blur">
        <Link href="/" style={{ alignSelf: "start" }}>
          <svg
            width="72"
            height="40"
            viewBox="0 0 72 40"
            className="dark:stroke-[#FFF8F8] stroke-[#121212] fill-transparent scale-[60%] md:scale-100 md:w-[72px] md:h-[40px]"
          >
            <rect
              x="16"
              y="14"
              width="16"
              height="16"
              rx="8"
              className="dark:fill-[#FFF8F8] fill-[#121212]"
            />
            <rect
              x="48"
              y="14"
              width="16"
              height="16"
              rx="8"
              className="dark:fill-[#FFF8F8] fill-[#121212]"
            />
            <path d="M35 26H46" stroke-width="2" stroke-linecap="round" />
            <rect x="1" y="1" width="70" height="38" rx="19" stroke-width="2" />
          </svg>
        </Link>
        <ThemeButton />
        <div className="hidden flex-row gap-6 font-medium pr-6 md:flex">
          <button className="underlineEffect" onClick={togglePopup}>Contact</button>
          <Link className="underlineEffect" href="/knowme">Know Me!</Link>
          <a className="underlineEffect"
            href="https://drive.google.com/file/d/1teguoPNWgoDj3p1hDeEX_PcjqBuPF7NN/view?usp=drive_link"
            target="_blank"
          >
            Resume
          </a>
        </div>
        <div className="flex flex-col md:hidden text-[16px] ">
          <span onClick={toggleMenu} className="cursor-pointer self-end mb-4">
            {isOpen ? (
              <span className="flex items-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="dark:text-white text-black"
                >
                  <g opacity="0.6">
                    <rect
                      x="17.3911"
                      width="3.68925"
                      height="24.595"
                      transform="rotate(45 17.3911 0)"
                      fill="currentColor"
                    />
                    <path
                      d="M10.0322 7.42358H4.81484L8.47071e-05 2.60883L2.60878 0.000137626L10.0322 7.42358Z"
                      fill="currentColor"
                    />
                    <rect
                      x="19.9995"
                      y="17.3912"
                      width="3.68925"
                      height="14.0687"
                      transform="rotate(135 19.9995 17.3912)"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </span>
            ) : (
              "Menu"
            )}
          </span>
        </div>
      </nav>
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"
          } fixed right-3 left-3 top-12 z-30  p-4 rounded-md `}
      >
        <ul className="flex flex-col items-end justify-center ">
          <li className="mb-3">
            <Link className="underlineEffect" href="/knowme">Know Me!</Link>
          </li>
          <li className="mb-3">
            <button className="underlineEffect" type="button" onClick={togglePopup}>
              Contact
            </button>
          </li>
          <li className="mb-3">
            <a className="underlineEffect"
              href="https://drive.google.com/file/d/1teguoPNWgoDj3p1hDeEX_PcjqBuPF7NN/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
