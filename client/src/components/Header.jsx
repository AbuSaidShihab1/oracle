import React, { useState } from 'react'
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../assets/logo.png"
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { GoArrowUpRight } from 'react-icons/go';
import { FaHome, FaStream, FaUsers,FaComments,FaPhone, FaSignInAlt,FaDrumstickBite, FaGamepad, FaCogs, FaAward } from "react-icons/fa";
import { GiCricketBat, GiCardAceHearts, GiGameConsole, GiModernCity } from "react-icons/gi";
import { RiDashboardFill, RiChatSmile2Fill } from "react-icons/ri";

import { RiSendPlaneFill } from "react-icons/ri";
const Header = () => {
      const [active_header,set_header]=useState(false);
    //   const [sidebar,set_sidebar]=useState(false)
        const [sidebar, setSidebar] = useState(false);
      window.addEventListener("scroll",()=>{
        if(window.scrollY > 0){
             set_header(true)
        }else{
             set_header(false)
        }
      });
       const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };
   const admin_info=JSON.parse(localStorage.getItem("admin_data"));
 const [openDropdown, setOpenDropdown] = useState(null); // Track the open dropdown (null means none open)

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu); // Toggle open/close
    };

  return (
    <section className='font-poppins h-[11vh] lg:h-[18vh]'>
        <NavLink to="https://wa.me/+447723840957"target="_blank">
    <span className="group px-[20px] lg:px-[25px] py-[12px] lg:py-[14px] rounded-full bg-[#ff3f34] fixed bottom-[2%] right-[2%] z-[100] text-white cursor-pointer flex justify-center items-center gap-[10px] text-[14px] lg:text-[16px] transition-transform transform hover:scale-110 hover:shadow-lg">
      <FaWhatsapp className="text-[25px] lg:text-[30px] group-hover:animate-pulse" />
      <span className="group-hover:animate-bounce">LiveChat</span>
    </span>
        </NavLink>

        {/* ----------------------subheader--------------------- */}
        <div className='hidden w-full h-auto bg-gray-600 px-[100px] py-[15px] lg:flex justify-between items-center'>
               <div className='flex justify-center items-center gap-[20px]'>
            <div className='flex justify-center items-center gap-[5px] text-white'>
                <IoIosCall className='text-[18px]'/>
                <p className='text-[16px]'>+33756757364 (Whats App)</p>
            </div>
                 <div className='flex justify-center items-center gap-[5px] text-white'>
                <HiOutlineMail className='text-[18px]'/>
                <p className='text-[16px]'>support@oraclesoft.org</p>
            </div>
        </div>
        {/* ----------------location--------------- */}
        <div className='flex justify-center items-center gap-[5px] text-white'>
                    <IoLocationSharp className='text-[18px]'/>
                <p className='text-[16px]'>SkyCasino Level 1 Genting Highlands, Malaysia</p>
        </div>
        </div>
        {/* -----------------header--------------------- */}
   <header className={active_header ? 'px-[20px]  bg-black md:px-[30px] lg:px-[50px] xl:px-[100px] shadow-sm py-[20px] flex justify-between items-center fixed top-0 left-0 z-[10] w-full transition-all duration-200' : 'px-[20px] md:px-[30px] lg:px-[50px] bg-black xl:px-[100px] py-[20px] h-[11vh] flex justify-between items-center'}>
    <NavLink to="/">
        <img className='w-[130px] lg:w-[150px] cursor-pointer' src={logo} alt="" />
    </NavLink>
    <nav className='xl:block hidden'>
     <ul className='main_header flex font-poppins justify-center items-center gap-[20px]'>
        <li>
            <NavLink to="/" className="text-[17px] font-poppins px-[10px] text-white hover:text-theme_color transition-all duration-300 py-[5px] relative cursor-pointer group">
              Home
            </NavLink>
        </li>
            <li className="text-[17px] font-poppins px-[10px] text-white hover:text-theme_color transition-all duration-300 py-[5px] relative cursor-pointer group"
                onMouseEnter={() => setOpenDropdown('about')} onMouseLeave={() => setOpenDropdown(null)}
            >
                <div
                    className="flex items-center"
                    onClick={() => toggleDropdown('about')}
                >
                    About Us 
                    {openDropdown === 'about' ? (
                        <IoIosArrowUp className="ml-2 text-white transition-all duration-300" />
                    ) : (
                        <IoIosArrowDown className="ml-2 text-white transition-all duration-300" />
                    )}
                </div>
                {openDropdown === 'about' && (
                    <ul className="absolute bg-white z-[100] border-[1px] border-[#eee] rounded-[8px] py-2 mt-2 w-[220px] shadow-lg transform transition-all duration-300 ease-in-out scale-95 group-hover:scale-100">
                         <li className="px-4 py-2 text-black hover:text-indigo-300 transition-all duration-200">
                            <span> Our Achievement
                        </span>
                        </li>
                         <li className="px-4 py-2 text-black hover:text-indigo-300 transition-all duration-200">
                            <NavLink to="/api-provider">Api provider</NavLink>
                        </li>
                      
                       
                        <li className="px-4 py-2 text-black hover:text-indigo-300 transition-all duration-200">
                            <NavLink to="/our-customer">Our Customer</NavLink>
                        </li>
                         <li className="px-4 py-2 text-black hover:text-indigo-300 transition-all duration-200">
                            <span>Who Are You</span>
                        </li>
                    </ul>
                )}
            </li>

            <li className="text-[17px] px-[10px] text-white hover:text-theme_color transition-all duration-300 py-[5px] relative cursor-pointer group"
                onMouseEnter={() => setOpenDropdown('reviews')} onMouseLeave={() => setOpenDropdown(null)}
            >
                <div
                    className="hover:text-theme_color text-white flex items-center"
                    onClick={() => toggleDropdown('reviews')}
                >
                    Reviews 
                    {openDropdown === 'reviews' ? (
                        <IoIosArrowUp className="ml-2 text-white transition-all duration-300" />
                    ) : (
                        <IoIosArrowDown className="ml-2 text-white transition-all duration-300" />
                    )}
                </div>
                {openDropdown === 'reviews' && (
                    <ul className="absolute bg-white z-[100] border-[1px] border-[#eee] rounded-[8px] py-2 mt-2 w-[220px] shadow-lg transform transition-all duration-300 ease-in-out scale-95 group-hover:scale-100">
                        <li className="px-4 py-2 text-black hover:text-indigo-300 transition-all duration-200">
                            <NavLink to="/feedback">Feedback</NavLink>
                        </li>
                        <li className="px-4 py-2 text-black hover:text-indigo-300 transition-all duration-200">
                            <NavLink to="/video-reviews">Video Reviews</NavLink>
                        </li>
                        <li className="px-4 py-2 text-black hover:text-indigo-300 transition-all duration-200">
                            <NavLink to="/all-payment">All Payment</NavLink>
                        </li>
                    </ul>
                )}
            </li>

            <li className="text-[17px] px-[10px] text-white hover:text-theme_color transition-all duration-300 py-[5px] relative cursor-pointer">
                <NavLink to="/contact">Contact</NavLink>
            </li>
            {
                admin_info? "":   <li className="text-[17px] px-[10px] text-white hover:text-theme_color transition-all duration-300 py-[5px] relative cursor-pointer">
                <NavLink to="/login">Log In</NavLink>
            </li>
            }
         
            <li className='ml-[30px]'>
                {
                    admin_info ? <NavLink to="/dashboard">
                    <button className='px-[30px] py-[14px] border-[2px] border-[#FFC727] hover:bg-transparent hover:text-[#FFC727] transition-all duration-100 bg-[#FFC727] text-white cursor-pointer rounded-full font-[500] text-[15px] flex justify-center items-center gap-[5px]'>
                        Dashboard <GoArrowUpRight className='text-[22px] font-bold' />
                    </button>
                </NavLink>:<NavLink to="https://tawk.to/chat/6782d72b49e2fd8dfe062cfa/1ihbhh195" target='_blank'>
                    <button className='px-[30px] py-[14px] border-[2px] border-btncolor1 hover:bg-transparent hover:text-btncolor1 transition-all duration-100 bg-btncolor1 text-white cursor-pointer rounded-full font-[500] text-[15px] flex justify-center items-center gap-[5px]'>
                      LiveChat <RiSendPlaneFill className='text-[22px] font-bold' />
                    </button>
                </NavLink>
                }
               
            </li>
        </ul>

    </nav>
    <div className="menu text-[30px] text-white cursor-pointer xl:hidden"onClick={()=>{setIsSidebarOpen(true)}}>
        <HiMenuAlt3/>
    </div>
    {/* --------------mobile version-------------- */}
   <nav
      className={`fixed top-0 ${
        isSidebarOpen ? "left-0" : "-left-[100%]"
      } w-[70%] md:w-[30%] h-[100vh] pt-[30px] bg-[#0b1421] text-white z-[1000] shadow-md transition-all duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center py-[20px] justify-center bg-[#0b1421] border-b-[1px] border-gray-700">
        <img
          src="http://localhost:5173/src/assets/logo.png"
          alt="Logo"
          className="w-[120px] h-auto"
        />
      </div>

      {/* Close Button */}
      <div className="close absolute top-[20px] right-[20px]" onClick={handleSidebarToggle}>
        <IoClose className="text-[30px] cursor-pointer hover:rotate-[360deg] transition-all duration-150 hover:text-red-500" />
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col font-poppins mt-[10px]">
        {/* Home */}
        <li className="flex items-center gap-4 px-6 py-3 border-b-[1px] border-gray-700 hover:bg-gray-800 transition-all duration-200 cursor-pointer">
          <FaHome />
          <NavLink to="/">Home</NavLink>
        </li>

        {/* About Us Dropdown */}
        <li
          className="flex flex-col gap-4 px-6 py-3 border-b-[1px] border-gray-700 hover:bg-gray-800 transition-all duration-200 cursor-pointer relative"
          onClick={() => handleDropdownToggle("about")}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FaUsers />
              <span>About Us</span>
            </div>
            {activeDropdown === "about" ? (
              <IoIosArrowUp className="text-[18px]" />
            ) : (
              <IoIosArrowDown className="text-[18px]" />
            )}
          </div>
          {activeDropdown === "about" && (
            <ul className=" mt-2 rounded-[5px] p-2 space-y-2">
              <li className="px-4 py-2 hover:bg-gray-800 rounded-md">
                <span>Our Achievement</span>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 rounded-md">
                <NavLink to="/api-provider">Api Provider</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 rounded-md">
                <NavLink to="/our-customer">Our Customer</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 rounded-md">
                <span>Who Are You</span>
              </li>
            </ul>
          )}
        </li>

        {/* Reviews Dropdown */}
        <li
          className="flex flex-col gap-4 px-6 py-3 border-b-[1px] border-gray-700 hover:bg-gray-800 transition-all duration-200 cursor-pointer relative"
          onClick={() => handleDropdownToggle("reviews")}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FaComments />
              <span>Reviews</span>
            </div>
            {activeDropdown === "reviews" ? (
              <IoIosArrowUp className="text-[18px]" />
            ) : (
              <IoIosArrowDown className="text-[18px]" />
            )}
          </div>
          {activeDropdown === "reviews" && (
            <ul className=" mt-2 rounded-[5px] p-2 space-y-2">
              <li className="px-4 py-2 hover:bg-gray-800 rounded-md">
                <NavLink to="/feedback">Feedback</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 rounded-md">
                <NavLink to="/video-reviews">Video Reviews</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 rounded-md">
                <NavLink to="/all-payment">All Payment</NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Contact */}
        <li className="flex items-center gap-4 px-6 py-3 border-b-[1px] border-gray-700 hover:bg-gray-800 transition-all duration-200 cursor-pointer">
          <FaPhone />
          <NavLink to="/contact">Contact</NavLink>
        </li>

        {/* Log In */}
        <li className="flex items-center gap-4 px-6 py-3 border-b-[1px] border-gray-700 hover:bg-gray-800 transition-all duration-200 cursor-pointer">
          <FaSignInAlt />
          <NavLink to="/login">Log In</NavLink>
        </li>

        {/* Live Chat */}
        <li className=" px-6 py-3 w-full">
          <NavLink to="https://tawk.to/chat/6782d72b49e2fd8dfe062cfa/1ihbhh195" target="_blank">
            <button className="px-[30px] w-full py-[14px] border-[2px] border-btncolor1 hover:bg-transparent hover:text-btncolor1 transition-all duration-100 bg-btncolor1 text-white cursor-pointer rounded-full font-[500] text-[15px] flex justify-center items-center gap-[5px]">
              Live Chat <RiChatSmile2Fill className="text-[22px] font-bold" />
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
</header>
    </section>
  )
}

export default Header