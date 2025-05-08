
import React from 'react';
// import './HomePage.css'; // Link the CSS file
import Navbar from '../../Components/Navbar/Navbar';
import HeroSection from '../../Components/HeroSection/HeroSection';
import PartnerSection from '../../Components/PartnerSection/PartnerSection';
// import ServiceSection from '../../Components/ServiceSection/ServiceSection';  
// import Projects from '../../Components/Projects/Projects';
// import ContactSection from '../../Components/ContactSection/ContactSection';
// import Footer from '../../Components/Footer/Footer';
import Whychoose from '../../Components/WhyChoose/Whychoose';


// import OurProcess from '../../Components/Ourprocess/Ourprocess';

const HomePage = () => {
  return (
    <>
    <Navbar/>
     <HeroSection/>
     <PartnerSection/>
     <Whychoose/>
    {/*<ServiceSection/>
     <Projects/>
    <ContactSection/>
    <OurProcess/>
    <Footer/>  */}
    </>
  );
};

export default HomePage;
