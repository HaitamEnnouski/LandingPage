import { LaptopMetrics,EmailOpen,WebMarkting,PaidSearch } from "../assets"

const Service = () => (
    <div className="bg-[#2f1c48] flex flex-col items-center justify-center relative py-[30px]">
        <div className="flex flex-col items-center text-center">
            <span className="font-poppins text-[32px] font-semibold text-[#f8f9ff]">
                Services
            </span>
            <span className="font-poppins text-[20px] font-medium text-[#f8f9ff]">
                Strategic services drive digital success with tailored, comprehensive approaches.
            </span>
        </div>

        <div className="flex flex-wrap w-full justify-center gap-[20px] my-[60px] space-x-[6px]">
            <div className="flex flex-col justify-center items-center size-[250px] bg-[#ab6bff] rounded-[20px]">
                <img src={LaptopMetrics} className="w-[100px] h-[100px] bg-contain bg-no-repeat"/>
                <span className="font-poppins text-[24px] font-semibold text-[#fff] text-center">
                    SEO Marketing
                </span>
            </div>
            <div className="flex flex-col justify-center items-center size-[250px] bg-[#ab6bff] rounded-[20px]">
                <img src={WebMarkting} className="w-[80px] h-[80px] bg-contain bg-no-repeat" />
                <span className="font-poppins text-[24px] font-semibold text-[#fff] text-center">
                    Research Topic Trends
                </span>
            </div>
            <div className="flex flex-col justify-center items-center size-[250px]  bg-[#ab6bff] rounded-[20px]">
                <img src={EmailOpen} className="w-[90px] h-[90px] bg-contain bg-no-repeat" />
                <span className="font-poppins text-[24px] font-semibold text-[#fff] text-center">
                    Email Marketing
                </span>
            </div>
            <div className="flex flex-col justify-center items-center size-[250px]  bg-[#ab6bff] rounded-[20px]">
                <img src={PaidSearch} className="w-[90px] h-[90px] bg-contain bg-no-repeat" />
                <span className="font-poppins text-[24px] font-semibold text-[#fff] text-center">
                    Google PPC
                </span>
            </div>
        </div>
    </div>

);

export default Service
