import localFont from "next/font/local";
const dirtyline = localFont({src: "../../fonts/dirtyline.ttf"})
import { useState } from 'react';

export default function ProjectsPage() {

    const [open, setOpen] = useState(false);
    const toggle = (index) => {
        if(open === index) {
            return setOpen(null);
        }
        setOpen(index);
    }
    const projects = [
        {
            year: 2023,
            title: "Intern Portal",
            ref_link: "https://intern-portal.vercel.app/",
            desc: "A robust intern portal, embraced by an extensive user base of over thousands of recruiters, students, and coordinators, facilitating efficient and seamless interactions for placements and internships processes. The portal is built using MERN Stack.",
            tags: ["ReactJs", "Frontend"]
        },
        {
            year: 2023,
            title: "OneStop Room Booking System",
            ref_link: "https://play.google.com/store/apps/details?id=com.iitg.onestop&hl=en_IN&gl=US",
            desc: "An extensive room booking system for the students of IIT Guwahati as a feature in the OneStop App, built using Flutter and NodeJs.",
            tags: ["Backend", "NoSQL DB","NodeJs"]
        },
        {
            year: 2023,
            title: "Students' Web Committee Website",
            ref_link: "https://swc.iitg.ac.in/",
            desc: "An aesthetically pleasing website that effectively communicates SWC’s mission and showcases its notable accomplishments. Uses NextJs to craft this visually stunning and responsive website, incorporating interactive features to elevate the overall user experience.",
            tags: ["Frontend", "NextJs"]
        },
        {
            year: 2023,
            title: "Placement-Statistics Portal",
            ref_link: "https://swc.iitg.ac.in/placement-stats/",
            desc: "A comprehensive platform, made using HTML/CSS, JavaScript and Django, enabling students to access placement statistics of their senior peers, presented through attractive charts and informative tables.",
            tags: ["HTML/CSS/Js", "Frontend"]
        },
        {
            year: 2022,
            title: "Custom Chatbot",
            ref_link: "/chat",
            desc: "A customized chatbot made using Python and NLTK library that tells the user about Ipsita Jain. Click on the chat icon to interact with the chatbot!",
            tags: ["NLP", "Python"]
        },
        {
            year: 2022,
            title: "Basic CRUD Application",
            ref_link: "https://github.com/Sofiyana-1811/CRUD-App",
            desc: "Basic ReactJs App performing all CRUD functions using a JSON server.",
            tags: ["ReactJs"]
        },
        {
            year: 2021,
            title: "Blood Bank Management System",  
            ref_link: "https://github.com/Sofiyana-1811/ABBB-Project",
            desc: "A management system for a blood bank, made using Python and MySQL. Used for storing and retrieving information about blood donors and recipients. Uses python tkinter library for the GUI and MySQL as the database.",
            tags: ["Python", "MySQL"]
        }
    ]


    return (
        <section id="projects" className="mx-10">
            <div style={dirtyline.style} className="text-[5.125rem]">
                projects
            </div>
            <div className="flex flex-row justify-between items-end">
                <div className=" w-3/5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nobis temporibus neque veritatis impedit voluptates fugiat tempore provident corporis vel et consequuntur modi, sapiente rerum numquam aspernatur iusto. Veritatis, vitae!
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
            <div className="flex flex-col my-10 gap-6">
                <div className="flex flex-row justify-between">
                    <a href="https://drive.google.com/file/d/1sec0B5ivptTLX1oUY5w6WBbA4M_GyxTY/view?usp=drive_link" target ="_blank" className="bg-test bg-cover flex flex-col justify-between relative w-[54%] bg-[#D9D9D9] h-80 rounded-2xl p-6">
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
                    <div className="bg-test bg-cover flex flex-col justify-between relative w-[44%] bg-[#D9D9D9] h-80 rounded-2xl p-6">
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
                    </div>
                </div>
                <div className="flex flex-row-reverse justify-between">
                    <div className="bg-test bg-cover flex flex-col justify-between relative w-[55%] bg-[#D9D9D9] h-80 rounded-2xl p-6">
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
                    </div>
                    <div className="bg-test bg-cover flex flex-col justify-between relative w-[43%] bg-[#D9D9D9] h-80 rounded-2xl p-6">
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
                    </div>
                </div>
            </div>
        </section>
    );
}
