import serviceImg1 from "../assets/images/services/1.png";
import serviceImg2 from "../assets/images/services/2.png";
import service1 from "../assets/images/services/medical 1.png";
import service2 from "../assets/images/services/Vector.png";
import service3 from "../assets/images/services/Vector (1).png";
import service4 from "../assets/images/services/Vector (2).png";
import { GoDotFill } from "react-icons/go";

const Services = () => {
  return (
    <div className="bg-[#159EEC03] py-12 lg:py-20">
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
            <button className="bg-[#1F2B6C] text-[#BFD2F8] font-semibold -py-4 hidden lg:block">
              View All
            </button>
          </div>

          <div className="col-span-1 lg:col-span-3 lg:mt-3">
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
            <p className="text-lg text-justify lg:text-left">
              We uphold a steadfast commitment to comprehensive healthcare,
              driven by a profound Passion for Healing. With meticulous
              attention to detail and a focus on patient-centered care, we
              provide an unparalleled experience of 5-Star Care. Every
              individual who walks through our doors receives our unwavering
              dedication and expertise, ensuring their journey to wellness is
              met with the highest standards of excellence.
              <br />
              <br />
              At the heart of our philosophy lies the belief that together, we
              can achieve remarkable outcomes. We invite you to place your trust
              in us as we draw upon our Legacy of Excellence. With a history
              rich in innovation and a tradition of compassionate service, we
              stand as a beacon of hope and healing in our community. Always
              Caring, we are committed to guiding you towards optimal health and
              well-being, empowering you to lead a life of vitality and
              fulfillment.
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
