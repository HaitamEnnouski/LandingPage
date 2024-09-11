const Pricing = () => (
    <div className="bg-[#2F1C48] w-full h-[722px] flex justify-center items-center font-poppins">
        <div className="w-[969px] h-[522px] flex flex-col space-y-[40px]">
            <span className="text-center">
                <h1 className="text-white text-[32px] font-semibold">Pricing Plans</h1>
                <p className="text-white text-[20px]">The Best Solution for Our Clients</p>
            </span>
            {/* CARDS */}
            <div className="flex justify-center items-center w-[969px] h-[377px] space-x-[20px]">
                {/* CARD 1 */}
                <div className="bg-[#FBEBD7] w-[309px] h-[380px] rounded-[30px] py-[45px] px-[18px] flex flex-col justify-between">
                    <div className="text-center">
                        <p className="text-[24px] font-semibold">Starter Plan</p>
                        <h1 className="text-[#FF9900] text-[40px] font-semibold">$500</h1>
                    </div>
                    <div className="text-center text-[16px]">
                        <ul className="list-disc text-left pl-[20px]">
                            <li>Responsive website design and development (5 pages)</li>
                            <li>Basic SEO</li>
                            <li>Social media management</li>
                        </ul>
                    </div>
                    <button className="w-[120px] h-[48px] bg-[#FF9900] rounded-[20px] py-[12px] px-[20px] font-semibold mx-auto">Book Now</button>
                </div>
                {/* CARD 2 */}
                <div className="bg-[#FBEBD7] w-[309px] h-[380px] rounded-[30px] py-[45px] px-[18px] flex flex-col justify-between">
                    <div className="text-center">
                        <p className="text-[24px] font-semibold">Business Plan</p>
                        <h1 className="text-[#FF9900] text-[40px] font-semibold">$1000</h1>
                    </div>
                    <div className="text-center text-[16px]">
                        <ul className="list-disc text-left pl-[20px]">
                            <li>Responsive website design and development (10 pages)</li>
                            <li>Advanced SEO</li>
                            <li>Social media management</li>
                            <li>PPC advertising campaign</li>
                        </ul>
                    </div>
                    <button className="w-[120px] h-[48px] bg-[#FF9900] rounded-[20px] py-[12px] px-[20px] font-semibold mx-auto">Book Now</button>
                </div>
                {/* CARD 3 */}
                <div className="bg-[#FBEBD7] w-[309px] h-[380px] rounded-[30px] py-[45px] px-[18px] flex flex-col justify-between">
                    <div className="text-center">
                        <p className="text-[24px] font-semibold">Premium Plan</p>
                        <h1 className="text-[#FF9900] text-[40px] font-semibold">$2000</h1>
                    </div>
                    <div className="text-center text-[16px]">
                        <ul className="list-disc text-left pl-[20px]">
                            <li>Advanced Business plan</li>
                            <li>Regular content creation</li>
                            <li>Performance analysis and monthly reporting</li>
                        </ul>
                    </div>
                    <button className="w-[120px] h-[48px] bg-[#FF9900] rounded-[20px] py-[12px] px-[20px] font-semibold mx-auto">Book Now</button>
                </div>
            </div>
        </div>
    </div>
);

export default Pricing;
