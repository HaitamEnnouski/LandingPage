import { useState } from 'react';
import { Logo } from "../assets";
import { menu, close } from "../assets";

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="w-full flex justify-between items-center lg:h-[75px] h-[50px] bg-zinc-800 font-poppins text-[.8em] lg:px-[30px] px-[10px] text-white font-semibold">
            <span className="flex items-center space-x-[7px]">
                <img src={Logo} className="w-[30px] h-[30px]" alt="Logo" />
                <span className="cursor-pointer">Nusa Tech</span>
            </span>
            <ul className="list-none lg:flex hidden justify-end items-center flex-1 space-x-[50px]">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About us</li>
                <li className="cursor-pointer">Features</li>
                <li className="cursor-pointer">Our Works</li>
                <li className="cursor-pointer">Pricing</li>
                <li className="cursor-pointer">Resources</li>
                <span className="lg:flex hidden justify-center items-center space-x-2">
                    <span className="flex border h-[30px] border-zinc-600"></span>
                    <button className="flex justify-center items-center h-[48px] w-[101px] p-6 text-purple-500 font-bold hover:bg-purple-500 hover:text-white hover:rounded hover:transition-colors">
                        Sign in
                    </button>
                    <button className="flex justify-center items-center h-[48px] w-[101px] p-6 text-purple-500 font-bold hover:bg-purple-500 hover:text-white hover:rounded hover:transition-colors">
                        Sign up
                    </button>
                </span>
            </ul>
            <div className='lg:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(!toggle)}/>
                <div className={`${toggle ? "flex" : "hidden"} p-6 bg-zinc-800 absolute top-20 right-0 mx-4 my-2 min-w-[240px] rounded-xl sidebar z-[100]`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1 space-y-4'>
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About us</li>
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">Our Works</li>
                        <li className="cursor-pointer">Pricing</li>
                        <li className="cursor-pointer">Resources</li>
                        <div className="flex flex-col space-y-2">
                            <button className="flex justify-center items-center h-[48px] w-[101px] p-6 text-purple-500 font-bold hover:bg-purple-500 hover:text-white hover:rounded hover:transition-colors">
                                Sign in
                            </button>
                            <button className="flex justify-center items-center h-[48px] w-[101px] p-6 text-purple-500 font-bold hover:bg-purple-500 hover:text-white hover:rounded hover:transition-colors">
                                Sign up
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
