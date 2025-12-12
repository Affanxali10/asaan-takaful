'use client';

import styles from './ExpertiseSection.module.css';

export default function ExpertiseSection() {
    const items = [
        {
            title: "Swift Claim",
            desc: "Fast claims processing across all channels, settled within 48 hours, with instant support for all needs..",
        },
        {
            title: "Tech Integration",
            desc: "Seamless wallet and checkout integration with distribution partners, enhancing user experience and efficiency.",
        },
        {
            title: "Affordable Product",
            desc: "Simplified products with pay-as-you-go premiums, delivering superior value and accessibility for every customer..",
        },
        {
            title: "24/7 Customer Support",
            desc: "", // leave empty for now
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>Our Expertise</h2>

                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <h3 className={styles.title}>{item.title}</h3>

                            {item.desc ? (
                                <p className={styles.desc}>{item.desc}</p>
                            ) : (
                                <p className={styles.placeholder}>
                                    Description coming soon...
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
