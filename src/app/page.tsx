import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import WhyChooseUs from './Components/WhyChooseUsSection';
import HowItWorks from './Components/HowItWorksSection';
import Services from './Components/Services';
import Projects from './Components/Projects';
import AboutUs from './Components/AboutUs';
import ScrollingGallery from './Components/ScrollingGallery';
import ContactUs from './Components/ContactUs';
import SkylineBorder from './Components/SkylineBorder';
import Footer from './Components/Footer';
import WhatsAppButton from './Components/WhatsAppButton';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HT Developer - Premium Construction Services | Javed Shaikh',
  description:
    'HT Developer offers premium construction services. Led by Javed Shaikh, we deliver quality residential and commercial construction projects.',
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

const Home: React.FC = () => {
  return (
    <main className="relative w-full">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Services />
      <Projects />
      <AboutUs />
      <ScrollingGallery />
      <ContactUs />
      <SkylineBorder /> {/* SVG skyline above footer */}
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Home;
