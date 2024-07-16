import video1 from "./Assets/video1.mp4";
import { FaFilter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbApps } from "react-icons/tb";
import { useEffect } from "react";

import Aos from 'aos';
import 'aos/dist/aos.css'


export default function FirstPage(){

  useEffect(()=>
  
  {
Aos.init({duration:2000})

  },[])
    return(<>
    
    
    
    
 
        <div className="relative md:items-center justify-center md:text-3xl  flex gap-4 w-screen h-screen ">
          <video
            className="absolute h-full w-full  object-fill"
            src={video1}
            muted
            autoPlay
            loop
            type="video/mp4"
          ></video>
          <div className="absolute flex  gap-10 flex-col m-10  ">
            <div className="py-6">
          <p data-aos="fade-up" className= "text-center  top-12 font-semibold  text-1xl text-black 	">OUR PACKAGES</p>
          <h2 data-aos="fade-up" className="text-center top-16 font-bold text-5xl text-black	">Search your holidays</h2></div>
          <div data-aos="fade-up" className="gap-4 flex flex-col">
            <form  className="flex  gap-2 font-semibold justify-start flex-col bg" action="">
                <label >Search Your destination </label>
                <input className="rounded-3xl p-2" placeholder="enter name here"/>
                 <label>Select your date</label>
                 <input className="rounded-3xl p-2" type="date" placeholder="enter name here"/>
                
                 <h3>Max Price:5000</h3>
                 <input type="range" max="5000" min="1000"/>


            </form>
            <div  className="flex py-2 px-0 m-0 gap-2 font-semibold  bg-black text-white rounded-full items-center justify-center">

            <FaFilter className="" /> More Filters

            </div>
          </div>

          <div  className="flex justify-between p-0 m-0 items-center text-2xl">
            <div  className="flex gap-4 p-0 m-0 ">
            <FaFacebook data-aos="fade-up" className="hover:text-cyan-950" />
            <FaInstagramSquare data-aos="fade-up" className="hover:text-cyan-950"  />
            <FaTripadvisor data-aos="fade-up" className="hover:text-cyan-950"  />


            

            </div>

            <div className="flex gap-4 p-0 m-0">
            <GiHamburgerMenu data-aos="fade-up" className="hover:text-cyan-950"  />
            <TbApps data-aos="fade-up" className="hover:text-cyan-950"  />


                
            </div>

          </div>


          </div>
        </div>
     

      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>)
}