import localFont from "next/font/local";
const dirtyline = localFont({src: "../../fonts/dirtyline.ttf"})
import { useState } from 'react';

export default function ProjectsPage() {
    

    return (
        <section id="projects" className="mx-5 md:mx-10">
            <div style={dirtyline.style} className="text-[32px] ml-3 md:ml-0 md:text-[5.125rem]">
                projects
            </div>
            <div className="flex ml-3 md:ml-0 flex-col">
                <div className="w-full md:w-2/5">
                Keeping my focus on User research and user interface, below are a selections of projects that I got the chance to work in.
                </div>
                <div>
                    Check them out
                </div>
            </div>
            <div className="flex flex-col my-10 gap-3 md:gap-2 xl:gap-[1.125rem] text-[#121212]">
                <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between">
                    <a href="https://drive.google.com/file/d/1giEtFqVWJ4pZU9XlSrCVoxwKuRwj24M2/view?usp=drive_link" target ="_blank" className="group bg-cover1 bg-cover flex flex-col justify-between relative w-full md:w-[55%] bg-[#D9D9D9] h-48 md:h-80 2xl:h-[36rem] rounded-2xl p-4 md:p-6">
                        <div className="flex flex-row justify-between items-start">
                            <div className="flex flex-row gap-2 font-bold">
                                <span className="text-[#121212] text-[14px] md:text-base">EXP. 001</span>
                                <div className="inline-block w-0.5 self-stretch bg-[#FF4900]"></div>
                                <span className="text-[#868686] text-[14px] md:text-base">2022</span>
                            </div>
                            <svg viewBox="0 0 48 48" className="h-[28px] w-[28px] md:h-[48px] md:w-[48px]">
                                <circle cx="24" cy="24" r="24" fill="#121212"/>
                                <svg width="48" height="48" viewBox="0 0 48 48" className="transition-opacity ease-in duration-100 opacity-100 scale-100 group-hover:opacity-0 transform group-hover:scale-0" >
                                <path d="M32.1703 10.7234H10.7235V18.383H24.2554L10.7235 31.6596L16.3405 37.0213L37.2767 15.8298L32.1703 10.7234Z" fill="#FFF8F8"/>
                                <path d="M29.6171 37.0213V24.2553L37.2767 31.6596V37.0213H29.6171Z" fill="#FFF8F8"/>
                                </svg>
                                {/* <svg width="48" height="48" viewBox="0 0 48 48" className="transition-transform ease-out duration-300 transform -translate-x-1 opacity-0 group-hover:transform group-hover:translate-x-0 hover:opacity-100" > */}
                                <svg width="48" height="48" viewBox="0 0 48 48" className="transition-opacity ease-in duration-500 opacity-0 scale-100 group-hover:opacity-100 transform group-hover:scale-0" >
                                <path d="M28.3077 17H17V21.0777V28.1456V31L26.9615 31H31V28.1456V19.7184V17H28.3077Z" fill="#FFF8F8"/>
                                </svg>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-bold text-base md:text-2xl">
                                Volunteering App Case study
                            </div>
                            <div className="flex flex-row gap-2 md:gap-2 justify-start items-center font-medium text-xs md:text-base">
                                <div className=" whitespace-nowrap">
                                    Case Study
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div className=" whitespace-nowrap">
                                    User Research
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div className=" whitespace-nowrap">
                                    Interface Design
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1sec0B5ivptTLX1oUY5w6WBbA4M_GyxTY/view?usp=drive_link" target="_blank" className="group bg-cover2 bg-cover flex flex-col justify-between relative w-full lg:w-[44%] bg-[#D9D9D9] h-48 md:h-80 2xl:h-[36rem] rounded-2xl p-4 md:p-6">
                        <div className="flex flex-row justify-between items-start">
                            <div className="flex flex-row gap-2 font-bold">
                                <span className="text-[#121212] text-[14px] md:text-base">EXP. 002</span>
                                <div className="inline-block w-0.5 self-stretch bg-[#FF4900]"></div>
                                <span className="text-[#868686] text-[14px] md:text-base">2022</span>
                            </div>
                            <svg viewBox="0 0 48 48" className="h-[28px] w-[28px] md:h-[48px] md:w-[48px]">
                                <circle cx="24" cy="24" r="24" fill="#121212"/>
                                <svg width="48" height="48" viewBox="0 0 48 48" className="transition-opacity ease-in duration-100 opacity-100 scale-100 group-hover:opacity-0 transform group-hover:scale-0" >
                                <path d="M32.1703 10.7234H10.7235V18.383H24.2554L10.7235 31.6596L16.3405 37.0213L37.2767 15.8298L32.1703 10.7234Z" fill="#FFF8F8"/>
                                <path d="M29.6171 37.0213V24.2553L37.2767 31.6596V37.0213H29.6171Z" fill="#FFF8F8"/>
                                </svg>
                                {/* <svg width="48" height="48" viewBox="0 0 48 48" className="transition-transform ease-out duration-300 transform -translate-x-1 opacity-0 group-hover:transform group-hover:translate-x-0 hover:opacity-100" > */}
                                <svg width="48" height="48" viewBox="0 0 48 48" className="transition-opacity ease-in duration-500 opacity-0 scale-100 group-hover:opacity-100 transform group-hover:scale-0" >
                                <path d="M28.3077 17H17V21.0777V28.1456V31L26.9615 31H31V28.1456V19.7184V17H28.3077Z" fill="#FFF8F8"/>
                                </svg>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-bold text-base md:text-2xl">
                            IITG Connect Dating app
                            </div>
                            <div className="flex flex-row gap-2 justify-start items-center font-medium text-xs md:text-base">
                                <div className=" whitespace-nowrap">
                                    Report
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div className=" whitespace-nowrap">
                                    User Research
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div className=" whitespace-nowrap">
                                    Stat Analysis
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between">
                    <a href="https://drive.google.com/file/d/11z8-DFBYgpjf9CRW7e6C3F9QIGJm8uUa/view?usp=drive_link" target="_blank" className="group bg-cover3 bg-cover flex flex-col justify-between relative w-full lg:w-[44%] bg-[#D9D9D9] h-48 md:h-80 2xl:h-[36rem] rounded-2xl p-4 md:p-6">
                        <div className="flex flex-row justify-between items-start">
                            <div className="flex flex-row gap-2 font-bold">
                                <span className="text-[#121212] text-[14px] md:text-base">EXP. 003</span>
                                <div className="inline-block w-0.5 self-stretch bg-[#FF4900]"></div>
                                <span className="text-[#868686] text-[14px] md:text-base">2022</span>
                            </div>
                            <svg viewBox="0 0 48 48" className="h-[28px] w-[28px] md:h-[48px] md:w-[48px]">
                                <circle cx="24" cy="24" r="24" fill="#121212"/>
                                <svg width="48" height="48" viewBox="0 0 48 48" className="transition-opacity ease-in duration-100 opacity-100 scale-100 group-hover:opacity-0 transform group-hover:scale-0" >
                                <path d="M32.1703 10.7234H10.7235V18.383H24.2554L10.7235 31.6596L16.3405 37.0213L37.2767 15.8298L32.1703 10.7234Z" fill="#FFF8F8"/>
                                <path d="M29.6171 37.0213V24.2553L37.2767 31.6596V37.0213H29.6171Z" fill="#FFF8F8"/>
                                </svg>
                                {/* <svg width="48" height="48" viewBox="0 0 48 48" className="transition-transform ease-out duration-300 transform -translate-x-1 opacity-0 group-hover:transform group-hover:translate-x-0 hover:opacity-100" > */}
                                <svg width="48" height="48" viewBox="0 0 48 48" className="transition-opacity ease-in duration-500 opacity-0 scale-100 group-hover:opacity-100 transform group-hover:scale-0" >
                                <path d="M28.3077 17H17V21.0777V28.1456V31L26.9615 31H31V28.1456V19.7184V17H28.3077Z" fill="#FFF8F8"/>
                                </svg>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-bold text-base md:text-2xl">
                            Summer Internship 22’
                            </div>
                            <div className="flex flex-row gap-2 justify-start items-center font-medium text-xs md:text-base">
                                <div className=" whitespace-nowrap">
                                    Web Design
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div className=" whitespace-nowrap">
                                Interface Design
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div className=" whitespace-nowrap">
                                    User Interface
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1UVJqysE-4R73iJo_DAhHAaewZ1Oj8NGP/view?usp=drive_link" target="_blank" className="group bg-cover4 bg-cover flex flex-col justify-between relative w-full lg:w-[55%] bg-[#D9D9D9] h-48 md:h-80 2xl:h-[36rem] rounded-2xl p-4 md:p-6">
                        <div className="flex flex-row justify-between items-start">
                            <div className="flex flex-row gap-2 font-bold">
                                <span className="text-[#121212] text-[14px] md:text-base">EXP. 004</span>
                                <div className="inline-block w-0.5 self-stretch bg-[#FF4900]"></div>
                                <span className="text-[#868686] text-[14px] md:text-base">2022</span>
                            </div>
                            <svg viewBox="0 0 48 48" className="h-[28px] w-[28px] md:h-[48px] md:w-[48px]">
                                <circle cx="24" cy="24" r="24" fill="#121212"/>
                                <svg width="48" height="48" viewBox="0 0 48 48" className="transition-opacity ease-in duration-100 opacity-100 scale-100 group-hover:opacity-0 transform group-hover:scale-0" >
                                <path d="M32.1703 10.7234H10.7235V18.383H24.2554L10.7235 31.6596L16.3405 37.0213L37.2767 15.8298L32.1703 10.7234Z" fill="#FFF8F8"/>
                                <path d="M29.6171 37.0213V24.2553L37.2767 31.6596V37.0213H29.6171Z" fill="#FFF8F8"/>
                                </svg>
                                {/* <svg width="48" height="48" viewBox="0 0 48 48" className="transition-transform ease-out duration-300 transform -translate-x-1 opacity-0 group-hover:transform group-hover:translate-x-0 hover:opacity-100" > */}
                                <svg width="48" height="48" viewBox="0 0 48 48" className="transition-opacity ease-in duration-500 opacity-0 scale-100 group-hover:opacity-100 transform group-hover:scale-0" >
                                <path d="M28.3077 17H17V21.0777V28.1456V31L26.9615 31H31V28.1456V19.7184V17H28.3077Z" fill="#FFF8F8"/>
                                </svg>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-bold text-base md:text-2xl">
                                Design Compilation
                            </div>
                            <div className="flex flex-row gap-2 justify-start items-center font-medium text-xs md:text-base">
                                <div className=" whitespace-nowrap">
                                    UI
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div className=" whitespace-nowrap">
                                    Web Design
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div className=" whitespace-nowrap">
                                    Interfaces
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
