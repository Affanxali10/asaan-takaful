'use client';

import Link from 'next/link';
import styles from './TrailblazersSection.module.css';

export default function TrailblazersSection({
    titlePrefix = 'Trailblazers',
    brandName = 'AsaanTakaful',
    subtitle = "Driven by foresight and powered by years of expertise, we're shaping the future.",
    ctaHref = '/leaders' // change to your leaders page route
}) {
    return (
        <section className={styles.section} aria-labelledby="trailblazers-heading">
            <div className={styles.inner}>
                <div className={styles.left}>
                    <h2 id="trailblazers-heading" className={styles.title}>
                        <span className={styles.accent}>{titlePrefix}</span>{' '}
                        <span className={styles.brand}>{`of ${brandName}`}</span>
                    </h2>

                    <p className={styles.subtitle}>{subtitle}</p>

                    <div className={styles.actions}>
                        <Link href={ctaHref} className={styles.cta}>
                            Meet Our Leaders
                        </Link>
                    </div>
                </div>

                <div className={styles.right} aria-hidden="true">
                    {/* Decorative SVG — replace later with logo or illustration if you want */}
                    <svg viewBox="0 0 560 360" className={styles.decSvg} preserveAspectRatio="xMidYMid slice" role="img">
                        <defs>
                            <linearGradient id="g1" x1="0" x2="1">
                                <stop offset="0" stopColor="#ffb66b" stopOpacity="1" />
                                <stop offset="1" stopColor="#f08a5d" stopOpacity="1" />
                            </linearGradient>
                            <linearGradient id="g2" x1="0" x2="1">
                                <stop offset="0" stopColor="#2ec4b6" stopOpacity="1" />
                                <stop offset="1" stopColor="#1f8f72" stopOpacity="1" />
                            </linearGradient>
                        </defs>

                        <rect x="0" y="0" width="560" height="360" rx="28" fill="url(#g1)" opacity="0.95" />
                        <g transform="translate(60,20) scale(0.9)">
                            <path d="M220 40c40 0 56 50 20 80-36 30-90 10-110-20-20-30-6-60 40-60 18 0 32 0 50 0z" fill="url(#g2)" opacity="0.95" />
                            <circle cx="420" cy="220" r="60" fill="#ffffff" opacity="0.12" />
                            <circle cx="480" cy="270" r="28" fill="#ffffff" opacity="0.14" />
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
}
