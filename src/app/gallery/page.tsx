import type { Metadata } from 'next';
import GallerySection from '../Components/Gallery';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WhatsAppButton from '../Components/WhatsAppButton';

export const metadata: Metadata = {
    title: 'Gallery | HT Developer - Our Projects & Designs',
    description:
        'Browse HT Developer\'s portfolio of completed residential, commercial, interior, and renovation projects.',
};

export default function GalleryPage() {
    return (
        <main className="relative w-full min-h-screen bg-white">
            <Navbar />
            {/* Push content below fixed navbar */}
            <div className="pt-16">
                <GallerySection />
            </div>
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
