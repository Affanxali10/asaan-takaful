'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.inner}>

                    {/* ===== MOBILE HEADER ===== */}
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

                        {/* Right: INT only */}
                        <div className={styles.mobileRight}>
                            <div className={styles.langDropdown}>
                                <div className={styles.trigger} tabIndex={0}>
                                    <span>INT</span>
                                    <span className={styles.caret}>▼</span>
                                </div>

                                <ul className={styles.langMenu}>
                                    <li className={styles.langItem}>
                                        <Link href="/" className={styles.langLink}>
                                            <img src="/pak.png" alt="Pakistan" className={styles.flagIcon} />
                                            PAK
                                        </Link>
                                    </li>
                                    <li className={styles.langItem}>
                                        <Link href="/uae" className={styles.langLink}>
                                            <img src="/uae.png" alt="UAE" className={styles.flagIcon} />
                                            UAE
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ===== DESKTOP NAVBAR (UNCHANGED) ===== */}
                    <Link href="/" className={styles.logo}>
                        AsaanTakaful
                    </Link>

                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li className={styles.dropdown}>
                                <button className={styles.navLink}>Company</button>
                                <ul className={styles.dropdownMenu}>
                                    <li><Link href="#" className={styles.dropdownItem}>What we do</Link></li>
                                    <li><Link href="/career" className={styles.dropdownItem}>Careers</Link></li>
                                    <li><Link href="#" className={styles.dropdownItem}>Our Leaders</Link></li>
                                    <li><Link href="#" className={styles.dropdownItem}>Partners</Link></li>
                                </ul>
                            </li>

                            <li className={styles.dropdown}>
                                <button className={styles.navLink}>Products</button>
                                <ul className={styles.dropdownMenu}>
                                    <li><Link href="#" className={styles.dropdownItem}>Motor Takaful</Link></li>
                                    <li><Link href="#" className={styles.dropdownItem}>Health Takaful</Link></li>
                                    <li><Link href="#" className={styles.dropdownItem}>Travel Takaful</Link></li>
                                </ul>
                            </li>

                            <li><Link href="#" className={styles.navLink}>Partners</Link></li>
                            <li><Link href="/submit-claim" className={styles.navLink}>Submit Claim</Link></li>
                        </ul>
                    </nav>

                    <div className={styles.actions}>
                        <Link href="/advisor" className={styles.cta}>Advisor</Link>

                        <div className={styles.langDropdown}>
                            <div className={styles.trigger} tabIndex={0}>
                                INT <span className={styles.caret}>▼</span>
                            </div>
                            <ul className={styles.langMenu}>
                                <li className={styles.langItem}>
                                    <Link href="/" className={styles.langLink}>
                                        <img src="/pak.png" className={styles.flagIcon} /> PAK
                                    </Link>
                                </li>
                                <li className={styles.langItem}>
                                    <Link href="/uae" className={styles.langLink}>
                                        <img src="/uae.png" className={styles.flagIcon} /> UAE
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </header>

            <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
        </>
    );
}
