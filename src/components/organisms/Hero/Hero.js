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
                    <h1 className={styles.title} dir="rtl">
                        کیونکہ تکافل <span className={styles.eng}>Simple</span> ہے!
                    </h1>



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
                        <div className={styles.cardStack}>
                            {/* BACK / SILVER CARD */}
                            <Image
                                src="/silverBanner.png"
                                alt="silver Card"
                                fill
                                sizes="(min-width: 1024px) 40vw, 90vw"
                                className={styles.cardBack}
                                priority
                            />

                            {/* FRONT / GOLD CARD */}
                            <Image
                                src="/goldBanner.png"
                                alt="Gold Card"
                                fill
                                sizes="(min-width: 1024px) 40vw, 90vw"
                                className={styles.cardFront}
                                priority
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
