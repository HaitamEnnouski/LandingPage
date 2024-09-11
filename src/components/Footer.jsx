import {Logo} from "../assets"

const Footer = () => (
    <footer className="footer w-full h-[577px] bg-[#2B2038] flex justify-center items-center font-poppin px-[40px] py-[20px]">
        <div className='w-[1301px] h-[479px] flex flex-col'>
            <div className="h-[90%] flex justify-between space-x-4">
                <div className='w-[50%] h-[263px] space-y-[30px]'>
                    <span className='flex space-x-[7px] items-center'>
                        <img src={Logo} alt="" className="w-[50px] h-[50px]"/>
                        <h1 className='text-[#FFFFFF] font-semibold text-[30px]'>Nusa Tech</h1>
                    </span>
                    <p className="w-[509px] h-[150px] text-white text-[20px] font-medium">
                        Nusa Tech is a leading digital marketing agency dedicated to driving success for businesses online. With expertise in SEO, PPC, social media, content creation, and more, we offer tailored solutions to maximize ROI.
                    </p>
                </div>
                <div className="w-[50%] flex justify-around">
                    <ul className="text-white font-semibold space-y-[20px]">
                        <h1 className="text-[#ab6bff] text-[25px] ">Our services</h1>
                        <li>SEO Marketing</li>
                        <li>Research Topic Trends</li>
                        <li>Email Marketing</li>
                        <li>Google PPC</li>
                    </ul>
                    <ul className="text-white font-semibold space-y-[20px]">
                        <h1 className="text-[#ab6bff] text-[25px] font-semibold">Explore More</h1>
                        <li>About Us</li>
                        <li>Feature</li>
                        <li>Our Works</li>
                        <li>Resource</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <ul className="text-white font-semibold space-y-[20px] list-image-[url('my-project\src\assets\ph_star-four-fill.png')]">
                        <h1 className="text-[#ab6bff] text-[25px] font-semibold">our services</h1>
                        <li>Jl. Medan Merdeka No. 35 Jakarta Selatan</li>
                        <li>(021) 234567</li>
                        <li>+62 812 9188 72</li>
                    </ul>
                </div>
            </div>
            {/* LINE */}
            <span className="w-full h-1 border bg-white"></span>
            <div className="flex justify-between items-center text-white">
                <p>Nusa tech 2024 © All right reserved</p>
                <p>Terms & Condition</p>
            </div>
        </div>
    </footer>
)


export default Footer
