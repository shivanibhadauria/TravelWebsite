import car from "./Assets/image/car.png"
import hotel from "./Assets/image/hotel.png"
import people from "./Assets/image/people.png"
import plane from "./Assets/image/plane.png"

export default  function Service(){
    return(<>

    <div className="flex flex-col static items-center justify-center w-screen ">


        <div className="relative text-white flex items-center justify-center md:mt-40 ">
            <img className=" rounded-full" src={people}/>
    <div className="absolute text-4xl md:text-8xl font-bold shadow-lg">Our Services</div>

    
    
    
    </div>


    <div className="relative  flex text-center flex-col items-center justify-center  m-4">
       
        <img src={plane}/>
        <h1 className="absolute text-white text-4xl md:text-5xl font-bold shadow-lg">Flight Bookings</h1>
        <p className="font-semibold"> Real-time flight searches, booking options, fare comparisons, and flexible search filters.</p>

    </div>

    <div className="relative  flex text-center flex-col items-center justify-center  m-4">
        <h1 className="absolute text-white text-4xl  md:text-5xl font-bold shadow-lg">Hotel Reservations</h1>
        <img src={hotel}/>
        <p  className="font-semibold" > Extensive hotel listings, detailed descriptions, photos, amenities, booking options, and reviews.</p>

    </div>

    <div className="relative  flex text-center flex-col items-center justify-center  m-4">
        <h1 className="absolute text-white text-4xl font-bold md:text-5xl shadow-lg">Car Rentals</h1>
        <img src={car}/>
        <p className="font-semibold"> Vehicle availability, pricing, booking options, and additional services like GPS.</p>

    </div>




    </div>
    
    </>)
}