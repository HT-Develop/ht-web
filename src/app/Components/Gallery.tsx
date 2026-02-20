'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    category: string;
    span?: 'wide' | 'tall' | 'normal';
}

const galleryImages: GalleryImage[] = [
    { id: 1, src: '/Gallery/img1.jpeg', alt: 'Construction Project 1', category: 'Construction', span: 'wide' },
    { id: 2, src: '/Gallery/img2.jpeg', alt: 'Construction Project 2', category: 'Construction', span: 'tall' },
    { id: 3, src: '/Gallery/img3.jpeg', alt: 'Construction Project 3', category: 'Construction' },
    { id: 4, src: '/Gallery/img4.jpeg', alt: 'Residential Design', category: 'Residential' },
    { id: 5, src: '/Gallery/img-5.png', alt: 'Modern Home Exterior', category: 'Residential', span: 'wide' },
    { id: 6, src: '/Gallery/img-6.png', alt: 'Luxury Interior Design', category: 'Interior', span: 'tall' },
    { id: 7, src: '/commercial.jpg', alt: 'Commercial Building', category: 'Commercial', span: 'wide' },
    { id: 8, src: '/renovation.jpg', alt: 'Renovation Project', category: 'Renovation' },
    { id: 9, src: '/interior.png', alt: 'Interior Design & Decor', category: 'Interior' },
    { id: 10, src: '/landscaping.jpg', alt: 'Landscaping & Outdoor', category: 'Landscaping' },
    { id: 11, src: '/residential.jpg', alt: 'Residential Complex', category: 'Residential', span: 'tall' },
    { id: 12, src: '/maintenance.png', alt: 'Maintenance & Support Work', category: 'Construction' },
    { id: 13, src: '/Gallery/floorplan1.jpg', alt: 'Modern Floor Plan', category: 'Floor Plans' },
    { id: 14, src: '/Gallery/floorplan2.jpg', alt: 'Spacious Floor Plan', category: 'Floor Plans', span: 'wide' },
];

const categories = ['All', 'Construction', 'Residential', 'Commercial', 'Interior', 'Renovation', 'Landscaping', 'Floor Plans'];

