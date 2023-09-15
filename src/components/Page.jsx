import { Works, Contact, Hero, Navbar, About } from "./";
import Footer from "./footer";
import Sponsor from "./sponsors";
import Glimpses from "./Glimpses";
import { Analytics } from "@vercel/analytics/react";

const Page = () => {
  return (
    <>
      <div className="relative z-0 ">
        <Navbar />
        <Hero />
        <About />
        {/* <Sponsor /> */}
      </div>
      <Works />
      <Glimpses />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
};

export default Page;
