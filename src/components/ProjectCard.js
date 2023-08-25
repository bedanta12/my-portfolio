import { Collapse } from "react-collapse";

export default function ProjectCard({ num1, year1, title1, image1, tags1, ref_link1, num2, year2, title2, image2, tags2, ref_link2  }) {
    const exp_num1 = "EXP. "+num1;
    const exp_num2 = "EXP. "+num2;
    const isReverse = parseInt(num1)%4===3?true:false;
    
    return (
        <div className={`flex flex-${isReverse?'row-reverse':'row'} justify-between`}>
            <div className={`bg-${image1} bg-cover flex flex-col justify-between relative bg-[#D9D9D9] h-96 rounded-2xl p-6 w-[55%]`}>
                <div className="flex flex-row justify-between items-start">
                    <div className="flex flex-row gap-2 font-bold">
                        <span className="text-[#121212]">{exp_num}</span>
                        <div className="inline-block w-0.5 self-stretch bg-[#FF4900]"></div>
                        <span className="text-[#868686]">{year}</span>
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
                        {title1}
                    </div>
                    <div className="flex flex-row gap-2 justify-start items-center font-medium">
                        {tags1.map((tag, index) => (
                            <div>
                                <div>
                                    {tag}
                                </div>
                            
                                {index<tags1.length-1&&<svg width="4" height="4" viewBox="0 0 4 4">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`bg-${image2} bg-cover flex flex-col justify-between relative bg-[#D9D9D9] h-96 rounded-2xl p-6 w-[43%]=`}>
                <div className="flex flex-row justify-between items-start">
                    <div className="flex flex-row gap-2 font-bold">
                        <span className="text-[#121212]">{exp_num}</span>
                        <div className="inline-block w-0.5 self-stretch bg-[#FF4900]"></div>
                        <span className="text-[#868686]">{year}</span>
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
                        {title2}
                    </div>
                    <div className="flex flex-row gap-2 justify-start items-center font-medium">
                        {tags2.map((tag, index) => (
                            <div>
                                <div>
                                    {tag}
                                </div>
                            
                                {index<tags2.length-1&&<svg width="4" height="4" viewBox="0 0 4 4">
                                    <circle cx="2" cy="2" r="2" fill="#121212"/>
                                </svg>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
