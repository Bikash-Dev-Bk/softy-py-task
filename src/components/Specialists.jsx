import logo from "../assets/images/Vector.png";
import logo1 from "../assets/images/Vector1.png";

const Specialists = () => {
  return (
    <div className="lg:max-w-[1280px] mx-auto px-3 md:px-5 lg:px-2 py-20">
      <div className="text-center">
        <p className="text-base lg:text-xl uppercase text-[#159EEC] font-bold tracking-[.12em]">
          Always Caring
        </p>
        <h2 className="text-[#1F2B6C] text-2xl md:text-3xl lg:text-4xl font-bold mb-3 mt-1">
          Our Specialties
        </h2>
      </div>
      <div className="grid gap-2 md:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 md:mt-24">
        <div className="border-1 border flex flex-col justify-center items-center py-20">
          <img src={logo} alt="" />
          <p className="font-semibold mt-2">Neurology</p>
        </div>
        <div className="border-1 border flex flex-col justify-center items-center text-[#BFD2F8] bg-[#1F2B6C] rounded-lg py-20">
          <img src={logo1} alt="" />
          <p className="font-semibold mt-2">Bones</p>
        </div>
        <div className="border-1 border flex flex-col justify-center items-center py-20">
          <img src={logo} alt="" />
          <p className="font-semibold mt-2">Oncology</p>
        </div>
        <div className="border-1 border flex flex-col justify-center items-center py-20">
          <img src={logo} alt="" />
          <p className="font-semibold mt-2">Otorhinolaryngology</p>
        </div>
        <div className="border-1 border flex flex-col justify-center items-center py-20">
          <img src={logo} alt="" />
          <p className="font-semibold mt-2">Ophthalmology</p>
        </div>
        <div className="border-1 border flex flex-col justify-center items-center py-20">
          <img src={logo} alt="" />
          <p className="font-semibold mt-2">Cardiovascular</p>
        </div>
        <div className="border-1 border flex flex-col justify-center items-center py-20">
          <img src={logo} alt="" />
          <p className="font-semibold mt-2">Pulmonology</p>
        </div>
        <div className="border-1 border flex flex-col justify-center items-center py-20">
          <img src={logo} alt="" />
          <p className="font-semibold mt-2">Renal Medicine</p>
        </div>
        <div className="border-1 border flex flex-col justify-center items-center py-20">
          <img src={logo} alt="" />
          <p className="font-semibold mt-2">Gastroenterology</p>
        </div>
        <div className="border-1 border flex flex-col justify-center items-center py-20">
          <img src={logo} alt="" />
          <p className="font-semibold mt-2">Urology</p>
        </div>
        <div className="border-1 border flex flex-col justify-center items-center py-20">
          <img src={logo} alt="" />
          <p className="font-semibold mt-2">Dermatology</p>
        </div>
        <div className="border-1 border flex flex-col justify-center items-center py-20">
          <img src={logo} alt="" />
          <p className="font-semibold mt-2">Gynaecology</p>
        </div>
      </div>
    </div>
  );
};

export default Specialists;
