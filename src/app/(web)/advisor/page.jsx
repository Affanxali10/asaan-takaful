'use client';

import styles from './AdvisorForm.module.css';
import Input from '@/components/atoms/Input';
import Textarea from '@/components/atoms/Textarea';
import Button from '@/components/atoms/Button';

export default function SubmitClaimPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // backend will handle later
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Insurance Claim – Short Form</h1>
            <p className={styles.subtitle}>
                Please fill the details below to submit your claim
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>

                {/* Policyholder Info */}
                <Input
                    label="Policyholder Name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Enter full name"
                />

                <Input
                    label="Policy Number"
                    type="text"
                    name="policy-number"
                    autoComplete="off"
                    placeholder="Enter policy number"
                />

                <Input
                    label="Contact No"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+92 3XX XXXXXXX"
                />

                <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="example@email.com"
                />

                <Input
                    label="Date of Incident"
                    type="date"
                    name="incident-date"
                    autoComplete="off"
                />

                <Textarea
                    label="Place of Incident"
                    name="incident-place"
                    autoComplete="off"
                    placeholder="Enter location of incident"
                />

                <Textarea
                    label="Brief Description of Loss"
                    name="description"
                    autoComplete="off"
                    placeholder="Describe the incident briefly"
                />

                <Input
                    label="Estimated Loss (PKR)"
                    type="number"
                    name="estimated-loss"
                    autoComplete="off"
                    placeholder="Enter estimated amount"
                />

                {/* Documents */}
                <div className={styles.uploadSection}>
                    <label>Documents Attached</label>

                    <label className={styles.checkbox}>
                        <input type="checkbox" name="cnic" /> CNIC Copy
                    </label>

                    <label className={styles.checkbox}>
                        <input type="checkbox" name="policy-copy" /> Policy Copy
                    </label>

                    <label className={styles.checkbox}>
                        <input type="checkbox" name="photos" /> Photos
                    </label>

                    <label className={styles.checkbox}>
                        <input type="checkbox" name="fir" /> FIR (if any)
                    </label>
                </div>

                <Button type="submit">Submit Claim</Button>
            </form>
        </div>
    );
}
