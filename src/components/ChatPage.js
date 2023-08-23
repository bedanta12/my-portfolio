import Link from 'next/link';
import ChatWindow from './ChatWindow';

const ChatPage = () => {
    
    return (
        <div className="absolute bg-sofi_bg_light dark:bg-sofi_bg_dark bg-cover h-full w-full">
            <Link href='/'>
                <button className="ml-24 mt-24 shadow-custom1 pl-1 pr-4 py-1 text-black border-[2px] rounded-[1.25rem] border-[#2B0C7D] font-medium bg-white dark:bg-[#ffffff38] dark:shadow-custom2 dark:border-white flex flex-row items-center">
                <svg className=" scale-50 fill-[#2B0C7D]" width="32" height="32" viewBox="0 0 1024 1024"><path d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"/></svg>
                    <span className="text-sm">
                        Go Back
                    </span>
                </button>
            </Link>
            <div className="absolute bottom-10 w-full">
                <ChatWindow />
            </div>
            
        </div>
        
    )

};
  
export default ChatPage;