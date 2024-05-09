import { GrFacebookOption, GrInstagram, GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-[#1F2B6C]">
      <div className="lg:max-w-[1280px] mx-auto px-3 md:px-5 lg:px-2">
        <div className="grid gap-5 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between pt-20 pb-16">
          <div>
            <h2 className="text-5xl text-[#BFD2F8] font-bold uppercase">
              Meddical
            </h2>
            <p className="text-[#FCFEFE] text-xl mt-8">
              Leading the Way in Medical Execellence, Trusted Care.
            </p>
          </div>
          <div className="text-[#FCFEFE]">
            <h3 className="text-2xl font-semibold">Important Links</h3>
            <div className="space-y-2 mt-14">
              <p>Appointment</p>
              <p>Doctors</p>
              <p>Services</p>
              <p>About Us</p>
            </div>
          </div>
          <div className="text-[#FCFEFE]">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <div className="space-y-2 mt-14">
              <p>Call: (237) 681-812-255</p>
              <p>Email: fildineesoe@gmail.com</p>
              <p>Address: Dhanmondi 32, Dhaka</p>
              <p>Bangladesh</p>
            </div>
          </div>
          <div>
            <h3 className="text-[#FCFEFE] text-2xl font-semibold">
              Newsletter
            </h3>

            <input
              type="text"
              className="placeholder-[#1F2B6C] font-semibold bg-[#BFD2F8] focus:outline-none w-full mt-14  p-3 rounded-md"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <hr className="bg-white hx" />
        <div className="flex justify-between items-center pt-16 pb-20">
          <p className=" text-[#FCFEFE]">
            © 2024 Meddical All Rights Reserved by PNTEC-LTD
          </p>
          <div className="flex gap-5 justify-between items-center">
            <p className="bg-[#BFD2F8] p-2 rounded-full"><GrLinkedinOption /></p>
            <p className="bg-[#BFD2F8] p-2 rounded-full"><GrFacebookOption /></p>
            <p className="bg-[#BFD2F8] p-2 rounded-full"><GrInstagram /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
