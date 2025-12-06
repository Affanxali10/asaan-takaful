'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>AsaanTakaful</Link>

                {/* Navigation */}
                <nav className={styles.nav} aria-label="Main navigation">
                    <ul className={styles.navList}>
                        {/* Company Dropdown */}
                        <li className={styles.dropdown}>
                            <Link href="#" className={styles.navLink} aria-haspopup="true">Company</Link>
                            <ul className={styles.dropdownMenu}>
                                <li><Link href="#" className={styles.dropdownItem}>What we do</Link></li>
                                <li><Link href="#" className={styles.dropdownItem}>Careers</Link></li>
                                <li><Link href="#" className={styles.dropdownItem}>Our Leaders</Link></li>
                                <li><Link href="#" className={styles.dropdownItem}>Partners</Link></li>
                            </ul>
                        </li>

                        {/* Products Dropdown */}
                        <li className={styles.dropdown}>
                            <Link href="#" className={styles.navLink} aria-haspopup="true">Products</Link>
                            <ul className={styles.dropdownMenu}>
                                <li><Link href="#" className={styles.dropdownItem}>Motor Takaful</Link></li>
                                <li><Link href="#" className={styles.dropdownItem}>Health Takaful</Link></li>
                                <li><Link href="#" className={styles.dropdownItem}>Travel Takaful</Link></li>
                            </ul>
                        </li>

                        {/* Partners Dropdown */}
                        <li className={styles.dropdown}>
                            <Link href="#" className={styles.navLink} aria-haspopup="true">Partners</Link>
                            <ul className={styles.dropdownMenu}>
                                <li><Link href="#" className={styles.dropdownItem}>Jazz</Link></li>
                                <li><Link href="#" className={styles.dropdownItem}>EasyPaisa</Link></li>
                                <li><Link href="#" className={styles.dropdownItem}>Ufone</Link></li>
                            </ul>
                        </li>

                        {/* Single Link */}
                        <li>
                            <Link href="#" className={styles.navLink}>Submit Claim</Link>
                        </li>
                    </ul>
                </nav>

                {/* Actions */}
                <div className={styles.actions}>
                    <button className={styles.cta}>Advisor</button>
                    <select className={styles.lang} aria-label="Select language">
                        <option>INT</option>
                        <option>ENG</option>
                    </select>
                </div>
            </div>
        </header>
    );
}
