import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
} from "react-icons/gr";
import doctor1 from "../assets/images/doctor/doctor1.png";
import doctor2 from "../assets/images/doctor/doctor2.png";
import doctor3 from "../assets/images/doctor/doctor3.png";

const doctors = [
  {
    id: 1,
    name: "Dr. James Smith",
    specialties: "Neurology",
    image: doctor1,
  },
  {
    id: 2,
    name: "Dr. Michael Johnson",
    specialties: "Neurology",
    image: doctor2,
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    specialties: "Urology",
    image: doctor3,
  },
];

const Doctors = () => {
  return (
    <div className="lg:max-w-[1280px] mx-auto px-3 md:px-5 lg:px-2">
      <div className="py-20">
        <div className="text-center">
          <p className="text-base lg:text-xl uppercase text-[#159EEC] font-bold tracking-[.12em]">
            Trusted Care
          </p>
          <h2 className="text-[#1F2B6C] text-2xl md:text-3xl lg:text-4xl font-bold mb-3 mt-1">
            Our Doctors
          </h2>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24">
          {doctors.map((doctor) => (
            <div key={doctor.id}>
              <img src={doctor.image} alt="" />
              <div className="flex flex-col justify-center items-center bg-[#BFD2F8] py-10">
                <p className="text-xl font-semibold">{doctor.name}</p>
                <h3 className="tracking-[.12em] uppercase text-2xl font-bold my-5">
                  {doctor.specialties}
                </h3>
                <div className="flex gap-5 justify-between items-center">
                  <p className="text-[#BFD2F8] bg-[#1F2B6C] p-2 rounded-full">
                    <GrLinkedinOption />
                  </p>
                  <p className="text-[#BFD2F8] bg-[#1F2B6C] p-2 rounded-full">
                    <GrFacebookOption />
                  </p>
                  <p className="text-[#BFD2F8] bg-[#1F2B6C] p-2 rounded-full">
                    <GrInstagram />
                  </p>
                </div>
              </div>
              <p className="text-center text-[#BFD2F8] bg-[#1F2B6C] py-4 rounded-bl-lg rounded-br-lg">
                View Profile
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
