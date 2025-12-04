'use client';

import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero({ title = 'Your Safety, Our Priority', subtitle = 'Covering 3 Million+ Lives, Asaantakaful Leads the Way!', ctaText = 'Know More' }) {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.subtitle}>
                        <span>{subtitle}</span>
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.primary} aria-label={ctaText}>
                            <span className={styles.primaryLabel}>{ctaText}</span>
                            <span className={styles.primaryIcon} aria-hidden="true">→</span>
                        </button>

                        <button className={styles.secondary} aria-label="Buy Now">
                            <span className={styles.secondaryLabel}>Buy Now</span>
                        </button>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.imageWrapper}>
                        <Image src="/hero.jpg" alt="Hero" fill sizes="(min-width: 1024px) 40vw, 80vw" style={{ objectFit: 'contain' }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
