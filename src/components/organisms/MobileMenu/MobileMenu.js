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
        <div className={`${styles.overlay} ${open ? styles.show : ''}`}>
            <aside className={styles.sidebar}>

                <button className={styles.close} onClick={onClose}>✕</button>

                <div className={styles.section}>
                    <button onClick={() => toggle('company')}>
                        Company <span>▾</span>
                    </button>
                    {active === 'company' && (
                        <div className={styles.sub}>
                            <Link href="#">What we do</Link>
                            <Link href="/career">Careers</Link>
                            <Link href="#">Our Leaders</Link>
                            <Link href="#">Partners</Link>
                        </div>
                    )}
                </div>

                <div className={styles.section}>
                    <button onClick={() => toggle('products')}>
                        Products <span>▾</span>
                    </button>
                    {active === 'products' && (
                        <div className={styles.sub}>
                            <Link href="#">Motor Takaful</Link>
                            <Link href="#">Health Takaful</Link>
                            <Link href="#">Travel Takaful</Link>
                        </div>
                    )}
                </div>

                <Link href="/submit-claim" className={styles.link}>Submit Claim</Link>
                <Link href="/advisor" className={styles.link}>Advisor Login</Link>

            </aside>
        </div>
    );
}
