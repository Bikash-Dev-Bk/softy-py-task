import { AiOutlineMail } from "react-icons/ai";
import { GoClock } from "react-icons/go";
import { LuPhoneCall } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

const Contact = () => {
  return (
    <div className=" py-20">
      <div className="text-center">
        <p className="text-base md:text-xl uppercase text-[#159EEC] font-bold tracking-[.12em]">
          Get in touch
        </p>
        <h2 className="text-[#1F2B6C] text-2xl md:text-3xl lg:text-4xl font-bold mb-3 mt-1">
          Contact
        </h2>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
        <div className="bg-[#BFD2F8] text-[#1F2B6C] px-8 py-16 rounded-md">
          <p className="text-4xl">
            <LuPhoneCall />
          </p>
          <h3 className="uppercase font-bold mt-5">Emergency</h3>
          <p>(237) 681-812-255</p>
          <p>(237) 666-331-894</p>
        </div>
        <div className="text-[#BFD2F8] bg-[#1F2B6C] px-8 py-16 rounded-md">
          <p className="text-4xl">
          <SlLocationPin />
          </p>
          <h3 className="uppercase font-bold mt-5">Location</h3>
          <p>Dhanmondi 32, Dhaka</p>
          <p>Bangladesh</p>
        </div>
        <div className="bg-[#BFD2F8] text-[#1F2B6C] px-8 py-16 rounded-md">
          <p className="text-4xl">
          <AiOutlineMail/>
          </p>
          <h3 className="uppercase font-bold mt-5">Email</h3>
          <p>fildineeesoe@gmil.com</p>
          <p>myebstudios@gmail.com</p>
        </div>
        <div className="bg-[#BFD2F8] text-[#1F2B6C] px-8 py-16 rounded-md">
          <p className="text-4xl">
          <GoClock />
          </p>
          <h3 className="uppercase font-bold mt-5">Working Hours</h3>
          <p>Mon-Sat 09:00-20:00</p>
          <p>Sunday Emergency only</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
