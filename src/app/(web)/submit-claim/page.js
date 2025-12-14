'use client';

import styles from './SubmitClaim.module.css';

export default function SubmitClaimPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // backend integration will be added later
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Insurance Claim – Short Form</h1>
            <p className={styles.subtitle}>
                Please fill out the form below to submit your insurance claim.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
                {/* Policyholder Name */}
                <div className={styles.field}>
                    <label htmlFor="name">Policyholder Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder="Enter full name"
                        required
                    />
                </div>

                {/* Policy Number */}
                <div className={styles.field}>
                    <label htmlFor="policyNumber">Policy Number</label>
                    <input
                        id="policyNumber"
                        type="text"
                        name="policyNumber"
                        autoComplete="off"
                        placeholder="Enter policy number"
                        required
                    />
                </div>

                {/* Contact Number (AUTOFILL FIXED) */}
                <div className={styles.field}>
                    <label htmlFor="phone">Contact No.</label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        inputMode="numeric"
                        placeholder="+92 3XX XXXXXXX"
                        required
                    />
                </div>

                {/* Date & Place */}
                <div className={styles.field}>
                    <label htmlFor="incident">Date & Place of Incident</label>
                    <input
                        id="incident"
                        type="text"
                        name="incident"
                        autoComplete="off"
                        placeholder="Date and location"
                        required
                    />
                </div>

                {/* Description */}
                <div className={styles.field}>
                    <label htmlFor="description">Brief Description of Loss</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        placeholder="Describe the incident briefly"
                        required
                    />
                </div>

                {/* Estimated Loss */}
                <div className={styles.field}>
                    <label htmlFor="amount">Estimated Loss (PKR)</label>
                    <input
                        id="amount"
                        type="number"
                        name="amount"
                        autoComplete="off"
                        placeholder="Amount in PKR"
                        required
                    />
                </div>

                {/* Documents */}
                <div className={styles.field}>
                    <label>Documents Attached</label>
                    <div className={styles.checkboxes}>
                        <label><input type="checkbox" name="docs" /> CNIC</label>
                        <label><input type="checkbox" name="docs" /> Policy Copy</label>
                        <label><input type="checkbox" name="docs" /> Photos</label>
                        <label><input type="checkbox" name="docs" /> Bills</label>
                        <label><input type="checkbox" name="docs" /> FIR (if any)</label>
                    </div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                    Submit Claim
                </button>
            </form>
        </div>
    );
}
