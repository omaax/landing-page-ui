// https://dribbble.com/shots/24820686-Finpay-Fintech-Landing-Page

import LandingPage from "./components/LandingPage";
import Benefits from "./components/Benefits";
import ThirdSection from "./components/ThirdSection";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <div className="">
      <LandingPage />
      <Benefits />
      <ThirdSection />
      <Steps />
    </div>
  );
}
