'use client';

import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero({
    title = 'Simple کیونکہ تکافل ہے!',
    subtitle = 'Takaful Made Simple, Ethical, and Accessible for Everyone',
    ctaText = 'Buy Now'
}) {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>

                {/* TEXT + BUTTON */}
                <div className={styles.left}>
                    <h1 className={styles.title}>{title}</h1>

                    <p className={styles.tagline}>
                        {subtitle}
                    </p>

                    <button className={styles.bigButton}>
                        {ctaText}
                    </button>
                </div>

                {/* HERO IMAGE */}
                <div className={styles.right}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/hero.jpg"
                            alt="Hero illustration"
                            fill
                            sizes="(min-width: 1024px) 40vw, 90vw"
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
