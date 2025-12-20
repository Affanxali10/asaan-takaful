'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import MobileMenu from '../MobileMenu/MobileMenu'; // ✅ ADD

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false); // ✅ ADD

    return (
        <>
            <header className={styles.header}>
                <div className={styles.inner}>

                    {/* ===================== MOBILE HEADER ===================== */}
                    <div className={styles.mobileHeader}>
                        {/* Left: Hamburger */}
                        <button
                            className={styles.hamburger}
                            onClick={() => setMobileOpen(true)}
                            aria-label="Open menu"
                        >
                            ☰
                        </button>

                        {/* Center: Logo */}
                        <Link href="/" className={styles.logo}>
                            AsaanTakaful
                        </Link>

                        {/* Right: Advisor + INT */}
                        <div className={styles.actionsMobile}>
                            <Link href="/advisor" className={styles.cta}>
                                Advisor
                            </Link>

                            <div className={styles.langDropdown}>
                                <div className={styles.trigger} tabIndex={0}>
                                    <span className={styles.langLabel}>INT</span>
                                    <span className={styles.caret}>▼</span>
                                </div>

                                <ul className={styles.langMenu}>
                                    <li className={styles.langItem}>
                                        <Link href="/" className={styles.langLink}>
                                            <img src="/pak.png" alt="Pakistan" className={styles.flagIcon} />
                                            <span>PAK</span>
                                        </Link>
                                    </li>
                                    <li className={styles.langItem}>
                                        <Link href="/uae" className={styles.langLink}>
                                            <img src="/uae.png" alt="UAE" className={styles.flagIcon} />
                                            <span>UAE</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* ===================== END MOBILE HEADER ===================== */}

                    {/* ===================== DESKTOP NAVIGATION ===================== */}
                    <nav className={styles.nav} aria-label="Main navigation">
                        <ul className={styles.navList}>

                            {/* Company Dropdown */}
                            <li className={styles.dropdown}>
                                <button
                                    type="button"
                                    className={styles.navLink}
                                    aria-haspopup="true"
                                >
                                    Company
                                </button>

                                <ul className={styles.dropdownMenu}>
                                    <li><Link href="#" className={styles.dropdownItem}>What we do</Link></li>
                                    <li><Link href="/career" className={styles.dropdownItem}>Careers</Link></li>
                                    <li><Link href="#" className={styles.dropdownItem}>Our Leaders</Link></li>
                                    <li><Link href="#" className={styles.dropdownItem}>Partners</Link></li>
                                </ul>
                            </li>

                            {/* Products Dropdown */}
                            <li className={styles.dropdown}>
                                <button
                                    type="button"
                                    className={styles.navLink}
                                    aria-haspopup="true"
                                >
                                    Products
                                </button>

                                <ul className={styles.dropdownMenu}>
                                    <li><Link href="#" className={styles.dropdownItem}>Motor Takaful</Link></li>
                                    <li><Link href="#" className={styles.dropdownItem}>Health Takaful</Link></li>
                                    <li><Link href="#" className={styles.dropdownItem}>Travel Takaful</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link href="#" className={styles.navLink}>
                                    Partners
                                </Link>
                            </li>

                            <li>
                                <Link href="/submit-claim" className={styles.navLink}>
                                    Submit Claim
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Desktop Actions */}
                    <div className={styles.actions}>
                        <Link href="/advisor" className={styles.cta}>
                            Advisor
                        </Link>

                        <div className={styles.langDropdown}>
                            <div className={styles.trigger} tabIndex={0}>
                                <span className={styles.langLabel}>INT</span>
                                <span className={styles.caret}>▼</span>
                            </div>

                            <ul className={styles.langMenu}>
                                <li className={styles.langItem}>
                                    <Link href="/" className={styles.langLink}>
                                        <img src="/pak.png" alt="Pakistan" className={styles.flagIcon} />
                                        <span>PAK</span>
                                    </Link>
                                </li>
                                <li className={styles.langItem}>
                                    <Link href="/uae" className={styles.langLink}>
                                        <img src="/uae.png" alt="UAE" className={styles.flagIcon} />
                                        <span>UAE</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </header>

            {/* ✅ MOBILE SIDEBAR */}
            <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
        </>
    );
}
