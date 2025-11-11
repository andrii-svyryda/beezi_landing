import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Description from "./components/sections/Description";
import FeatureCards from "./components/sections/FeatureCards";
import Features from "./components/sections/Features";
import Demo from "./components/sections/Demo";
import Benefits from "./components/sections/Benefits";
import Testimonials from "./components/sections/Testimonials";
import CTA from "./components/sections/CTA";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Description />
        <FeatureCards />
        <Features />
        <Demo />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
