import Appointment from "./Appointment ";
import Contact from "./Contact";
import Doctors from "./Doctors";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import News from "./News";
import Services from "./Services";
import Specialists from "./Specialists";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Navbar2></Navbar2>
      <Navbar></Navbar>
      <Hero></Hero>
      <Welcome></Welcome>
      <Services></Services>
      <Specialists></Specialists>
      <Appointment></Appointment>
      <Doctors></Doctors>
      <News></News>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
