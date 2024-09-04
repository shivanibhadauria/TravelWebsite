import video4 from './Assets/video4.mp4'

export default function AboutUs(){
    return (<>
    <div className='flex flex-col items-center justify-center text-center p-10 md:pt-20'>
    <h1 className='font-bold text-3xl p-6 md:text-4xl '>About Wanders</h1>
    <p className='font-semibold p-2 lg:text-lg xl:text-2xl'> <span className='text-cyan-700'>Wanderlust awakened</span> Discover the world with us. From hidden gems to iconic destinations, Wanders is your passport to unforgettable adventures. Let our curated guides and inspiring stories fuel your wanderlust and help you plan your next escape.</p>
    <video src={video4} type="video/mp4" muted autoPlay loop ></video>
    <p className='font-semibold p-2 lg:text-lg xl:text-2xl'> <span className='text-cyan-700'>Wanderlust awakened</span> Discover the world with us. From hidden gems to iconic destinations, Wanders is your passport to unforgettable adventures. Let our curated guides and inspiring stories fuel your wanderlust and help you plan your next escape.</p>
    <p className='font-semibold p-2 lg:text-lg xl:text-2xl '>
    Whether you're a seasoned explorer or a first-time adventurer, Wanders is your ultimate travel companion. We offer personalized itineraries, expert advice, and exclusive deals to make your journey seamless and unforgettable. Let us inspire you to explore the world, one destination at a time.</p>


</div>
    
    </>)
}