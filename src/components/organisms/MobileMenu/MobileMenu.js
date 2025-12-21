'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './MobileMenu.module.css';

export default function MobileMenu({ open, onClose }) {
    const [active, setActive] = useState(null);

    const toggle = (name) => {
        setActive(active === name ? null : name);
    };

    return (
        <div className={`${styles.overlay} ${open ? styles.show : ''}`} onClick={onClose}>
            <aside className={styles.sidebar} onClick={(e) => e.stopPropagation()}>

                <button className={styles.close} onClick={onClose}>✕</button>

                <button
                    className={`${styles.sectionBtn} ${active === 'company' ? styles.active : ''}`}
                    onClick={() => toggle('company')}
                >
                    Company <span className={styles.arrow}>▾</span>
                </button>

                <div className={`${styles.sub} ${active === 'company' ? styles.open : ''}`}>
                    <Link href="#">What we do</Link>
                    <Link href="/career">Careers</Link>
                    <Link href="#">Our Leaders</Link>
                    <Link href="#">Partners</Link>
                </div>

                <button
                    className={`${styles.sectionBtn} ${active === 'products' ? styles.active : ''}`}
                    onClick={() => toggle('products')}
                >
                    Products <span className={styles.arrow}>▾</span>
                </button>

                <div className={`${styles.sub} ${active === 'products' ? styles.open : ''}`}>
                    <Link href="#">Motor Takaful</Link>
                    <Link href="#">Health Takaful</Link>
                    <Link href="#">Travel Takaful</Link>
                </div>

                <Link href="/submit-claim" className={styles.link}>Submit Claim</Link>
                <Link href="/advisor" className={styles.link}>Advisor</Link>
            </aside>
        </div>
    );
}
