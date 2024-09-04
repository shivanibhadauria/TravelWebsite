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
      <div className="flex md:fixed md:w-full overflow-hidden md:z-10 md:rounded-full  justify-between md:bg-gradient-to-r from-rose-100 to-teal-100  flex-col md:flex-row">

<div className="flex items-center justify-between p-0 m-0">
       <Link to={'/'} className="flex gap-1 md:gap-4 items-center md:text-2xl font-bold cursor-pointer	">
          <MdTravelExplore className=" hover:text-red-800 h-10 w-10 md:h-14 md:w-20" />
          <p className="hover:text-red-800"> Wanders</p>
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
          <Link to={"/aboutUs"} className="max-md:border-b-2 md:border-r-2 font-semibold h-full p-2" href="">
            About Us
          </Link>
          <Link to={"./service"} className=" max-md:border-b-2 md:border-r-2 font-semibold h-full p-2" href="">
            Service
          </Link>
          <Link  to={'/contactUs'} className="max-md:border-b-2 font-semibold  h-full p-2" href="">
            contact Us
          </Link>
          <button>
            <FaSearch className=" hidden md:block h-8 w-8 " />
          </button>
        </div>




        }




        <div className=" hidden gap-4 font-bold hover:scale-110 md:flex flex-col md:flex-row border-4 md:rounded-full items-center justify-center pt-0 shadow-2xl ">
          <Link to={"/aboutUs"} className="max-md:border-b-2 hover:text-red-800 md:border-r-2 font-semibold h-8 p-2" href="">
          About Us
          </Link>
          <Link  to={"./service"} className=" hover:text-red-800 max-md:border-b-2 md:border-r-2 font-semibold h-8 p-2" href="">
          Service
          </Link>
          <Link to={'/contactUs'} className="max-md:border-b-2 hover:text-red-800 font-semibold  h-8 p-2" href="">
          contact
          </Link>
          <button>
            <FaSearch className=" hidden hover:text-red-800 md:block h-16 w-8 " />
          </button>
        </div>

        <Link to={'/login'} className=" hidden md:flex border-4 rounded-full items-center justify-center p-4 m-4  ">
          <button className="mr-2">
            <GiHamburgerMenu className="h-4 w-4 hover:text-red-800" />
          </button>
          <button >
            <FaUserCircle className="h-4 w-4 hover:text-red-800" />
          </button>
        </Link>
      </div>
    </>
  );
}
