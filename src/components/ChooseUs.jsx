import { OurService,IdeaSharing,Idea,Goal } from "../assets";

const ChooseUs = () => (
    <div className='bg-companies w-full md:h-[1052px] font-poppins flex flex-col items-center justify-center'>
        <h1 className='text-center text-4xl font-semibold font p-[50px]'> Why Choose Us ?</h1>
        <div className="flex justify-center items-center md:space-x-[20px] h-[698px]">
            <img src={OurService} alt="OurService"  className="md:w-[500px] md:h-[650px] lg:inline-block hidden"/>
            <span className="flex flex-col justify-center items-center space-y-[30px]">
                <div className="bg-[#2B2038] md:w-[637px] w-[410px] md:h-[160px] h-[130px] md:p-0 p-[10px] rounded-[20px] flex justify-center items-center space-x-8">
                    <img src={IdeaSharing} className="bg-[#AC6CFF] md:w-[100px] w-[75px] md:h-[100px] h-[75px] rounded-full md:p-[20px] p-[15px]"/>
                    <p className="text-white md:text-2xl text-[24x] w-[391px] h-[68px] font-semibold">Solutions Tailored Specifically to Your Business Needs</p>
                </div>
                <div className="bg-[#2B2038] md:w-[637px] w-[470px] md:h-[160px] h-[130px] md:p-0 p-[10px] rounded-[20px] flex justify-center items-center space-x-8">
                    <img src={Idea} className="bg-[#AC6CFF] md:w-[100px] w-[75px] md:h-[100px] h-[75px] rounded-full md:p-[20px] p-[15px]"/>
                    <p className="text-white text-2xl w-[391px] h-[68px] font-semibold">Creative Excellence Elevates Every Project</p>
                </div>
                <div className="bg-[#2B2038] md:w-[637px] w-[470px] md:h-[160px] h-[130px] md:p-0 p-[10px] rounded-[20px] flex justify-center items-center space-x-8">
                    <img src={Goal} className="bg-[#AC6CFF] md:w-[100px] w-[75px] md:h-[100px] h-[75px] rounded-full md:p-[20px] p-[15px]"/>
                    <p className="text-white text-2xl w-[391px] h-[68px] font-semibold">Client Satisfaction is Our Main Focus</p>
                </div>
            </span>
        </div>
    </div>
);
export default ChooseUs
