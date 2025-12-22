'use client';

import { useState } from 'react';
import styles from './SubmitClaim.module.css';

export default function SubmitClaimPage() {
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // backend integration will be added later
    };

    // Handler to format numbers with commas
    const handleAmountChange = (e) => {
        const value = e.target.value.replace(/,/g, ''); // remove existing commas
        if (!isNaN(value)) { // only allow numbers
            const formatted = Number(value).toLocaleString('en-PK'); // format with commas
            setAmount(formatted);
        }
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
                        type="text" // changed to text to allow commas
                        name="amount"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="Amount in PKR"
                        required
                    />
                </div>

                {/* Documents */}
                <div className={styles.field}>
                    <label>Attach Documents</label>

                    <div className={styles.uploadField}>
                        <label htmlFor="cnic">CNIC Copy</label>
                        <input id="cnic" type="file" name="cnic" accept=".jpg,.jpeg,.png,.pdf" />
                    </div>

                    <div className={styles.uploadField}>
                        <label htmlFor="policyCopy">Policy Copy</label>
                        <input id="policyCopy" type="file" name="policyCopy" accept=".jpg,.jpeg,.png,.pdf" />
                    </div>

                    <div className={styles.uploadField}>
                        <label htmlFor="photos">Photos</label>
                        <input id="photos" type="file" name="photos" accept=".jpg,.jpeg,.png" multiple />
                    </div>

                    <div className={styles.uploadField}>
                        <label htmlFor="bills">Bills / Receipts</label>
                        <input id="bills" type="file" name="bills" accept=".jpg,.jpeg,.png,.pdf" multiple />
                    </div>

                    <div className={styles.uploadField}>
                        <label htmlFor="fir">FIR (if any)</label>
                        <input id="fir" type="file" name="fir" accept=".jpg,.jpeg,.png,.pdf" />
                    </div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                    Submit Claim
                </button>
            </form>
        </div>
    );
}
