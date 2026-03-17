// https://dribbble.com/shots/24820686-Finpay-Fintech-Landing-Page

import LandingPage from "./components/LandingPage";
import Benefits from "./components/Benefits";
import ThirdSection from "./components/ThirdSection";
import Steps from "./components/Steps";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";

export default function Home() {
  return (
     <div className="relative">
      <div className="bg-cyan-50">
        <Navbar />
        <LandingPage />
      </div>
      <div className="absolute top-230">
        <Benefits/>
      </div>
      <ThirdSection />
      <Steps />
      <Mission />
      <Footer />
    </div>
  );
}
