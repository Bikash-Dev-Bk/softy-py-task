import { FaArrowRight } from "react-icons/fa";
import doctors from '../assets/images/Blackdoctors.png'

const Welcome = () => {
  return (
    <div className="text-center">
      <p className="uppercase text-[#159EEC] font-bold tracking-[.12em]">Welcome to Meddical</p>
      <h2 className="text-[#1F2B6C] text-2xl lg:text-3xl font-bold mb-3 mt-1">
        A Great Place to Receive Care
      </h2>
      <p className="lg:max-w-[650px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim
        et.
      </p>

      <p className="flex gap-2 justify-center items-center font-semibold mt-5"><span className="text-[#159EEC]">Learn More</span><span><FaArrowRight /></span></p>

      <img src={doctors} alt="" className="mt-16" />
    </div>
  );
};

export default Welcome;
