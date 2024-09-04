import { useState } from 'react'
import video3 from './Assets/video3.mp4'

export default function ContactUs(){
    const [submit,  setSubmit] = useState(false)


    return (<>


    {
        submit==true ?

        <div className='w-screen h-screen relative  flex items-center justify-center object-fill bg-slate-500'>
        <video className=' object-fill w-full h-full absolute ' src={video3} loop muted autoPlay/>

        <h1 className='absolute font-extrabold text-5xl text-center'>Thank You For Contacting us </h1>


        </div>



        :

<div className='w-screen h-screen relative  flex items-center justify-center object-fill bg-slate-500'>
        <video className=' object-fill w-full h-full absolute ' src={video3} loop muted autoPlay/>
        <div onSubmit={()=> setSubmit(!submit)} className='absolute   flex items-center justify-center  gap-4 flex-col'>
            <h1 className='text-6xl font-extrabold '>Contact Us</h1>
            <input required className=' w-4/4 md:w-full md:text-center  rounded-full p-2 border-2 border-black ' placeholder='enter your name' type='text'/>
            <input required className=' w-4/4 md:w-full md:text-center rounded-full p-2  border-2 border-black' placeholder='enter your email' type='text'/>
            <input required className=' w-4/4 md:w-full md:text-center rounded-full p-2  border-2 border-black' placeholder='enter your number' type='number'/>
            <button  className='bg-black md:w-full md:text-center text-white w-4/4 hover:bg-cyan-900 rounded-full font-bold border-white border-2 p-3'>submit</button>
    
    
        </div>
        </div>



    }









   







    
    
    </>)
}