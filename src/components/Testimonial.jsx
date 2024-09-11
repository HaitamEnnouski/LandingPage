import { Person1,Person2,Person3 } from "../assets"
const Testimonial = () => (
    <div className='bg-[#2F1C48] font-poppins h-[810px]  flex justify-center items-center'>
        <div className='h-[509px] flex flex-col justify-center items-center'>
            {/* Title */}
            <span className='flex justify-center items-center gap-3 mb-[70px]'>
                <h1 className='text-white text-4xl font-semibold'>What Our Customers say about Nusa Tech</h1>
                <span className="flex border h-1 w-[200px] border-white bg-white "></span>
            </span>
            {/* Cards */}
            <div className='flex justify-center items-center space-x-[25px] p-[20px]'>
                <span className='flex flex-col bg-companies w-fit h-[357px] p-[30px] space-y-[40px] rounded-bl-[50px] rounded-tr-[50px]'>
                    <span className="flex space-x-[30px]">
                        <img src={Person1}  className="h-[100px] w-[100px] rounded-full"/>
                        <span className='flex flex-col text-[1.1em] space-y-[20px]'>
                            <h1 className="text-2xl font-bold">Michael Lee</h1>
                            <p className="font-medium">Small Business Owner of a Local Cafe</p>
                        </span>
                    </span>
                    <p className="font-[450]">Impressed with Nusa Tech's professionalism and competence. They understand our needs and provide innovative solutions, with outstanding customer service.</p>                
                </span>
                <span className='flex flex-col bg-companies w-fit h-[357px] p-[30px] space-y-[40px] rounded-bl-[50px] rounded-tr-[50px]'>
                    <span className="flex space-x-[30px]">
                        <img src={Person2}  className="h-[100px] w-[100px] rounded-full"/>
                        <span className='flex flex-col text-[1.1em] space-y-[20px]'>
                            <h1 className="text-2xl font-bold">Jessica Taylor</h1>
                            <p className="font-medium">Director of Marketing Startup</p>
                        </span>
                    </span>
                    <p className="font-[450]">Nusa Tech significantly improved our online presence. From website design to PPC campaigns, they deliver outstanding results. Highly recommended!</p>                
                </span>
                <span className='flex flex-col bg-companies w-fit h-[357px] p-[30px] space-y-[40px] rounded-bl-[50px] rounded-tr-[50px]'>
                    <span className="flex space-x-[30px]">
                        <img src={Person3}  className="h-[100px] w-[100px] rounded-full"/>
                        <span className='flex flex-col text-[1.1em] space-y-[20px]'>
                            <h1 className="text-2xl font-bold">David Smith</h1>
                            <p className="font-medium">CEO of Digital Startup</p>
                        </span>
                    </span>
                    <p className="font-[450]">Very satisfied with Nusa Tech's work. They've improved our brand visibility online and provided valuable insights. Thank you!</p>                
                </span>
            </div>
        </div>
    </div>
)

export default Testimonial
