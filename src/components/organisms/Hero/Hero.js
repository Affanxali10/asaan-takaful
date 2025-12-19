'use client';

import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero({
    title = 'Your Safety, Our Priority',
    subtitle = 'ہے Simple کیونکہ تکافل !',
    ctaText = 'Buy Now'
}) {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.left}>
                    <h1 className={styles.title}>{title}</h1>

                    <p className={styles.tagline}>
                        {subtitle}
                    </p>

                    <div className={styles.singleButtonWrapper}>
                        <button className={styles.bigButton}>{ctaText}</button>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/hero.jpg"
                            alt="Hero"
                            fill
                            sizes="(min-width: 1024px) 40vw, 80vw"
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
