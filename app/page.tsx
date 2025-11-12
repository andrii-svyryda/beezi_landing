import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Description from "./components/sections/Description";
import FeatureCards from "./components/sections/FeatureCards";
import Features from "./components/sections/Features";
import ModelRouting from "./components/sections/ModelRouting";
import Integration from "./components/sections/Integration";
import Timeline from "./components/sections/Timeline";
import Analytics from "./components/sections/Analytics";
import Comparison from "./components/sections/Comparison";
import Security from "./components/sections/Security";
import Demo from "./components/sections/Demo";
import Benefits from "./components/sections/Benefits";
import Testimonials from "./components/sections/Testimonials";
import Founder from "./components/sections/Founder";
import Partners from "./components/sections/Partners";
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
        <ModelRouting />
        <Integration />
        <Timeline />
        <Analytics />
        <Comparison />
        <Security />
        <Founder />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
