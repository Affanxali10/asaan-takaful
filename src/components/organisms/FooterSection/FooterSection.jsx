'use client';

import Link from 'next/link';
import styles from './FooterSection.module.css';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
    FaEnvelope,
    FaPhoneAlt
} from 'react-icons/fa';
import { useCallback } from 'react';

export default function FooterSection() {
    /**
     * Robust smooth scroll:
     * - prevent default nav
     * - try to find the element immediately
     * - if not found, poll a few times (in case content renders later)
     * - detect a fixed header height and scroll offset
     * - pick window or a scrollable container (main, #__next, etc.)
     */
    const handleScrollTo = useCallback((e, id) => {
        // allow open-in-new-tab with modifier keys
        if (e && (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)) return;

        if (e && e.preventDefault) e.preventDefault();

        const debug = (msg, obj) => {
            // Uncomment to debug in console:
            // console.debug('[FooterScroll]', msg, obj || '');
        };

        const findElement = () => {
            let el = document.getElementById(id);
            if (!el) el = document.querySelector(`[id="${id}"]`);
            if (!el) el = document.querySelector(`a[name="${id}"]`);
            return el;
        };

        const findContainer = () => {
            const candidates = [
                'main',
                '[role="main"]',
                '#__next',
                '#root',
                '.page-content',
                '.content'
            ];
            for (const sel of candidates) {
                const c = document.querySelector(sel);
                if (c && c.scrollHeight > c.clientHeight + 10) {
                    debug('found scroll container', sel);
                    return c;
                }
            }
            debug('no inner scroll container found; using window');
            return window;
        };

        const getHeaderOffset = () => {
            const headerSelectors = [
                'header',
                '[role="banner"]',
                '.site-header',
                '.navbar',
                '.topbar',
                '.Header'
            ];
            let headerOffset = 0;
            for (const s of headerSelectors) {
                const h = document.querySelector(s);
                if (h) {
                    const style = getComputedStyle(h);
                    if (style && (style.position === 'fixed' || style.position === 'sticky')) {
                        headerOffset = Math.max(headerOffset, Math.round(h.getBoundingClientRect().height));
                    }
                }
            }
            debug('headerOffset', headerOffset);
            return headerOffset;
        };

        const scrollToEl = (el, container, headerOffset) => {
            const elRect = el.getBoundingClientRect();

            if (container === window) {
                const targetY = window.pageYOffset + elRect.top - headerOffset;
                debug('scrollTo window Y', targetY);
                window.scrollTo({ top: Math.max(0, Math.round(targetY)), behavior: 'smooth' });
            } else {
                const cRect = container.getBoundingClientRect();
                const current = container.scrollTop;
                const offsetTopInContainer = elRect.top - cRect.top + current - headerOffset;
                debug('scrollTo container TOP', offsetTopInContainer, container);
                container.scrollTo({ top: Math.max(0, Math.round(offsetTopInContainer)), behavior: 'smooth' });
            }

            // update url hash without jumping
            try {
                history.replaceState(null, '', `#${id}`); // replaceState shows hash but doesn't add history entry
            } catch (err) {
                // fallback to avoid uncaught errors in some older browsers
                location.hash = id;
            }

        };

        // Try immediate find first
        let el = findElement();
        const container = findContainer();
        const headerOffset = getHeaderOffset();

        if (el) {
            debug('element found immediately', id);
            scrollToEl(el, container, headerOffset);
            return;
        }

        // If element not immediately found, poll for it (in case it mounts after click)
        const maxAttempts = 12; // ~1200ms
        let attempts = 0;
        const interval = 100;

        debug('element not found, starting poll for', id);

        const timer = setInterval(() => {
            attempts += 1;
            el = findElement();
            debug(`poll attempt ${attempts}`, !!el);

            if (el) {
                clearInterval(timer);
                debug('element found via poll', id);
                // re-evaluate container & header offset in case layout changed
                const finalContainer = findContainer();
                const finalHeaderOffset = getHeaderOffset();
                // small timeout to let layout settle
                setTimeout(() => scrollToEl(el, finalContainer, finalHeaderOffset), 20);
                return;
            }

            if (attempts >= maxAttempts) {
                clearInterval(timer);
                debug('element not found after polling, setting hash only', id);
                // fallback: set hash so future navigation can use it
                try {
                    history.pushState(null, '', `#${id}`);
                } catch (err) {
                    location.hash = id;
                }
            }
        }, interval);
    }, []);

    return (
        <footer className={styles.footer} role="contentinfo" aria-label="Site footer">
            <div className={styles.inner}>

                {/* LEFT: logo / decorative */}
                <div className={styles.left}>
                    <div className={styles.logoWrap}>
                        <div className={styles.badge}>
                            <svg viewBox="0 0 100 100" className={styles.badgeSvg} aria-hidden>
                                <path d="M50 6c14 0 26 8 26 20 0 22-26 44-26 44S24 48 24 26C24 14 36 6 50 6z" fill="#fff" />
                            </svg>
                        </div>
                    </div>

                    <div className={styles.brandBlock}>
                        <div className={styles.brandName}>AsaanTakaful</div>
                        <div className={styles.brandTag}>Simplifying Insurance</div>
                        <div className={styles.copyLeft}>
                            © {new Date().getFullYear()} AsaanTakaful. All Rights Reserved.
                        </div>
                    </div>
                </div>

                {/* MIDDLE: Links */}
                <div className={styles.mid}>
                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Company</h4>
                        <ul className={styles.list}>
                            <li>
                                <a
                                    href="#statistics"
                                    className={styles.hoverLink}
                                    onClick={(e) => handleScrollTo(e, 'statistics')}
                                >
                                    Statistics
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#expertise"
                                    className={styles.hoverLink}
                                    onClick={(e) => handleScrollTo(e, 'expertise')}
                                >
                                    Our Expertise
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#leaders"
                                    className={styles.hoverLink}
                                    onClick={(e) => handleScrollTo(e, 'leaders')}
                                >
                                    Our Leaders
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#trending"
                                    className={styles.hoverLink}
                                    onClick={(e) => handleScrollTo(e, 'trending')}
                                >
                                    What’s Making Waves
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>News</h4>
                        <ul className={styles.list}>
                            <li><Link href="/featured" className={styles.hoverLink}>Featured</Link></li>
                            <li><Link href="/press" className={styles.hoverLink}>Press Release</Link></li>
                            <li><Link href="/blog" className={styles.hoverLink}>Blog / Articles</Link></li>
                            <li><Link href="/culture" className={styles.hoverLink}>Culture</Link></li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT: Address + Contact + Social */}
                <div className={styles.right}>
                    <h4 className={styles.colTitle}>Address</h4>

                    <address className={`${styles.address} ${styles.hoverAddress}`}>
                        Office Building : GPC 2, Ground Floor, Block 3, Johar Karachi<br />
                    </address>

                    <div className={styles.contactRow}>
                        <FaPhoneAlt className={styles.contactIcon} />
                        <a className={`${styles.contactLink} ${styles.hoverAddress}`} href="tel:03462127642">0346-2127642</a>
                    </div>

                    <div className={styles.contactRow}>
                        <FaEnvelope className={styles.contactIcon} />
                        <a className={`${styles.contactLink} ${styles.hoverAddress}`} href="mailto:Miqb2742@gmail.com">Miqb2742@gmail.com</a>
                    </div>

                    <div className={styles.social}>
                        <a href="#" aria-label="LinkedIn" className={styles.socialLink}><FaLinkedinIn className={styles.socialIcon} /></a>
                        <a href="#" aria-label="Facebook" className={styles.socialLink}><FaFacebookF className={styles.socialIcon} /></a>
                        <a href="#" aria-label="Instagram" className={styles.socialLink}><FaInstagram className={styles.socialIcon} /></a>
                        <a href="#" aria-label="YouTube" className={styles.socialLink}><FaYoutube className={styles.socialIcon} /></a>
                        <a href="#" aria-label="WhatsApp" className={styles.socialLink}><FaWhatsapp className={styles.socialIcon} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