// --- Lightbox Component ---
interface LightboxProps {
    index: number;
    images: GalleryImage[];
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

const Lightbox = React.memo(({ index, images, onClose, onPrev, onNext }: LightboxProps) => {
    const zoom = useMotionValue(1);
    const panX = useMotionValue(0);
    const panY = useMotionValue(0);
    const [dragging, setDragging] = useState(false);
    const [zoomDisplay, setZoomDisplay] = useState(1);

    const dragStart = useRef({ x: 0, y: 0 });
    const panStart = useRef({ x: 0, y: 0 });
    const lastTouchDistance = useRef<number | null>(null);

    const resetView = useCallback((instant = false) => {
        if (instant) {
            zoom.set(1);
            panX.set(0);
            panY.set(0);
            setZoomDisplay(1);
        } else {
            animate(zoom, 1, { type: 'spring', bounce: 0, duration: 0.3 });
            animate(panX, 0, { type: 'spring', bounce: 0, duration: 0.3 });
            animate(panY, 0, { type: 'spring', bounce: 0, duration: 0.3 });
            setZoomDisplay(1);
        }
    }, [zoom, panX, panY]);

    // Handle index changes (prev/next)
    useEffect(() => {
        resetView(true);
    }, [index, resetView]);

    const handleWheel = useCallback((e: React.WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const nextZoom = Math.min(4, Math.max(0.5, zoom.get() - e.deltaY * 0.001));
        zoom.set(nextZoom);
        setZoomDisplay(nextZoom);
        if (nextZoom === 1) {
            panX.set(0);
            panY.set(0);
        }
    }, [zoom, panX, panY]);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        if (zoom.get() <= 1) return;
        e.preventDefault();
        setDragging(true);
        dragStart.current = { x: e.clientX, y: e.clientY };
        panStart.current = { x: panX.get(), y: panY.get() };
    }, [zoom, panX, panY]);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        if (e.touches.length === 1) {
            if (zoom.get() <= 1) return;
            const touch = e.touches[0];
            setDragging(true);
            dragStart.current = { x: touch.clientX, y: touch.clientY };
            panStart.current = { x: panX.get(), y: panY.get() };
        } else if (e.touches.length === 2) {
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            lastTouchDistance.current = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
        }
    }, [zoom, panX, panY]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!dragging) return;
            panX.set(panStart.current.x + (e.clientX - dragStart.current.x));
            panY.set(panStart.current.y + (e.clientY - dragStart.current.y));
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length === 1 && dragging) {
                const touch = e.touches[0];
                panX.set(panStart.current.x + (touch.clientX - dragStart.current.x));
                panY.set(panStart.current.y + (touch.clientY - dragStart.current.y));
            } else if (e.touches.length === 2) {
                const touch1 = e.touches[0];
                const touch2 = e.touches[1];
                const distance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
                if (lastTouchDistance.current !== null) {
                    const delta = distance / lastTouchDistance.current;
                    const nextZoom = Math.min(4, Math.max(0.5, zoom.get() * delta));
                    zoom.set(nextZoom);
                    setZoomDisplay(nextZoom);
                    if (nextZoom === 1) {
                        panX.set(0);
                        panY.set(0);
                    }
                }
                lastTouchDistance.current = distance;
            }
        };

        const handleEnd = () => {
            setDragging(false);
            lastTouchDistance.current = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleEnd);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [dragging, zoom, panX, panY]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={onClose}
        >
            <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-full flex items-center justify-center text-white hover:text-black transition-all">
                <X size={20} />
            </button>

            <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-3 sm:left-6 z-10 w-11 h-11 bg-white/10 hover:bg-yellow-400 rounded-full flex items-center justify-center text-white hover:text-black transition-all">
                <ChevronLeft size={22} />
            </button>

            <motion.div
                className="relative w-[90vw] h-[75vh] sm:w-[80vw] sm:h-[80vh] max-w-5xl overflow-hidden rounded-xl"
                onClick={(e) => e.stopPropagation()}
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                style={{
                    cursor: zoomDisplay > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in',
                    touchAction: zoomDisplay > 1 ? 'none' : 'auto',
                }}
            >
                <motion.div
                    className="w-full h-full will-change-transform"
                    style={{ x: panX, y: panY, scale: zoom, transformOrigin: 'center center', userSelect: 'none' }}
                >
                    <Image src={images[index].src} alt={images[index].alt} fill className="object-contain" sizes="90vw" draggable={false} priority />
                </motion.div>
            </motion.div>

            {zoomDisplay !== 1 && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full">
                    <span>{Math.round(zoomDisplay * 100)}%</span>
                    <button onClick={(e) => { e.stopPropagation(); resetView(); }} className="text-yellow-400 hover:text-white transition-colors underline underline-offset-2">Reset</button>
                </div>
            )}

            {zoomDisplay === 1 && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-gray-300 text-xs px-3 py-1 rounded-full pointer-events-none">Scroll to zoom</div>
            )}

            <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-3 sm:right-6 z-10 w-11 h-11 bg-white/10 hover:bg-yellow-400 rounded-full flex items-center justify-center text-white hover:text-black transition-all">
                <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-5 left-0 right-0 text-center">
                <p className="text-white font-semibold text-sm">{images[index].alt}</p>
                <p className="text-gray-400 text-xs mt-1">{index + 1} / {images.length}</p>
            </div>
        </motion.div>
    );
});

Lightbox.displayName = 'Lightbox';

const GallerySection = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        const el = document.getElementById('gallery');
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const filtered = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory);

    const openLightbox = (index: number) => { setLightboxIndex(index); };
    const closeLightbox = () => { setLightboxIndex(null); };

    const prev = useCallback(() => {
        setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    }, [filtered.length]);

    const next = useCallback(() => {
        setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
    }, [filtered.length]);

    // Keyboard navigation
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [lightboxIndex, prev, next]);

    // Lock body scroll when lightbox open
    useEffect(() => {
        document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [lightboxIndex]);

    return (
        <section id="gallery" className="bg-white py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <p className="text-yellow-400 uppercase text-sm font-semibold tracking-widest mb-3">Our Portfolio</p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                        Project <span className="text-yellow-400">Gallery</span>
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Explore our wide range of completed projects — from stunning residential homes and
                        commercial buildings to elegant interiors and beautifully landscaped spaces.
                    </p>
                    <div className="w-20 h-1 bg-yellow-400 rounded-full mx-auto mt-6" />
                </motion.div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat ? 'bg-yellow-400 text-black shadow-lg scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
                    >
                        {filtered.map((img, idx) => (
                            <motion.div
                                key={img.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
                                onClick={() => openLightbox(idx)}
                            >
                                <div className={`relative w-full ${img.span === 'tall' ? 'h-80 sm:h-96' : img.span === 'wide' ? 'h-56 sm:h-64' : 'h-60 sm:h-72'}`}>
                                    <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-white font-semibold text-sm leading-tight">{img.alt}</p>
                                                <span className="text-yellow-400 text-xs font-medium mt-0.5 block">{img.category}</span>
                                            </div>
                                            <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                                                <ZoomIn size={16} className="text-black" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">{img.category}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <p className="text-lg">No images in this category yet.</p>
                    </div>
                )}
            </div>

            <AnimatePresence>
                {lightboxIndex !== null && (
                    <Lightbox
                        index={lightboxIndex}
                        images={filtered}
                        onClose={closeLightbox}
                        onPrev={prev}
                        onNext={next}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default GallerySection;
