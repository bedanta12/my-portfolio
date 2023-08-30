import Link from 'next/link';
import React from 'react';
import ThemeButton from './ThemeButton';
import localFont from "next/font/local";

const dirtyline = localFont({src: "../../fonts/dirtyline.ttf"})


const Footer = () => {
  return (
    <section className="p-10 flex flex-col-reverse">
        <div>
            @2023
        </div>
        <div className="flex flex-row items-end justify-between">
            <div className="w-1/2 text-6xl" style={dirtyline.style}>
                Lets make something Useful
            </div>
            <div className="ml-auto flex flex-col text-3xl mr-20">
                    <div className="flex flex-row items-center mt-10 gap-2">
                        <div>
                            Get
                        </div>
                        <svg width="40" height="32" viewBox="0 0 40 32" className=''>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3142 15.0408V32H14.6695V15.1067L7.52693 22.2493L0 14.7223L14.6111 0.111243L14.6695 0.16964V0.0659458H25.2613L25.3272 0L39.9383 14.6111L32.4114 22.138L25.3142 15.0408ZM25.3141 15.0937H14.6695L25.3141 24.6426V15.0937Z" fill="#FFF8F8"/>
                        </svg>
                        <div>
                            Back up
                        </div>
                    </div>
                    <div className='my-10'>
                        Resume
                    </div>
                    <div>
                        Know Me!
                    </div>
                    <div>
                        Spotify
                    </div>
                    <div>
                        LinkedIn
                    </div>
                    <div className="bg-[#FF4900] flex flex-col h-fit py-1 pl-1 pr-6 mr-6 mb-4 mt-20">
                        <svg width="36" height="36" viewBox="0 0 36 36" className="scale-75 fill-current text-[#D9D9D9] dark:text-[#121212]">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4779 12.8744L35.1267 26.5232L26.5598 35.0901L12.964 21.4943L12.964 32.9911L0.8486 32.9911L0.848601 9.47291H0.942594L0.859142 9.38946L9.38344 0.865159L9.38344 0.759012L32.9016 0.759012L32.9016 12.8744L21.4779 12.8744Z"/>
                        </svg>
                        <div className='font-bold text-4xl'>
                            Contact
                        </div>
                    </div>
                </div>
        </div>
    </section>
    );
};

export default Footer;
