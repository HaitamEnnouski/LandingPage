import { Experience,Customers,Process,Circle,Star} from "../assets"
const Metrics = () => (
    <div className='bg-[#2B2038] font-poppins text-white h-[454px] flex justify-center items-center py-[20px] relative'>
        <img src={Circle} className="h-[350px] absolute left-0" />
        <img src={Star} className="absolute top-[187px] left-[193px]" />
        <img src={Star} className="absolute top-[364px] right-[193px]" />
        <div className='flex flex-col justify-center items-center w-[953px] h-[304]'>
            <h1 className="w-[334px] h-[42px] mb-[50px] text-3xl font-bold">Work with Nusa Tech</h1>
            <div className='flex items-center justify-center gap-[214px]'>
                <span className="w-[183px] h-[192px] text-center flex flex-col justify-center items-center">
                    <img src={Customers} className="w-[100px] h-[100px] bg-[#AC6CFF] rounded-full p-[14px]"/>
                    <h3 className="w-[123px] h-[42px] text-3xl font-semibold">10,000+</h3>
                    <p className="w-[190px] h-[30px]">Success Processes</p>
                </span>
                <span className="w-[183px] h-[192px] text-center flex flex-col justify-center items-center">
                    <img src={Process} alt="" className="w-[100px] h-[100px] bg-[#AC6CFF] rounded-full p-[14px]"/>
                    <h3 className="w-[123px] h-[42px] text-3xl font-semibold">10,000+</h3>
                    <p className="w-[190px] h-[30px]">Success Processes</p>
                </span>
                <span className="w-[183px] h-[192px] text-center flex flex-col justify-center items-center">
                    <img src={Experience} alt="" className="w-[100px] h-[100px] bg-[#AC6CFF] rounded-full p-[14px]"/>
                    <h3 className="w-[123px] h-[42px] text-3xl font-semibold">10,000+</h3>
                    <p className="w-[190px] h-[30px]">Success Processes</p>
                </span>
            </div>
        </div>
    </div>
)


export default Metrics
