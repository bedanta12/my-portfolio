import Image from 'next/image';
import ProjectCard from './ProjectCard';
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
        <section id="projects">
            <div className="flex flex-col justify-center items-center h-fit w-full overflowx-hidden -z-20 my-14">
                <div className="flex flex-row justify-between items-end w-full pl-28 pr-14 mb-2">
                    <div className="flex flex-row justify-between items-center">
                        <svg width="24" height="25" viewBox="0 0 24 25" className="stroke-[#2B0B7D] dark:stroke-white fill-transparent">
                            <line x1="4" y1="8.66748" x2="20" y2="8.66748" />
                            <line x1="4" y1="14.6675" x2="20" y2="14.6675" />
                        </svg>
                        <span className="text-black dark:text-white text-lg">
                            Selected Works
                        </span>
                    </div>
                    <div>
                        <svg width="84" height="73" viewBox="0 0 84 73" className='fill-[#2B0C7D] dark:fill-white'>
                            <path d="M16.2214 30.5791C14.5882 33.6982 0.733916 39.7522 0.922812 49.1453C1.10724 58.3164 16.2214 66.9689 16.2214 66.9689L29.1436 71.2763L41.8429 72.1675L53.6511 71.2763C53.6511 71.2763 62.3653 69.7316 67.1673 66.9689C75.021 62.4506 82.9116 55.3836 82.0204 49.1453C81.1292 42.907 68.4362 34.6414 67.1673 30.5791C65.6827 25.8258 66.1283 17.9537 58.2562 2.5064C57.0447 0.129083 53.8646 0.745008 52.612 3.10095C46.3737 14.8344 50.2355 26.5684 48.1554 28.4996C47.6759 28.9449 44.3081 28.4996 41.8429 28.4996C39.3777 28.4996 36.1252 28.2022 36.1252 27.6082C36.1252 25.5288 36.4222 4.28886 34.0457 3.10095C32.0223 2.08949 31.8178 1.4668 28.1039 3.39802C24.3899 5.32924 17.8546 27.4599 16.2214 30.5791Z" fill="black" stroke="black"/>
                            <path d="M34.7885 58.0795C33.0061 62.0671 23.5163 62.5956 16.9651 58.0795C11.943 56.4228 4.19106 49.8877 11.7662 41.57C14.6528 37.3826 23.7973 36.1838 29.8872 40.3816C36.4384 44.8977 37.7591 58.0795 34.7885 58.0795Z" fill="#D9D9D9"/>
                            <path d="M45.8389 57.0426C47.6213 61.0301 57.1111 61.5586 63.6623 57.0425C68.6844 55.3858 76.4363 48.8507 68.8612 40.533C65.9746 36.3456 56.8301 35.1468 50.7402 39.3446C44.189 43.8607 42.8683 57.0426 45.8389 57.0426Z" fill="#D9D9D9"/>
                            <ellipse cx="36.4221" cy="61.7702" rx="2.9706" ry="1.4853" fill="#D9D9D9"/>
                            <rect x="24.2422" y="42.1638" width="6.53533" height="16.0413" rx="3.26766" fill="black"/>
                            <rect x="58.7018" y="39.1936" width="6.53533" height="16.0413" rx="3.26766" fill="black"/>
                            <path d="M72.8257 25.6902L71.0186 24.8334L70.1785 26.6052L71.9333 27.4801L72.8257 25.6902ZM79.7642 11.0567L80.6566 9.26678L78.831 8.35658L77.957 10.1998L79.7642 11.0567ZM82.3702 12.356L84.1421 13.2836L85.0882 11.4763L83.2626 10.5661L82.3702 12.356ZM74.859 26.704L73.9666 28.4938L75.7215 29.3688L76.6309 27.6316L74.859 26.704ZM70.0982 30.8738L68.1832 31.4507L68.2007 31.5087L68.2217 31.5656L70.0982 30.8738ZM73.6031 29.725L71.6881 30.3019L71.7056 30.3599L71.7265 30.4168L73.6031 29.725ZM72.4465 32.0447L71.8119 30.148L71.8119 30.148L72.4465 32.0447ZM74.6329 26.5471L81.5713 11.9135L77.957 10.1998L71.0186 24.8334L74.6329 26.5471ZM78.8718 12.8465L81.4778 14.1459L83.2626 10.5661L80.6566 9.26678L78.8718 12.8465ZM80.5983 11.4284L73.0871 25.7764L76.6309 27.6316L84.1421 13.2836L80.5983 11.4284ZM75.7514 24.9141L73.7181 23.9003L71.9333 27.4801L73.9666 28.4938L75.7514 24.9141ZM71.965 30.1419C71.9412 30.13 71.9306 30.1224 71.9291 30.1213C71.9279 30.1204 71.9334 30.1243 71.9421 30.1339C71.951 30.1435 71.9595 30.1548 71.9663 30.166C71.973 30.1771 71.9753 30.1835 71.9748 30.1821L68.2217 31.5656C68.5834 32.5468 69.2824 33.274 70.1802 33.7216L71.965 30.1419ZM72.0132 30.297C72.0113 30.2907 72.0128 30.2937 72.014 30.3047C72.0152 30.316 72.0156 30.3305 72.0141 30.3462C72.0127 30.3618 72.01 30.373 72.0085 30.3783C72.0071 30.3832 72.0079 30.3785 72.0153 30.3636L68.4356 28.5788C67.9869 29.4788 67.8881 30.4711 68.1832 31.4507L72.0132 30.297ZM72.0153 30.3636C72.029 30.3363 72.0235 30.3569 71.9845 30.3916C71.9665 30.4077 71.9467 30.4218 71.9272 30.433C71.9079 30.444 71.8941 30.4492 71.8894 30.4508L70.6202 26.6575C69.6265 26.99 68.8848 27.6779 68.4356 28.5788L72.0153 30.3636ZM71.8894 30.4508C71.8942 30.4492 71.889 30.4514 71.8751 30.4532C71.8609 30.455 71.8435 30.4557 71.8253 30.4543C71.8072 30.4528 71.7946 30.4499 71.7892 30.4483C71.7842 30.4469 71.7903 30.4481 71.8079 30.4569L73.5927 26.8771C72.6618 26.413 71.6315 26.3191 70.6202 26.6575L71.8894 30.4508ZM71.8079 30.4569C71.8217 30.4637 71.7897 30.4496 71.7483 30.4011C71.7292 30.3788 71.7141 30.3559 71.7031 30.3354C71.6923 30.3152 71.6883 30.3027 71.6881 30.3019L75.5181 29.1481C75.2104 28.1267 74.5288 27.3439 73.5927 26.8771L71.8079 30.4569ZM71.7265 30.4168C71.7263 30.416 71.7218 30.4036 71.7183 30.381C71.7148 30.358 71.7131 30.3306 71.7149 30.3013C71.7188 30.2376 71.7358 30.2071 71.7289 30.2208L75.3087 32.0056C75.7754 31.0695 75.8486 30.0341 75.4796 29.0332L71.7265 30.4168ZM71.7289 30.2208C71.7247 30.2294 71.7252 30.2266 71.7326 30.2168C71.7403 30.2067 71.7521 30.1935 71.7678 30.1799C71.7835 30.1662 71.7981 30.1565 71.8089 30.1505C71.8193 30.1447 71.8216 30.1448 71.8119 30.148L73.0812 33.9413C74.0696 33.6106 74.8431 32.9395 75.3087 32.0056L71.7289 30.2208ZM71.8119 30.148C71.8167 30.1464 71.8308 30.1423 71.8529 30.1395C71.8752 30.1367 71.8995 30.136 71.9236 30.138C71.9755 30.1423 71.9923 30.1555 71.965 30.1419L70.1802 33.7216C71.0811 34.1708 72.0875 34.2738 73.0812 33.9413L71.8119 30.148Z"/>
                        </svg>
                    </div>
                    
                </div>
                <div className="flex flex-col gap-2">

                    {projects.map((project, index) => (
                        <ProjectCard key={index} open={index===open} title={project.title} ref_link={project.ref_link} year={project.year} desc={project.desc} tags={project.tags} toggle={() => toggle(index)}
                        />
                    ))}

                </div>
            </div>
        </section>
    );
}
