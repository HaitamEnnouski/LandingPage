import { SearchIcon, HeroBG } from "../assets";

const Hero = () => (
    <div className="flex flex-col justify-center items-center h-[690px] w-full p-10 space-y-9 bg-[#2B2038] font-poppins relative overflow-hidden">
        <img src={HeroBG} alt="" className="sm:block hidden absolute top-0 left-0 object-cover w-screen z-0" />
        <h1 className="text-white text-5xl md:text-7xl font-extrabold text-center z-10">
            Drive Growth with Innovative
        </h1>
        <h1 className="text-purple-400 text-center text-5xl md:text-7xl font-bold z-10">
            Digital Marketing Services
        </h1>
        <p className="text-white text-center text-lg md:text-[1.3em] w-full max-w-4xl z-10">
            Execute SEO, content marketing, competitor research, PPC, and social media marketing in one platform.
        </p>
        <div className="w-full max-w-lg h-[69px] relative z-10">
            <input
                type="text"
                className="w-full h-full rounded-xl px-4 outline-none"
                placeholder="Enter domain, keyword, or URL"
            />
            <img
                src={SearchIcon}
                className="sm:flex hidden justify-center items-center w-[79px] h-[49px] px-[27px] py-[12px] bg-[#AC6CFF] absolute sm:top-[10px]  right-4 rounded-[19px] cursor-pointer"
                alt="Search icon"
            />
        </div>
        <div className="flex justify-center items-center text-center space-x-[30px] text-[16px] text-white font-semibold z-10">
            <button className="bg-[#AC6CFF] w-[190px] h-[74px] rounded-[20px] font-semibold">
                Start Now
            </button>
            <button className="border-[3px] border-[#AC6CFF] w-[190px] h-[74px] rounded-[20px] font-semibold">
                Learn More
            </button>
        </div>
    </div>
);

export default Hero;
