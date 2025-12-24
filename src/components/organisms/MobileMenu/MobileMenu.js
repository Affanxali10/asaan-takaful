'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './MobileMenu.module.css';

export default function MobileMenu({ open: initialOpen, onClose }) {
    const [active, setActive] = useState(null);

    const toggle = (name) => {
        setActive(active === name ? null : name);
    };

    // Lock scroll on body when menu is open
    useEffect(() => {
        if (initialOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [initialOpen]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setActive(null); // close any open submenu
            onClose(); // close whole sidebar
        }
    };

    return (
        <div
            className={`${styles.overlay} ${initialOpen ? styles.show : ''}`}
            onClick={handleOverlayClick}
        >
            <aside
                className={`${styles.sidebar} ${initialOpen ? styles.openSidebar : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Company Section */}
                <button
                    className={`${styles.sectionBtn} ${active === 'company' ? styles.active : ''}`}
                    onClick={(e) => { e.stopPropagation(); toggle('company'); }}
                >
                    Company <span className={styles.arrow}>▾</span>
                </button>
                <div className={`${styles.sub} ${active === 'company' ? styles.open : ''}`}>
                    <Link href="#" onClick={(e) => e.stopPropagation()}>What we do</Link>
                    <Link href="/career" onClick={(e) => e.stopPropagation()}>Careers</Link>
                    <Link href="#" onClick={(e) => e.stopPropagation()}>Our Leaders</Link>
                    <Link href="#" onClick={(e) => e.stopPropagation()}>Partners</Link>
                </div>

                {/* Products Section */}
                <button
                    className={`${styles.sectionBtn} ${active === 'products' ? styles.active : ''}`}
                    onClick={(e) => { e.stopPropagation(); toggle('products'); }}
                >
                    Products <span className={styles.arrow}>▾</span>
                </button>
                <div className={`${styles.sub} ${active === 'products' ? styles.open : ''}`}>
                    <Link href="#" onClick={(e) => e.stopPropagation()}>Motor Takaful</Link>
                    <Link href="#" onClick={(e) => e.stopPropagation()}>Health Takaful</Link>
                    <Link href="#" onClick={(e) => e.stopPropagation()}>Travel Takaful</Link>
                </div>

                {/* Other Links */}
                <Link href="/submit-claim" className={styles.link} onClick={(e) => e.stopPropagation()}>Submit Claim</Link>
                <Link href="/advisor" className={styles.link} onClick={(e) => e.stopPropagation()}>Advisor</Link>
            </aside>
        </div>
    );
}
