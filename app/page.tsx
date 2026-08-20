import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Classroom from "@/components/Classroom";
import Approach from "@/components/Approach";
import Steps from "@/components/Steps";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Programs />
      <Classroom />
      <Approach />
      <Steps />
      <CTA />
      <Footer />
    </main>
  );
}
