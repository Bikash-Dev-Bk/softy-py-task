import AppointmentForm from "./AppointmentForm";

const Appointment = () => {
  return (
    <div className="relative ">
      <div className="absolute inset-0 bg-custom-bg bg-cover bg-center opacity-20 z-0 "></div>
      <div className="relative z-10 lg:max-w-[1280px] mx-auto flex gap-8 lg:gap-0 flex-col lg:flex-row justify-between items-center py-16 px-3 md:px-5 lg:px-2">
        <div className="flex-1 mr-12 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#159EEC] text-center lg:text-left font-bold">
            Book an Appointment
          </h2>
          <p className="mt-4 font-semibold text-base text-justify lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Convallis felis vitae
            tortor augue. Velit nascetur proin massa in. Consequat faucibus
            porttitor enim et.
          </p>
        </div>
        <div className="flex-1">
          <AppointmentForm></AppointmentForm>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
