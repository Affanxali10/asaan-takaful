'use client';

import Link from 'next/link';
import styles from './ContactStrip.module.css';

export default function ContactStrip({
    phone = '021-111-992-232',    // default phone shown — change when client gives real one
    href = 'tel:021-111-992-232' // tel: link — modify if needed
}) {
    return (
        <section className={styles.strip} aria-label="Get in touch">
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.badge}>
                        {/* decorative droplet / logo placeholder */}
                        <svg viewBox="0 0 100 100" className={styles.badgeSvg} aria-hidden>
                            <path d="M50 6c14 0 26 8 26 20 0 22-26 44-26 44S24 48 24 26C24 14 36 6 50 6z" fill="#fff" />
                        </svg>
                    </div>

                    <div className={styles.textWrap}>
                        <h3 className={styles.title}>Get In Touch</h3>
                        <p className={styles.subtitle}>
                            We’re here to help! Contact us to find answers to the questions you may have.
                        </p>
                    </div>
                </div>

                <div className={styles.right}>
                    <a className={styles.phoneBtn} href={href}>
                        <span className={styles.icon} aria-hidden>
                            {/* small phone icon */}
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.04.66.15 1.31.33 1.93a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.15-1.15a2 2 0 0 1 2.11-.45c.62.18 1.27.29 1.93.33A2 2 0 0 1 22 16.92z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className={styles.phoneText}>{phone}</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
