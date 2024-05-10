const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-center h-[450px] lg:h-[850px]">
      <div className="lg:max-w-[1280px] mx-auto h-[450px] lg:h-[850px] flex flex-col justify-center items-center md:items-start px-3 md:px-5 lg:px-2">
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
    </div>
  );
};

export default Hero;
