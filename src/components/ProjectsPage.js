import localFont from "next/font/local";
const dirtyline = localFont({src: "../../fonts/dirtyline.ttf"})
import { useState } from 'react';

export default function ProjectsPage() {

    return (
        <section id="projects" className="mx-10">
            <div style={dirtyline.style} className="text-[5.125rem]">
                projects
            </div>
            <div className="flex flex-row justify-between items-end">
                <div className=" w-1/5">
                These are some of the projects that I worked on till now. 
                </div>
                <div className="flex flex-row">
                    <span>
                        grid
                    </span>
                    <span>
                        cards
                    </span>
                </div>
            </div>
            <div className="flex flex-col my-10 gap-6 text-[#121212]">
                <div className="flex flex-row justify-between">
                    <a href="https://drive.google.com/file/d/1giEtFqVWJ4pZU9XlSrCVoxwKuRwj24M2/view?usp=drive_link" target ="_blank" className="bg-cover1 bg-cover flex flex-col justify-between relative w-[54%] bg-[#D9D9D9] h-80 rounded-2xl p-6">
                        <div className="flex flex-row justify-between items-start">
                            <div className="flex flex-row gap-2 font-bold">
                                <span className="text-[#121212]">EXP. 001</span>
                                <div className="inline-block w-0.5 self-stretch bg-[#FF4900]"></div>
                                <span className="text-[#868686]">2022</span>
                            </div>
                            <svg width="48" height="48" viewBox="0 0 48 48">
                                <circle cx="24" cy="24" r="24" fill="#121212"/>
                                {/* <path d="M32.1703 10.7234H10.7235V18.383H24.2554L10.7235 31.6596L16.3405 37.0213L37.2767 15.8298L32.1703 10.7234Z" fill="#FFF8F8"/>
                                <path d="M29.6171 37.0213V24.2553L37.2767 31.6596V37.0213H29.6171Z" fill="#FFF8F8"/> */}
                                <path d="M28.3077 17H17V21.0777V28.1456V31L26.9615 31H31V28.1456V19.7184V17H28.3077Z" fill="#FFF8F8"/>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-bold text-2xl">
                                Volunteering App Case study
                            </div>
                            <div className="flex flex-row gap-2 justify-start items-center font-medium">
                                <div>
                                    Case Study
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div>
                                    User Research
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div>
                                    Interface Design
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1sec0B5ivptTLX1oUY5w6WBbA4M_GyxTY/view?usp=drive_link" target="_blank" className="bg-cover2 bg-cover flex flex-col justify-between relative w-[44%] bg-[#D9D9D9] h-80 rounded-2xl p-6">
                        <div className="flex flex-row justify-between items-start">
                            <div className="flex flex-row gap-2 font-bold">
                                <span className="text-[#121212]">EXP. 002</span>
                                <div className="inline-block w-0.5 self-stretch bg-[#FF4900]"></div>
                                <span className="text-[#868686]">2022</span>
                            </div>
                            <svg width="48" height="48" viewBox="0 0 48 48">
                                <circle cx="24" cy="24" r="24" fill="#121212"/>
                                {/* <path d="M32.1703 10.7234H10.7235V18.383H24.2554L10.7235 31.6596L16.3405 37.0213L37.2767 15.8298L32.1703 10.7234Z" fill="#FFF8F8"/>
                                <path d="M29.6171 37.0213V24.2553L37.2767 31.6596V37.0213H29.6171Z" fill="#FFF8F8"/> */}
                                <path d="M28.3077 17H17V21.0777V28.1456V31L26.9615 31H31V28.1456V19.7184V17H28.3077Z" fill="#FFF8F8"/>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-bold text-2xl">
                            IITG Connect Dating app
                            </div>
                            <div className="flex flex-row gap-2 justify-start items-center font-medium">
                                <div>
                                    Report
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div>
                                    User Research
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div>
                                    Stat Analysis
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex flex-row justify-between">
                    <a href="https://drive.google.com/file/d/11z8-DFBYgpjf9CRW7e6C3F9QIGJm8uUa/view?usp=drive_link" target="_blank" className="bg-cover3 bg-cover flex flex-col justify-between relative w-[43%] bg-[#D9D9D9] h-80 rounded-2xl p-6">
                        <div className="flex flex-row justify-between items-start">
                            <div className="flex flex-row gap-2 font-bold">
                                <span className="text-[#121212]">EXP. 003</span>
                                <div className="inline-block w-0.5 self-stretch bg-[#FF4900]"></div>
                                <span className="text-[#868686]">2022</span>
                            </div>
                            <svg width="48" height="48" viewBox="0 0 48 48">
                                <circle cx="24" cy="24" r="24" fill="#121212"/>
                                {/* <path d="M32.1703 10.7234H10.7235V18.383H24.2554L10.7235 31.6596L16.3405 37.0213L37.2767 15.8298L32.1703 10.7234Z" fill="#FFF8F8"/>
                                <path d="M29.6171 37.0213V24.2553L37.2767 31.6596V37.0213H29.6171Z" fill="#FFF8F8"/> */}
                                <path d="M28.3077 17H17V21.0777V28.1456V31L26.9615 31H31V28.1456V19.7184V17H28.3077Z" fill="#FFF8F8"/>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-bold text-2xl">
                            Summer Internship 22’
                            </div>
                            <div className="flex flex-row gap-2 justify-start items-center font-medium">
                                <div>
                                    Web Design
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div>
                                Interface Design
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div>
                                    User Interface
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1UVJqysE-4R73iJo_DAhHAaewZ1Oj8NGP/view?usp=drive_link" target="_blank" className="bg-cover4 bg-cover flex flex-col justify-between relative w-[55%] bg-[#D9D9D9] h-80 rounded-2xl p-6">
                        <div className="flex flex-row justify-between items-start">
                            <div className="flex flex-row gap-2 font-bold">
                                <span className="text-[#121212]">EXP. 004</span>
                                <div className="inline-block w-0.5 self-stretch bg-[#FF4900]"></div>
                                <span className="text-[#868686]">2022</span>
                            </div>
                            <svg width="48" height="48" viewBox="0 0 48 48">
                                <circle cx="24" cy="24" r="24" fill="#121212"/>
                                {/* <path d="M32.1703 10.7234H10.7235V18.383H24.2554L10.7235 31.6596L16.3405 37.0213L37.2767 15.8298L32.1703 10.7234Z" fill="#FFF8F8"/>
                                <path d="M29.6171 37.0213V24.2553L37.2767 31.6596V37.0213H29.6171Z" fill="#FFF8F8"/> */}
                                <path d="M28.3077 17H17V21.0777V28.1456V31L26.9615 31H31V28.1456V19.7184V17H28.3077Z" fill="#FFF8F8"/>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-bold text-2xl">
                                Design Compilation
                            </div>
                            <div className="flex flex-row gap-2 justify-start items-center font-medium">
                                <div>
                                    UI
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div>
                                    Web Design
                                </div>
                                <div>
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>
                                </div>
                                <div>
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
