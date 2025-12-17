"use client";

import { useState } from "react";
import styles from "./career.module.css";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaBriefcase,
    FaChevronDown,
    FaCloudUploadAlt,
} from "react-icons/fa";

export default function CareerPage() {
    const [cityOpen, setCityOpen] = useState(false);
    const [positionOpen, setPositionOpen] = useState(false);
    const [city, setCity] = useState("");
    const [position, setPosition] = useState("");
    const [cv, setCv] = useState(null);

    const handleCvChange = (e) => {
        const file = e.target.files[0];
        if (file) setCv(file);
    };

    const removeCv = () => setCv(null);

    return (
        <section className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Careers at AsaanTakaful</h1>
                <p className={styles.subHeading}>
                    Join a fast-growing, ethical insurance company
                </p>

                <form className={styles.form}>
                    {/* Full Name */}
                    <div className={styles.inputGroup}>
                        <FaUser className={styles.icon} />
                        <input type="text" placeholder="Full Name*" required />
                    </div>

                    {/* Email */}
                    <div className={styles.inputGroup}>
                        <FaEnvelope className={styles.icon} />
                        <input type="email" placeholder="Email Address*" required />
                    </div>

                    {/* Phone */}
                    <div className={styles.inputGroup}>
                        <FaPhone className={styles.icon} />
                        <input type="tel" placeholder="Phone Number*" required />
                    </div>

                    {/* City */}
                    <div
                        className={styles.dropdown}
                        onClick={() => setCityOpen(!cityOpen)}
                    >
                        <FaMapMarkerAlt className={styles.leftIcon} />
                        <span className={styles.dropdownText}>
                            {city || "Select City*"}
                        </span>
                        <FaChevronDown
                            className={`${styles.arrow} ${cityOpen ? styles.rotate : ""}`}
                        />

                        {cityOpen && (
                            <ul className={styles.dropdownMenu}>
                                {["Karachi", "Lahore", "Islamabad"].map((item) => (
                                    <li
                                        key={item}
                                        onClick={() => {
                                            setCity(item);
                                            setCityOpen(false);
                                        }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Position */}
                    <div
                        className={styles.dropdown}
                        onClick={() => setPositionOpen(!positionOpen)}
                    >
                        <FaBriefcase className={styles.leftIcon} />
                        <span className={styles.dropdownText}>
                            {position || "Select Position*"}
                        </span>
                        <FaChevronDown
                            className={`${styles.arrow} ${positionOpen ? styles.rotate : ""}`}
                        />

                        {positionOpen && (
                            <ul className={styles.dropdownMenu}>
                                {["Insurance Advisor", "Sales Executive", "Support Staff"].map(
                                    (item) => (
                                        <li
                                            key={item}
                                            onClick={() => {
                                                setPosition(item);
                                                setPositionOpen(false);
                                            }}
                                        >
                                            {item}
                                        </li>
                                    )
                                )}
                            </ul>
                        )}
                    </div>

                    {/* CV Upload */}
                    {!cv ? (
                        <label className={styles.upload}>
                            <FaCloudUploadAlt />
                            <span>Upload CV</span>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleCvChange}
                            />
                        </label>
                    ) : (
                        <div className={styles.filePreview}>
                            <span className={styles.fileIcon}>📄</span>
                            <p title={cv.name}>{cv.name}</p>
                            <button type="button" onClick={removeCv}>✕</button>
                        </div>
                    )}

                    <button className={styles.button}>Apply Now</button>
                </form>
            </div>
        </section>
    );
}
