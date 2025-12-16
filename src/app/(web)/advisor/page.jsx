'use client';

import styles from './AdvisorForm.module.css';

export default function AdvisorPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Backend integration later
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Insurance Advisor Application</h1>
            <p className={styles.subtitle}>
                Please fill the form below to apply as an Asaan Takaful Advisor
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>

                <div className={styles.field}>
                    <label htmlFor="name">Applicant Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder="Enter full name"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="fatherName">Father’s Name</label>
                    <input
                        id="fatherName"
                        type="text"
                        name="fatherName"
                        placeholder="Enter father name"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="cnic">CNIC Number</label>
                    <input
                        id="cnic"
                        type="text"
                        name="cnic"
                        placeholder="00000-0000000-0"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="phone">Mobile Number</label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="+92 3XX XXXXXXX"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="example@email.com"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="address">Current Address</label>
                    <textarea
                        id="address"
                        name="address"
                        rows="3"
                        placeholder="Enter complete address"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="education">Education Level</label>
                    <input
                        id="education"
                        type="text"
                        name="education"
                        placeholder="Bachelor’s / Master’s"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="occupation">Current Occupation</label>
                    <input
                        id="occupation"
                        type="text"
                        name="occupation"
                        placeholder="Your current occupation"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="experience">
                        Experience in Sales / Insurance (if any)
                    </label>
                    <textarea
                        id="experience"
                        name="experience"
                        rows="3"
                        placeholder="Mention experience briefly"
                    />
                </div>

                <div className={styles.uploadSection}>
                    <label>Documents Attached</label>

                    <div className={styles.fileField}>
                        <span>CNIC Copy <small>(Required)</small></span>
                        <input type="file" accept=".jpg,.jpeg,.png,.pdf" required />
                    </div>

                    <div className={styles.fileField}>
                        <span>Passport Size Photo <small>(Required)</small></span>
                        <input type="file" accept=".jpg,.jpeg,.png" required />
                    </div>

                    <div className={styles.fileField}>
                        <span>Resume / CV <small>(Optional)</small></span>
                        <input type="file" accept=".pdf,.doc,.docx" />
                    </div>
                </div>


                <button type="submit" className={styles.submitBtn}>
                    Submit Application
                </button>

            </form>
        </div>
    );
}
