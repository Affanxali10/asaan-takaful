'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './PartnersSlider.module.css';

export default function PartnersSlider({
    images = [
        { src: 'salamtakaful.jpeg', alt: 'Salaam Takaful', href: 'https://www.salaamtakaful.com/' },
        { src: 'pak_qatar.png', alt: 'Pak-Qatar', href: 'https://pqgtl.com.pk/' },
        { src: 'TPL.png', alt: 'TPL', href: 'https://tplinsurance.com/' },
        { src: 'atlas.jpg', alt: 'Atlas', href: 'https://ail.atlas.pk/welcome/' },
        { src: 'IGI vitality.jpeg', alt: 'IGI', href: 'https://igilife.com.pk/' },
        { src: 'state_life.png', alt: 'StateLife', href: 'https://statelife.com.pk/en/page/takaful' }
    ],
    speed = 8, // seconds for one full loop
}) {
    const trackRef = useRef(null);
    const requestRef = useRef(null);
    const lastTimeRef = useRef(null);
    const offsetRef = useRef(0);
    const [trackWidth, setTrackWidth] = useState(0);
    const [ready, setReady] = useState(false);

    // Duplicate array for infinite seamless scroll
    const items = [...images, ...images];

    const resolveSrc = (s) => (s.startsWith('/') ? s : `/partners/${s}`);

    // Wait until images load to calculate track width
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const imgs = Array.from(track.querySelectorAll('img'));
        const promises = imgs.map((img) =>
            img.complete && img.naturalWidth !== 0
                ? Promise.resolve()
                : new Promise((res) => {
                    img.addEventListener('load', res, { once: true });
                    img.addEventListener('error', res, { once: true });
                })
        );

        Promise.all(promises).then(() => {
            const width = track.scrollWidth / 2; // width of one copy
            setTrackWidth(width);
            offsetRef.current = 0;
            setReady(true);
        });
    }, [images]);

    // Smooth infinite animation
    useEffect(() => {
        if (!ready || !trackWidth) return;

        const track = trackRef.current;
        const pixelsPerMs = trackWidth / (speed * 1000); // pixels per ms

        const animate = (time) => {
            if (lastTimeRef.current != null) {
                const delta = time - lastTimeRef.current;
                offsetRef.current += pixelsPerMs * delta;
                if (offsetRef.current >= trackWidth) offsetRef.current -= trackWidth;
                track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
            }
            lastTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        const handleResize = () => {
            const width = track.scrollWidth / 2;
            setTrackWidth(width);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener('resize', handleResize);
            lastTimeRef.current = null;
        };
    }, [ready, trackWidth, speed]);

    return (
        <section className={styles.partnersSection} aria-label="Our partners">
            <div className={styles.slider}>
                <div className={styles.track} ref={trackRef}>
                    {items.map((item, idx) => (
                        <div className={styles.item} key={`partner-${idx}-${item.src}`}>
                            <a href={item.href || '#'} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <img src={resolveSrc(item.src)} alt={item.alt || `Partner ${idx + 1}`} className={styles.logo} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
