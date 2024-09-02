import React from 'react'
import Topbar from './Topbar'
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { PiUserCircleFill } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Header = ({onChangeHandle}) => {
    return (
        <>
            <header className='w-full'>
                <Topbar></Topbar>
                <nav className='bg-lightgraytheme px-24 border-black border-b-[0.5px]'>
                    <div className='flex justify-between items-center py-3'>
                        {/* Navbar Logo */}
                        <div className='basis-2/5'>
                            <a className='text-4xl font-bold tracking-wider'>ELECTROMART</a>
                        </div>
                        {/* Navbar Search Bar */}
                        <div className='basis-2/5'>
                            <form className='w-full'>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-primarytext text-bold">
                                        <IoSearch />
                                    </div>
                                    <input type="text" onChange={onChangeHandle} id="default-search" className="block w-full py-3 ps-10 text-sm rounded-full bg-graytheme text-primarytext placeholder:text-primarytext placeholder:font-semibold focus:outline-none" placeholder="Search for products / brands / categories"/>
                                </div>
                            </form>
                        </div>
                        {/* Navbar Other Option */}
                        <div className='basis-1/5'>
                            <div className='flex items-center justify-end gap-4'>
                                <div>
                                    <a className='text-3xl'><PiUserCircleFill /></a>
                                </div>
                                <div className='flex relative'>
                                    <a className='text-3xl'><IoCartOutline/></a>
                                    <div className='absolute -top-1 -right-2 flex items-center justify-center w-[20px] h-[20px] bg-secondarycolor text-white text-center rounded-full text-xs'>10</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='bg-lightgraytheme px-24 border-black border-b-[0.5px]'>
                    <div className='flex w-full gap-8 justify-start items-center py-2'>
                        <div className="flex py-1 group items-center gap-1 font-medium relative hover-effect">
                            <span className='uppercase'>Products</span>
                            <span className='text-xl group-hover:rotate-180 transition-all duration-300'><MdOutlineKeyboardArrowDown /></span>
                            {/* <div class="after-element absolute bottom-0 left-0 h-[2px] bg-black w-0 group-hover:w-full transition-width duration-300"></div> */}
                        </div>
                        <div className='flex py-1 group items-center gap-1 font-medium relative hover-effect'>
                            <span className='uppercase'>Brands</span>
                            <span className='text-xl group-hover:rotate-180 transition-all duration-300'><MdOutlineKeyboardArrowDown /></span>
                        </div>
                        <div className='flex py-1 group items-center gap-1 font-medium relative hover-effect'>
                            <span className='uppercase'>Services</span>
                            <span className='text-xl group-hover:rotate-180 transition-all duration-300'><MdOutlineKeyboardArrowDown /></span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;