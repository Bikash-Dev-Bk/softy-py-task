import { IoIosPeople } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-center h-[450px] lg:h-[900px]">
      <div className="lg:max-w-[1280px] mx-auto h-[450px] lg:h-[900px] flex flex-col justify-center items-center md:items-start px-3 md:px-5 lg:px-2">
        <p className="text-base lg:text-xl uppercase text-[#159EEC] font-bold tracking-[.12em]">
          Caring for Life
        </p>
        <h1 className="text-[#1F2B6C] text-center md:text-left text-2xl md:text-4xl lg:text-6xl font-bold mb-3 mt-2">
          Leading the Way <br /> in Medical Excellence
        </h1>
        <div>
          <button className="bg-[#BFD2F8] text-[#1F2B6C] rounded-full text-lg font-semibold shadow-sm hover:bg-[#8cadf0] px-10 py-3 mt-5">
            Our Services
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className=" lg:max-w-[1280px] mx-auto flex gap-5 justify-between items-center -mt-20 ">
          <div className="flex gap-16 justify-between items-center bg-[#1F2B6C] text-[#FCFEFE] rounded-md px-12 py-8">
            <p className="font-semibold text-lg">Book an Appointment</p>
            <p>
              <IoCalendarOutline className="text-7xl" />
            </p>
          </div>
          <div className="flex gap-16 justify-between items-center bg-[#BFD2F8] text-[#1F2B6C] rounded-md px-12 py-8">
            <p className="font-semibold text-lg">Book an Appointment</p>
            <p>
              <IoIosPeople className="text-7xl" />
            </p>
          </div>
          <div className="flex gap-16 justify-between items-center bg-[#159EEC] text-[#FCFEFE] rounded-md px-12 py-8">
            <p className="font-semibold text-lg">Book an Appointment</p>
            <p>
              <IoCalendarOutline className="text-7xl" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
