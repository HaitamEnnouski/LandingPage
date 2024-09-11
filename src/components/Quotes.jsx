import { Star, Circle2, Planet } from "../assets";

const Quotes = () => (
    <div className="h-[311px] bg-[#2F1C48] flex flex-col justify-center items-center font-poppins relative z-10 overflow-hidden">
        <img src={Circle2} alt="Circle" className="absolute top-0 left-0 w-auto h-auto"style={{ zIndex: -1 }}/>
        <div className="w-full max-w-[1228px] h-[73px] px-4 md:px-[50px] space-y-[50px] relative z-10 flex flex-col items-center">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <span className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-3">
                    <h1 className="text-white text-[20px] md:text-[40px] font-semibold text-center">
                        “Stand out online and make an impact”
                    </h1>
                    <img src={Star} alt="Star" className="w-[25px] md:w-[34.99px] h-[25px] md:h-[34.99px]"/>
                </span>
                <button className="w-[120px] md:w-[179px] h-[50px] md:h-[74px] bg-[#AC6CFF] text-white text-[14px] md:text-[16px] font-semibold rounded-[20px] px-[20px] md:px-[50px] py-[15px] md:py-[25px] mt-4 md:mt-0">
                    Start Now
                </button>
            </div>
            <p className="text-white text-[16px] md:text-[20px] font-medium text-start w-full">
                David Smith - CEO of a Tech Startup
            </p>
        </div>
        <img
            src={Planet}
            alt="Planet"
            className="absolute bottom-0 right-0 w-auto h-auto"
            style={{ zIndex: -1 }}
        />
    </div>
);

export default Quotes;
