import { FaArrowRight } from "react-icons/fa";
import doctors from "../assets/images/Blackdoctors.png";

const Welcome = () => {
  return (
    <div className="lg:max-w-[1280px] mx-auto px-3 md:px-5 lg:px-2 pt-12 pb-12 lg:pt-36 lg:pb-20 ">
      <div className="text-center">
        <p className="text-base lg:text-xl uppercase text-[#159EEC] font-bold tracking-[.12em]">
          Welcome to Meddical
        </p>
        <h2 className="text-[#1F2B6C] text-2xl md:text-3xl lg:text-4xl font-bold mb-3 mt-1">
          A Great Place to Receive Care
        </h2>
        <p className="lg:max-w-[650px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>

        <p className="flex gap-2 justify-center items-center font-semibold mt-5">
          <span className="text-[#159EEC]">Learn More</span>
          <span>
            <FaArrowRight />
          </span>
        </p>

        <img src={doctors} alt="" className="mt-16" />
      </div>
    </div>
  );
};

export default Welcome;
