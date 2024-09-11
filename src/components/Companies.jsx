import {Spotify,Dropbox,Ripple,Airbnb,MisterAladin,Walmart } from "../assets"


const Companies = () =>  (
    <section className="bg-companies w-full h-auto p-[31px]">
        <div className="flex flex-col md:h-[220px] py-[30px] space-y-[50px]">
            <div className="flex flex-wrap justify-center items-center gap-10">
                <img src={Ripple} alt="Ripple" className="w-auto md:h-auto h-[40px]"/>
                <img src={Spotify} alt="Spotify" className="w-auto md:h-auto h-[40px]"/>
                <img src={Dropbox} alt="Dropbox" className="w-auto md:h-auto h-[40px]"/>
                <img src={MisterAladin} alt="MisterAladin" className="w-auto md:h-auto h-[70px]"/>
                <img src={Airbnb} alt="Airbnb" className="w-auto md:h-auto h-[40px]"/>
                <img src={Walmart} alt="Walmart" className="w-auto md:h-auto h-[40px]"/>
            </div>
            <p className="flex justify-center items-center text-center font-poppins text-[1.3em] font-medium text-purple-950">Trusted by 20,000+ companies </p>
        </div>
    </section>
)


export default Companies
