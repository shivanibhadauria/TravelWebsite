import { MdLocationOn } from "react-icons/md";
import DestinationData from "./DestinationData";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Destinations() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <><div className="md:grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3	 md:p-10 md:m-0 gap-10 md:bg-gradient-to-r from-rose-100 to-teal-100 md:overflow-hidden m-6 border-white md:border-4 ">
      {DestinationData.map((e) => {
        return (
          <div key={e.id} >
            <div
              
              className="flex md:grid  md:m-10 md:p-10 md:rounded-3xl md:shadow-2xl 

	 items-center  gap-6 flex-col bg-slate-200 p-6   border-4 border-white"
            >
              <div className="flex w-full  gap-2 flex-col border-b-2 border-black">
                <div className="h-60 w-full overflow-hidden rounded-lg  object-fill">
                  <img
                    data-aos="fade-up"
                    className=" w-full  hover:scale-110 overflow-hidden"
                    src={e.imgSrc}
                  />
                </div>
                <h3 data-aos="fade-up" className="font-bold">
                  {e.title}
                </h3>
                <div className="flex  items-center pb-2  gap-2">
                  <MdLocationOn data-aos="fade-up" />
                  <h4 data-aos="fade-up">{e.location}</h4>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-between border-b-2 border-black w-full p-2">
                <div data-aos="fade-up">{e.grade}</div>
                <div data-aos="fade-up" className="font-extrabold">
                  {e.fees}
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="flex items-center justify-center "
              >
                {e.description}
              </div>
              <div className="flex p-3  m-0 gap-2 font-semibold  bg-black text-white rounded-lg items-center justify-center">
                <button>Details</button>
              </div>
            </div>
          </div>
        );
      })        }</div>
    </>
  );
}
