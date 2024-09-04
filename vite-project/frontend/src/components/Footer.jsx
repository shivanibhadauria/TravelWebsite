import video2 from './Assets/video2.mp4'
import { IoIosSend } from "react-icons/io";
import { MdTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandTripadvisor } from "react-icons/tb";
import { useEffect } from "react";

import Aos from 'aos';
import 'aos/dist/aos.css'






export default function Footer(){

    useEffect(()=>
  
        {
      Aos.init({duration:2000})
      
        },[])
  return  (<>
  <div className='relative  flex flex-col items-center gap-2 w-screen h-screen justify-center '>


  <video className=' h-full w-full  object-fill' src={video2} autoPlay loop muted type="video/mp4"></video>
    <div className='absolute md:grid md:grid-cols-2 md:gap-10 flex items-center  flex-col '>

        <div className='flex md:text-2xl flex-col gap-2 m-10'>

          <h3 data-aos="fade-up" className='text-white font-bold'>KEEP IN TOUCH</h3>
          <h1 data-aos="fade-up" className='text-3xl font-bold text-white'>Travel with us</h1>
          <input data-aos="fade-up" className='bg-black opacity-40 text-center rounded-full hover:border-white border-2' type='text' placeholder='Enter Email Adress'/>
          <button className='flex p-2 items-center justify-center gap-1 font-bold bg-blue-950 text-white rounded-full  ' data-aos="fade-up">send <IoIosSend className='text-2xl' />
          </button></div>

          <div className='  flex bg-white md:opacity-50 text-opacity-100 rounded-lg  p-2 gap-2 flex-col '>
            
            <div  className="flex gap-1 md:gap-4 items-center md:text-3xl font-bold cursor-pointer	">
                  <MdTravelExplore data-aos="fade-up" className=" h-10 w-10 md:h-20 md:w-20" />
                  <p data-aos="fade-up"> Wanders</p>
                </div>

               
        

                <div className='flex items-center p-2 text-2xl gap-2'>
            <FaTwitter data-aos="fade-up" />
            <FaYoutube data-aos="fade-up" />
            <AiFillInstagram  data-aos="fade-up" />
            <TbBrandTripadvisor data-aos="fade-up" />



            </div>
            <div className='grid grid-cols-2 gap-4 '>

            < div className=' font-semibold flex flex-col '>
                <div>
                <h1  data-aos="fade-up">Our Agency</h1></div>
                <div className='flex items-center gap-1 hover:translate-x-4'>
                 <div><FaChevronRight data-aos="fade-up" />
                 </div>
                <h3 data-aos="fade-up">Services</h3>
                
                </div>
                <div className='flex items-center gap-1 hover:translate-x-4'>
                 <div><FaChevronRight data-aos="fade-up" />
                 </div>
                <h3 data-aos="fade-up">Insurance</h3>
                
                </div>
                <div className='flex items-center gap-1 hover:translate-x-4'>
                 <div><FaChevronRight data-aos="fade-up" />
                 </div>
                <h3 data-aos="fade-up">Agency</h3>
                
                </div>
                <div className='flex items-center gap-1 hover:translate-x-4'>
                 <div><FaChevronRight data-aos="fade-up" />
                 </div>
                <h3 data-aos="fade-up">Tourism</h3>
                
                </div>
                <div className='flex items-center gap-1 hover:translate-x-4'>
                 <div><FaChevronRight data-aos="fade-up" />
                 </div>
                <h3 data-aos="fade-up">Payment</h3>
                
                </div>
            </div>
            < div className=' font-semibold flex flex-col '>
                <div>
                <h1 data-aos="fade-up" >PARTNERS</h1></div>
                <div className='flex items-center gap-1 hover:translate-x-4'>
                 <div><FaChevronRight data-aos="fade-up" />
                 </div>
                <h3 data-aos="fade-up">Bookings</h3>
                
                </div>
                <div className='flex items-center gap-1 hover:translate-x-4'>
                 <div><FaChevronRight data-aos="fade-up" />
                 </div>
                <h3 data-aos="fade-up">Rentcars</h3>
                
                </div>
                <div className='flex items-center gap-1 hover:translate-x-4'>
                 <div><FaChevronRight data-aos="fade-up" />
                 </div>
                <h3 data-aos="fade-up">Hostelworld</h3>
                
                </div>
                <div className='flex items-center gap-1 hover:translate-x-4'>
                 <div><FaChevronRight data-aos="fade-up" />
                 </div>
                <h3 data-aos="fade-up">Trivago</h3>
                
                </div>
                <div className='flex items-center gap-1 hover:translate-x-4'>
                 <div><FaChevronRight data-aos="fade-up" />
                 </div>
                <h3 data-aos="fade-up">TripAdvisor</h3>
                
                </div>
            </div>
            < div className=' font-semibold flex flex-col '>
                <div>
                <h1 data-aos="fade-up">LAST MINUTS</h1></div>
               
                <div className='flex items-center gap-1 hover:translate-x-4'>
                 <div><FaChevronRight data-aos="fade-up" />
                 </div>
                <h3 data-aos="fade-up">London</h3>
                
                </div>
                <div  className='flex items-center gap-1 hover:translate-x-4'>
                 <div><FaChevronRight data-aos="fade-up" />
                 </div>
                <h3 data-aos="fade-up">California</h3>
                
                </div>
                <div className='flex items-center gap-1 hover:translate-x-4'>
                 <div><FaChevronRight data-aos="fade-up" />
                 </div>
                <h3   >Indonesia</h3>
                
                </div>
                <div className='flex items-center gap-1 hover:translate-x-4'>
                 <div><FaChevronRight data-aos="fade-up" />
                 </div>
                <h3 >Oceania</h3>
                
                </div>
            </div></div>

            
            </div>
           

        

    </div>
    
    
    

   



  </div>
  <div  className='flex items-center justify-center  md:bg-gradient-to-r from-rose-100 to-teal-100 flex-col bg-blue-600 '>
        <small >BEST TRAVEL WEBSITE </small>
        <small>COPYRIGHT RESERVED - BY SHIVANI BHADAURIA-2024 </small>
    </div>


        </>)
}