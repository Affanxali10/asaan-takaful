'use client';

import { useEffect, useRef } from 'react';
import styles from './StatsSection.module.css';

export default function StatsSection({
    stats = [
        { key: 'active', label: 'Active Policy Holders', value: 21000 },
        { key: 'settled', label: 'Settled Claims', value: 1000 },
        { key: 'rating', label: 'Customer Rating', value: 70000 },
        { key: 'sales', label: 'Sales Team', value: 42 }
    ],
}) {
    const containerRef = useRef(null);
    const overlayRef = useRef(null);
    const countersRef = useRef({});

    // COUNT-UP Animation
    useEffect(() => {
        const animateCount = (el, target) => {
            let start = null;
            const duration = 900;

            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(target * eased);

                el.textContent = current.toLocaleString();

                if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
        };

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        stats.forEach((s) => {
                            const el = countersRef.current[s.key];
                            if (el && !el.dataset.animated) {
                                animateCount(el, s.value);
                                el.dataset.animated = "true";
                            }
                        });
                    }
                });
            },
            { threshold: 0.35 }
        );

        if (containerRef.current) io.observe(containerRef.current);
        return () => io.disconnect();
    }, [stats]);

    // Radial fade effect
    useEffect(() => {
        const node = containerRef.current;
        const overlay = overlayRef.current;
        if (!node || !overlay) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const ratio = 1 - entry.intersectionRatio;
                    overlay.style.opacity = String(Math.min(1, ratio * 1.1));
                });
            },
            { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
        );

        io.observe(node);
        return () => io.disconnect();
    }, []);

    return (
        <section className={styles.statsSection} ref={containerRef}>
            <div className={styles.radialOverlay} ref={overlayRef} />
            <div className={styles.content}>

                <div className={styles.left}>
                    <h2 className={styles.title}>A modern, Shariah-compliant protection platform crafted to safeguard families, assets, and businesses with integrity and transparency</h2>
                    <p className={styles.lead}>
                        Experience a fast, transparent, and fully Shariah-compliant digital protection system designed for families and businesses across Pakistan.
                    </p>
                </div>

                <div className={styles.right}>
                    {stats.map((s) => (
                        <div key={s.key} className={styles.statCard}>
                            <div
                                className={styles.statNumber}
                                ref={(el) => (countersRef.current[s.key] = el)}
                            >
                                0
                            </div>
                            <div className={styles.statLabel}>{s.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
