import { usePopup } from '@/components/PopupContext';
import React, { useState, useEffect } from 'react';
import localFont from "next/font/local";
const dirtyline = localFont({src: "../../fonts/dirtyline.ttf"})


export default function ContactPage() {
    const { isPopupOpen, togglePopup } = usePopup();
    const [dateState, setDateState] = useState(new Date());
    const [copied1, setCopied1] = useState(false);
    
    const copyToClipboard1 = () => {
        const email1 = 'bedantarick7771@gmail.com'; // Replace with your email address
        navigator.clipboard.writeText(email1).then(() => {
        setCopied1(true);
        // console.log('copied to clipboard');
        setTimeout(() => setCopied1(false), 2000); // Reset copied state after 2 seconds
        });
    };

    const [copied2, setCopied2] = useState(false);
    
    const copyToClipboard2 = () => {
        const email2 = 'bedanta.mandal@iitg.ac.in'; // Replace with your email address
        navigator.clipboard.writeText(email2).then(() => {
        setCopied2(true);
        // console.log('copied to clipboard');
        setTimeout(() => setCopied2(false), 2000); // Reset copied state after 2 seconds
        });
    };

    useEffect(() => {
           setInterval(() => setDateState(new Date()), 100);
    }, []);

    return (
        <div id="contact-fancy-text" className={`overflow-hidden bg-[#FFF8F8] dark:bg-[#121212] w-full`}>
            <svg viewBox="0 0 1440 11" className='scale-[3]'>
                
                <path d="M1434 11H1426L1432 0H1440L1434 11Z" fill="#FF3F01"/>
                <path d="M1417.98 11H1409.98L1415.98 0H1423.98L1417.98 11Z" fill="#FF3F01"/>
                <path d="M1401.96 11H1393.96L1399.96 0H1407.96L1401.96 11Z" fill="#FF3F01"/>
                <path d="M1385.93 11H1377.93L1383.93 0H1391.93L1385.93 11Z" fill="#FF3F01"/>
                <path d="M1369.91 11H1361.91L1367.91 0H1375.91L1369.91 11Z" fill="#FF3F01"/>
                <path d="M1353.89 11H1345.89L1351.89 0H1359.89L1353.89 11Z" fill="#FF3F01"/>
                <path d="M1337.87 11H1329.87L1335.87 0H1343.87L1337.87 11Z" fill="#FF3F01"/>
                <path d="M1321.84 11H1313.84L1319.84 0H1327.84L1321.84 11Z" fill="#FF3F01"/>
                <path d="M1305.82 11H1297.82L1303.82 0H1311.82L1305.82 11Z" fill="#FF3F01"/>
                <path d="M1289.8 11H1281.8L1287.8 0H1295.8L1289.8 11Z" fill="#FF3F01"/>
                <path d="M1273.78 11H1265.78L1271.78 0H1279.78L1273.78 11Z" fill="#FF3F01"/>
                <path d="M1257.75 11H1249.75L1255.75 0H1263.75L1257.75 11Z" fill="#FF3F01"/>
                <path d="M1241.73 11H1233.73L1239.73 0H1247.73L1241.73 11Z" fill="#FF3F01"/>
                <path d="M1225.71 11H1217.71L1223.71 0H1231.71L1225.71 11Z" fill="#FF3F01"/>
                <path d="M1209.69 11H1201.69L1207.69 0H1215.69L1209.69 11Z" fill="#FF3F01"/>
                <path d="M1193.66 11H1185.66L1191.66 0H1199.66L1193.66 11Z" fill="#FF3F01"/>
                <path d="M1177.64 11H1169.64L1175.64 0H1183.64L1177.64 11Z" fill="#FF3F01"/>
                <path d="M1161.62 11H1153.62L1159.62 0H1167.62L1161.62 11Z" fill="#FF3F01"/>
                <path d="M1145.6 11H1137.6L1143.6 0H1151.6L1145.6 11Z" fill="#FF3F01"/>
                <path d="M1129.57 11H1121.57L1127.57 0H1135.57L1129.57 11Z" fill="#FF3F01"/>
                <path d="M1113.55 11H1105.55L1111.55 0H1119.55L1113.55 11Z" fill="#FF3F01"/>
                <path d="M1097.53 11H1089.53L1095.53 0H1103.53L1097.53 11Z" fill="#FF3F01"/>
                <path d="M1081.51 11H1073.51L1079.51 0H1087.51L1081.51 11Z" fill="#FF3F01"/>
                <path d="M1065.48 11H1057.48L1063.48 0H1071.48L1065.48 11Z" fill="#FF3F01"/>
                <path d="M1049.46 11H1041.46L1047.46 0H1055.46L1049.46 11Z" fill="#FF3F01"/>
                <path d="M1033.44 11H1025.44L1031.44 0H1039.44L1033.44 11Z" fill="#FF3F01"/>
                <path d="M1017.42 11H1009.42L1015.42 0H1023.42L1017.42 11Z" fill="#FF3F01"/>
                <path d="M1001.39 11H993.393L999.393 0H1007.39L1001.39 11Z" fill="#FF3F01"/>
                <path d="M985.371 11H977.371L983.371 0H991.371L985.371 11Z" fill="#FF3F01"/>
                <path d="M969.348 11H961.348L967.348 0H975.348L969.348 11Z" fill="#FF3F01"/>
                <path d="M953.326 11H945.326L951.326 0H959.326L953.326 11Z" fill="#FF3F01"/>
                <path d="M937.303 11H929.303L935.303 0H943.303L937.303 11Z" fill="#FF3F01"/>
                <path d="M921.281 11H913.281L919.281 0H927.281L921.281 11Z" fill="#FF3F01"/>
                <path d="M905.259 11H897.259L903.259 0H911.259L905.259 11Z" fill="#FF3F01"/>
                <path d="M889.236 11H881.236L887.236 0H895.236L889.236 11Z" fill="#FF3F01"/>
                <path d="M873.214 11H865.214L871.214 0H879.214L873.214 11Z" fill="#FF3F01"/>
                <path d="M857.191 11H849.191L855.191 0H863.191L857.191 11Z" fill="#FF3F01"/>
                <path d="M841.169 11H833.169L839.169 0H847.169L841.169 11Z" fill="#FF3F01"/>
                <path d="M825.146 11H817.146L823.146 0H831.146L825.146 11Z" fill="#FF3F01"/>
                <path d="M809.124 11H801.124L807.124 0H815.124L809.124 11Z" fill="#FF3F01"/>
                <path d="M793.101 11H785.101L791.101 0H799.101L793.101 11Z" fill="#FF3F01"/>
                <path d="M777.079 11H769.079L775.079 0H783.079L777.079 11Z" fill="#FF3F01"/>
                <path d="M761.056 11H753.056L759.056 0H767.056L761.056 11Z" fill="#FF3F01"/>
                <path d="M745.034 11H737.034L743.034 0H751.034L745.034 11Z" fill="#FF3F01"/>
                <path d="M729.011 11H721.011L727.011 0H735.011L729.011 11Z" fill="#FF3F01"/>
                <path d="M712.989 11H704.989L710.989 0H718.989L712.989 11Z" fill="#FF3F01"/>
                <path d="M696.967 11H688.967L694.967 0H702.967L696.967 11Z" fill="#FF3F01"/>
                <path d="M680.944 11H672.944L678.944 0H686.944L680.944 11Z" fill="#FF3F01"/>
                <path d="M664.922 11H656.922L662.922 0H670.922L664.922 11Z" fill="#FF3F01"/>
                <path d="M648.899 11H640.899L646.899 0H654.899L648.899 11Z" fill="#FF3F01"/>
                <path d="M632.877 11H624.877L630.877 0H638.877L632.877 11Z" fill="#FF3F01"/>
                <path d="M616.854 11H608.854L614.854 0H622.854L616.854 11Z" fill="#FF3F01"/>
                <path d="M600.832 11H592.832L598.832 0H606.832L600.832 11Z" fill="#FF3F01"/>
                <path d="M584.809 11H576.809L582.809 0H590.809L584.809 11Z" fill="#FF3F01"/>
                <path d="M568.787 11H560.787L566.787 0H574.787L568.787 11Z" fill="#FF3F01"/>
                <path d="M552.764 11H544.764L550.764 0H558.764L552.764 11Z" fill="#FF3F01"/>
                <path d="M536.742 11H528.742L534.742 0H542.742L536.742 11Z" fill="#FF3F01"/>
                <path d="M520.719 11H512.719L518.719 0H526.719L520.719 11Z" fill="#FF3F01"/>
                <path d="M504.697 11H496.697L502.697 0H510.697L504.697 11Z" fill="#FF3F01"/>
                <path d="M488.675 11H480.675L486.675 0H494.675L488.675 11Z" fill="#FF3F01"/>
                <path d="M472.652 11H464.652L470.652 0H478.652L472.652 11Z" fill="#FF3F01"/>
                <path d="M456.63 11H448.63L454.63 0H462.63L456.63 11Z" fill="#FF3F01"/>
                <path d="M440.607 11H432.607L438.607 0H446.607L440.607 11Z" fill="#FF3F01"/>
                <path d="M424.585 11H416.585L422.585 0H430.585L424.585 11Z" fill="#FF3F01"/>
                <path d="M408.562 11H400.562L406.562 0H414.562L408.562 11Z" fill="#FF3F01"/>
                <path d="M392.54 11H384.54L390.54 0H398.54L392.54 11Z" fill="#FF3F01"/>
                <path d="M376.517 11H368.517L374.517 0H382.517L376.517 11Z" fill="#FF3F01"/>
                <path d="M360.495 11H352.495L358.495 0H366.495L360.495 11Z" fill="#FF3F01"/>
                <path d="M344.472 11H336.472L342.472 0H350.472L344.472 11Z" fill="#FF3F01"/>
                <path d="M328.45 11H320.45L326.45 0H334.45L328.45 11Z" fill="#FF3F01"/>
                <path d="M312.427 11H304.427L310.427 0H318.427L312.427 11Z" fill="#FF3F01"/>
                <path d="M296.405 11H288.405L294.405 0H302.405L296.405 11Z" fill="#FF3F01"/>
                <path d="M280.383 11H272.383L278.383 0H286.383L280.383 11Z" fill="#FF3F01"/>
                <path d="M264.36 11H256.36L262.36 0H270.36L264.36 11Z" fill="#FF3F01"/>
                <path d="M248.338 11H240.338L246.338 0H254.338L248.338 11Z" fill="#FF3F01"/>
                <path d="M232.315 11H224.315L230.315 0H238.315L232.315 11Z" fill="#FF3F01"/>
                <path d="M216.293 11H208.293L214.293 0H222.293L216.293 11Z" fill="#FF3F01"/>
                <path d="M200.27 11H192.27L198.27 0H206.27L200.27 11Z" fill="#FF3F01"/>
                <path d="M184.248 11H176.248L182.248 0H190.248L184.248 11Z" fill="#FF3F01"/>
                <path d="M168.225 11H160.225L166.225 0H174.225L168.225 11Z" fill="#FF3F01"/>
                <path d="M152.203 11H144.203L150.203 0H158.203L152.203 11Z" fill="#FF3F01"/>
                <path d="M136.18 11H128.18L134.18 0H142.18L136.18 11Z" fill="#FF3F01"/>
                <path d="M120.158 11H112.158L118.158 0H126.158L120.158 11Z" fill="#FF3F01"/>
                <path d="M104.135 11H96.1355L102.135 0H110.135L104.135 11Z" fill="#FF3F01"/>
                <path d="M88.113 11H80.113L86.113 0H94.113L88.113 11Z" fill="#FF3F01"/>
                <path d="M72.0906 11H64.0906L70.0906 0H78.0906L72.0906 11Z" fill="#FF3F01"/>
                <path d="M56.0681 11H48.0681L54.0681 0H62.0681L56.0681 11Z" fill="#FF3F01"/>
                <path d="M40.0457 11H32.0457L38.0457 0H46.0457L40.0457 11Z" fill="#FF3F01"/>
                <path d="M24.0232 11H16.0232L22.0232 0H30.0232L24.0232 11Z" fill="#FF3F01"/>
                <path d="M8.00073 11H0.000732422L6.00073 0H14.0007L8.00073 11Z" fill="#FF3F01"/>
            </svg>
            <div className="flex flex-col pt-6 pb-6 px-8 gap-4 items-start">
                <svg onClick={togglePopup} width="33" height="33" viewBox="0 0 33 33" className="dark:fill-[#FFF8F8] fill-[#121212] hover:cursor-pointer mx-auto scale-75">
                    <rect x="28.2844" width="6" height="40" transform="rotate(45 28.2844 0)"/>
                    <path d="M16.3157 12.0731H7.83039L-5.60904e-05 4.24267L4.24258 3.08132e-05L16.3157 12.0731Z"/>
                    <rect x="32.5266" y="28.2843" width="6" height="22.8805" transform="rotate(135 32.5266 28.2843)"/>
                </svg>
                <div className="grid grid-rows-5 grid-cols-1 w-full gap-y-2">
                <div className="flex flex-row justify-between items-center text-[14px] text-[#121212] dark:text-[#eaeaea] text-opacity-70 dark:text-opacity-70">
                        <span>Follow</span>
                        <span>Page</span>
                    </div>
                    <div className="flex flex-row justify-between items-center my-0.5">
                        <a href="https://www.linkedin.com/in/bedanta-mandal" target="_blank">
                                LinkedIn
                            </a>
                        <span>Know Me!</span>
                    </div>
                    <div className="flex flex-row items-center my-0.5">
                    <a href='https://www.behance.net/bedantamandal' target="_blank">
                            Behance 
                            </a>
                        
                    </div>
                    <div className="flex flex-row justify-between items-center col-span-1 my-0.5">
                        <span className=' opacity-0'>
                            .
                        </span>
                    </div>
                    <div className="flex flex-row justify-between items-center my-0.5">
                    <a href="https://open.spotify.com/user/yoej0p7xokdteneg1h4xduy0t?si=juhD4IzbQ3-i4WE6jagxAA" target='_blank'>
                            Spotify
                        </a>
                        <a href='https://drive.google.com/file/d/1teguoPNWgoDj3p1hDeEX_PcjqBuPF7NN/view?usp=drive_link' target='_blank'>
                            Resume
                            </a>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-2 mt-10">
                    <span className="flex flex-row justify-between items-center text-[14px] text-[#eaeaea] text-opacity-70">Contact</span>
                    <span>Email Address</span>
                    <div className="flex flex-row items-center gap-16 border rounded-md border-[#121212] dark:border-[#EAEAEA] w-fit p-2">
                            <span>
                            bedanta.mandal@iitg.ac.in
                            </span>
                            <button onClick={copyToClipboard2}>
                                <svg width="24" height="25" viewBox="0 0 24 25" className='fill-[#121212] dark:fill-[#EAEAEA]'>
                                    <mask id="mask0_628_937" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                                    <rect y="0.5" width="24" height="24"/>
                                    </mask>
                                    <g mask="url(#mask0_628_937)">
                                    <path d="M5 22.5C4.45 22.5 3.97917 22.3042 3.5875 21.9125C3.19583 21.5208 3 21.05 3 20.5V6.5H5V20.5H16V22.5H5ZM9 18.5C8.45 18.5 7.97917 18.3042 7.5875 17.9125C7.19583 17.5208 7 17.05 7 16.5V4.5C7 3.95 7.19583 3.47917 7.5875 3.0875C7.97917 2.69583 8.45 2.5 9 2.5H18C18.55 2.5 19.0208 2.69583 19.4125 3.0875C19.8042 3.47917 20 3.95 20 4.5V16.5C20 17.05 19.8042 17.5208 19.4125 17.9125C19.0208 18.3042 18.55 18.5 18 18.5H9ZM9 16.5H18V4.5H9V16.5Z"/>
                                    </g>
                                </svg>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20.207 6.793a1 1 0 0 1 0 1.414l-9.5 9.5a1 1 0 0 1-1.414 0l-4.5-4.5a1 1 0 0 1 1.414-1.414L10 15.586l8.793-8.793a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"/></svg> */}
                            </button>
                        </div>
                        <div className="flex flex-row items-center gap-16 border rounded-md border-[#121212] dark:border-[#EAEAEA] w-fit p-2">
                            <span>
                            bedantarick7771@gmail.com
                            </span>
                            <button onClick={copyToClipboard1}>
                                <svg width="24" height="25" viewBox="0 0 24 25" className='fill-[#121212] dark:fill-[#EAEAEA]'>
                                    <mask id="mask0_628_937" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                                    <rect y="0.5" width="24" height="24"/>
                                    </mask>
                                    <g mask="url(#mask0_628_937)">
                                    <path d="M5 22.5C4.45 22.5 3.97917 22.3042 3.5875 21.9125C3.19583 21.5208 3 21.05 3 20.5V6.5H5V20.5H16V22.5H5ZM9 18.5C8.45 18.5 7.97917 18.3042 7.5875 17.9125C7.19583 17.5208 7 17.05 7 16.5V4.5C7 3.95 7.19583 3.47917 7.5875 3.0875C7.97917 2.69583 8.45 2.5 9 2.5H18C18.55 2.5 19.0208 2.69583 19.4125 3.0875C19.8042 3.47917 20 3.95 20 4.5V16.5C20 17.05 19.8042 17.5208 19.4125 17.9125C19.0208 18.3042 18.55 18.5 18 18.5H9ZM9 16.5H18V4.5H9V16.5Z"/>
                                    </g>
                                </svg>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20.207 6.793a1 1 0 0 1 0 1.414l-9.5 9.5a1 1 0 0 1-1.414 0l-4.5-4.5a1 1 0 0 1 1.414-1.414L10 15.586l8.793-8.793a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"/></svg> */}
                            </button>
                        </div>
                </div>
                <div id="contact-fancy-text" style={dirtyline.style} className="text-[24px] flex flex-col col-span-3 mt-10">
                        <span>
                        Let's connect 
                        </span>
                        <span>
                        and make 
                        </span>
                        <span>
                        something Cool !
                        </span>
                </div>
                <div style={dirtyline.style} className="text-[28px]">
                        @2023
                    </div>
            </div>
        </div>
    );
}
