import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import WhyChooseUs from './Components/WhyChooseUsSection';
import HowItWorks from './Components/HowItWorksSection';
import Services from './Components/Services';
import Projects from './Components/Projects';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import SkylineBorder from './Components/SkylineBorder';
import Footer from './Components/Footer';
import WhatsAppButton from './Components/WhatsAppButton';

import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'HT Developer - Premium Construction Services | Javed Shaikh',
  description:
    'HT Developer offers premium construction services. Led by Javed Shaikh, we deliver quality residential and commercial construction projects.',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const Home: React.FC = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Services />
      <Projects />
      <AboutUs />
      <ContactUs />
      <SkylineBorder /> {/* SVG skyline above footer */}
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Home;
