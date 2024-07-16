import { MdTravelExplore } from "react-icons/md";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

  const [openNav, setOpenNav] = useState(false);

  function handleOpenNav(){
    setOpenNav(!openNav);

  }
  return (
    <>
      <div className="flex  justify-between bg-gradient-to-r from-rose-100 to-teal-100 flex-col md:flex-row">

<div className="flex items-center justify-between p-0 m-0">
       <Link to={'/'} className="flex gap-1 md:gap-4 items-center md:text-3xl font-bold cursor-pointer	">
          <MdTravelExplore className=" h-10 w-10 md:h-20 md:w-20" />
          <p> Wanders</p>
        </Link>



        <div className=" md:hidden flex gap-2  items-center justify-center p-1 m-1  ">
        <Link to={'/login'}>
            <FaUserCircle className="h-8 w-8 cursor-pointer	" />
          </Link>

          <button onClick={handleOpenNav} className="mr-2">
            <GiHamburgerMenu className="h-8 w-8 cursor-pointer	" />
          </button>
         
        </div></div>

        {openNav &&  <div className="flex md:hidden  flex-col md:flex-row border-4 md:rounded-full items-center justify-center p-4 m-4 shadow-2xl ">
          <a className="max-md:border-b-2 md:border-r-2 font-semibold h-full p-2" href="">
            Anywhere
          </a>
          <a className=" max-md:border-b-2 md:border-r-2 font-semibold h-full p-2" href="">
            Any week
          </a>
          <a className="max-md:border-b-2 font-semibold  h-full p-2" href="">
            Add Guests
          </a>
          <button>
            <FaSearch className=" hidden md:block h-8 w-8 " />
          </button>
        </div>




        }




        <div className=" hidden md:flex flex-col md:flex-row border-4 md:rounded-full items-center justify-center p-4 m-4 shadow-2xl ">
          <a className="max-md:border-b-2 md:border-r-2 font-semibold h-full p-2" href="">
            Anywhere
          </a>
          <a className=" max-md:border-b-2 md:border-r-2 font-semibold h-full p-2" href="">
            Any week
          </a>
          <a className="max-md:border-b-2 font-semibold  h-full p-2" href="">
            Add Guests
          </a>
          <button>
            <FaSearch className=" hidden md:block h-8 w-8 " />
          </button>
        </div>

        <Link to={'/login'} className=" hidden md:flex border-4 rounded-full items-center justify-center p-4 m-4  ">
          <button className="mr-2">
            <GiHamburgerMenu className="h-8 w-8" />
          </button>
          <button >
            <FaUserCircle className="h-8 w-8" />
          </button>
        </Link>
      </div>
    </>
  );
}
