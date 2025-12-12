'use client';
import styles from './TrendingNewsSection.module.css';

export default function TrendingNewsSection() {
    const newsItems = [
        {
            img: '/news/news1.jpg',
            title: 'Takaful Market Expected to Grow 15% in 2025',
            desc: 'Rising demand for ethical insurance solutions boosts Takaful growth globally.',
            link: 'https://example.com/news1'
        },
        {
            img: '/news/news2.jpg',
            title: 'Digital Takaful Platforms Are Transforming Insurance',
            desc: 'Online takaful is becoming the new standard with speed, transparency, and accessibility.',
            link: 'https://example.com/news2'
        },
        {
            img: '/news/news3.jpg',
            title: 'Pakistan’s Insurance Sector Sees Strong Expansion',
            desc: 'New regulations and awareness campaigns are encouraging people toward protection plans.',
            link: 'https://example.com/news3'
        }
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What's Making Waves</h2>

            <div className={styles.cardsWrapper}>
                {newsItems.map((item, i) => (
                    <div key={i} className={styles.cardOuter}>
                        <div className={styles.card}>

                            <div className={styles.imgWrapper}>
                                <img src={item.img} alt={item.title} />
                            </div>

                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>

                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <button className={styles.btn}>Learn More</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
