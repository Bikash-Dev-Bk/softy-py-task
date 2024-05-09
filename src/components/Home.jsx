import Appointment from "./Appointment ";
import Contact from "./Contact";
import Doctors from "./Doctors";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import News from "./News";
import Services from "./Services";
import Specialists from "./Specialists";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:max-w-[1280px] mx-auto px-3 md:px-5 lg:px-2">
      <Hero></Hero>
      <Welcome></Welcome>
      <Services></Services>
      <Specialists></Specialists>
      <Appointment></Appointment>
      <Doctors></Doctors>
      <News></News>
      <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
