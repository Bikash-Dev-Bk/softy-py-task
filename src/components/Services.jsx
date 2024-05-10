import serviceImg1 from "../assets/images/services/1.png";
import serviceImg2 from "../assets/images/services/2.png";
import service1 from "../assets/images/services/medical 1.png";
import service2 from "../assets/images/services/Vector.png";
import service3 from "../assets/images/services/Vector (1).png";
import service4 from "../assets/images/services/Vector (2).png";
import { GoDotFill } from "react-icons/go";

const Services = () => {
  return (
    <div className="bg-[#159EEC03] py-20">
      <div className="lg:max-w-[1280px] mx-auto px-3 md:px-5 lg:px-2">
        <div className="text-center">
          <p className="text-base lg:text-xl uppercase text-[#159EEC] font-bold tracking-[.12em]">
            Care you can believe in
          </p>
          <h2 className="text-[#1F2B6C] text-2xl md:text-3xl lg:text-4xl font-bold mb-3 mt-1">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-7 mt-10 md:mt-24">
          <div className="col-span-1 grid grid-cols-2 lg:grid-cols-1 border-1 border">
            <div className="flex flex-col items-center justify-center font-semibold p-8 md:p-12 lg:p-1">
              <img src={service1} alt="" />
              <p className="mt-2">Free Checkup</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#1F2B6C] text-[#BFD2F8] font-semibold p-8 md:p-12 lg:p-1">
              <img src={service2} alt="" />
              <p className="mt-2">Cardiogram</p>
            </div>
            <div className="flex flex-col items-center justify-center font-semibold p-8 md:p-12 lg:p-1">
              <img src={service3} alt="" />
              <p className="mt-2">Dna Testing</p>
            </div>
            <div className="flex flex-col items-center justify-center font-semibold p-8 md:p-12 lg:p-1">
              <img src={service4} alt="" />
              <p className="mt-2">Blood Bank</p>
            </div>
            <button className="bg-[#1F2B6C] text-[#BFD2F8] font-semibold -py-4 hidden lg:block">View All</button>
          </div>

          <div className="col-span-1 lg:col-span-3 lg:mt-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              A passion for putting patients first.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5">
              <p className="flex gap-1 items-center ">
                <GoDotFill className="text-4xl text-[#159EEC] " />
                <span className="text-lg font-semibold">
                  A Passion for Healing
                </span>
              </p>
              <p className="flex gap-1 items-center ">
                <GoDotFill className="text-4xl text-[#159EEC] " />
                <span className="text-lg font-semibold">5-Star Care</span>
              </p>
              <p className="flex gap-1 items-center ">
                <GoDotFill className="text-4xl text-[#159EEC] " />
                <span className="text-lg font-semibold">All our best</span>
              </p>
              <p className="flex gap-1 items-center ">
                <GoDotFill className="text-4xl text-[#159EEC] " />
                <span className="text-lg font-semibold">Believe in Us</span>
              </p>
              <p className="flex gap-1 items-center ">
                <GoDotFill className="text-4xl text-[#159EEC] " />
                <span className="text-lg font-semibold">
                  A Legacy of Excellence
                </span>
              </p>
              <p className="flex gap-1 items-center ">
                <GoDotFill className="text-4xl text-[#159EEC] " />
                <span className="text-lg font-semibold">Always Caring</span>
              </p>
            </div>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare Convallis felis vitae tortor
              augue. Velit nascetur proin massa in. Consequat faucibus porttitor
              enim et.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare Convallis felis vitae tortor
              augue. Velit nascetur proin massa in. Consequat faucibus porttitor
              enim et.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-2 flex gap-5 flex-col">
            <img src={serviceImg1} alt="" />
            <img src={serviceImg2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
