import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Company from "@/components/sections/Company";
import BusinessUnits from "@/components/sections/BusinessUnits";
import FutureTech from "@/components/sections/FutureTech";
import Industries from "@/components/sections/Industries";
import TechEcosystem from "@/components/sections/TechEcosystem";
import Leadership from "@/components/sections/Leadership";
import Careers from "@/components/sections/Careers";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Company />
      <BusinessUnits />
      <FutureTech />
      <Industries />
      <TechEcosystem />
      <Leadership />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
}
