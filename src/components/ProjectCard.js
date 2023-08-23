import { Collapse } from "react-collapse";

export default function ProjectCard({open, toggle, year, title, ref_link, desc, tags }) {
    
    return (
        <div className="w-[87%] h-fit ml-28 mr-14 rounded-lg border border-[#2B0C7D] dark:border-[#F5F5F5] pr-4 py-4">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center" onClick={toggle}>
                    <span className="text-sm mx-4">
                        {year}
                    </span>
                    <span className="text-lg">
                        {title}
                    </span>
                </div>
                <div className="flex flex-row gap-2">
                    {tags.map((tag, index) => (
                        <div className="bg-inherit font-semibold text-sm px-3 py-2 border rounded-[1.875rem] border-[#2B0C7D] dark:border-[#F5F5F5]">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            
            <Collapse isOpened={open}>
                <div className="flex flex-row items-center py-2">
                    <div className="ml-11 mr-4 inline-block w-[1px] self-stretch bg-[#2B0B7D] dark:bg-white"></div>
                    <div className="w-[60%]">
                        {desc}
                    </div>
                </div>
            </Collapse>
           
        </div>
    );
}
