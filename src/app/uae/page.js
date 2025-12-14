'use client';

import styles from './uae.module.css';

export default function UAEPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>

                {/* Logos */}
                <div className={styles.logoRow}>
                    <img
                        src="/logo.png"
                        alt="AsaanTakaful"
                        className={styles.mainLogo}
                    />

                    <img
                        src="/uae1.png"
                        alt="UAE"
                        className={styles.uaeFlag}
                    />
                </div>

                {/* Text */}
                <h1 className={styles.heading}>Coming Soon in UAE 🇦🇪</h1>
                <p className={styles.subText}>
                    We are preparing to launch AsaanTakaful in Dubai & across UAE.
                </p>

            </div>
        </div>
    );
}
