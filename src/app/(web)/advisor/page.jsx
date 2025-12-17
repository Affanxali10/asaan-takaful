'use client';

import { useState } from 'react';
import styles from './AdvisorForm.module.css';

export default function AdvisorPage() {
    const [files, setFiles] = useState({
        cnic: null,
        photo: null,
        resume: null,
    });

    const handleFileChange = (e, key) => {
        const file = e.target.files[0];
        if (file) {
            setFiles(prev => ({ ...prev, [key]: file }));
        }
    };

    const removeFile = (key) => {
        setFiles(prev => ({ ...prev, [key]: null }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // backend integration later
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Insurance Advisor Application</h1>
            <p className={styles.subtitle}>
                Please fill the form below to apply as an Asaan Takaful Advisor
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>

                <div className={styles.field}>
                    <label>Applicant Name</label>
                    <input type="text" placeholder="Enter full name" required />
                </div>

                <div className={styles.field}>
                    <label>Father’s Name</label>
                    <input type="text" placeholder="Enter father name" required />
                </div>

                <div className={styles.field}>
                    <label>CNIC Number</label>
                    <input type="text" placeholder="00000-0000000-0" required />
                </div>

                <div className={styles.field}>
                    <label>Mobile Number</label>
                    <input type="tel" placeholder="+92 3XX XXXXXXX" required />
                </div>

                <div className={styles.field}>
                    <label>Email Address</label>
                    <input type="email" placeholder="example@email.com" required />
                </div>

                <div className={styles.field}>
                    <label>Current Address</label>
                    <textarea placeholder="Enter complete address" required />
                </div>

                <div className={styles.field}>
                    <label>Education Level</label>
                    <input type="text" placeholder="Bachelor’s / Master’s" required />
                </div>

                <div className={styles.field}>
                    <label>Current Occupation</label>
                    <input type="text" placeholder="Your current occupation" required />
                </div>

                <div className={styles.field}>
                    <label>Experience in Sales / Insurance (if any)</label>
                    <textarea placeholder="Mention experience briefly" />
                </div>

                {/* Upload Section */}
                <div className={styles.uploadSection}>
                    <label>Documents Attached</label>

                    {/* CNIC */}
                    <div className={styles.fileField}>
                        <span>CNIC Copy <small>(Required)</small></span>

                        {!files.cnic ? (
                            <input
                                type="file"
                                accept=".jpg,.jpeg,.png,.pdf"
                                onChange={(e) => handleFileChange(e, 'cnic')}
                                required
                            />
                        ) : (
                            <div className={styles.filePreview}>
                                {files.cnic.type.startsWith('image/') ? (
                                    <img src={URL.createObjectURL(files.cnic)} alt="CNIC" />
                                ) : (
                                    <span className={styles.fileIcon}>📄</span>
                                )}
                                <p title={files.cnic.name}>{files.cnic.name}</p>
                                <button type="button" onClick={() => removeFile('cnic')}>✕</button>
                            </div>
                        )}
                    </div>

                    {/* Photo */}
                    <div className={styles.fileField}>
                        <span>Passport Size Photo <small>(Required)</small></span>

                        {!files.photo ? (
                            <input
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                onChange={(e) => handleFileChange(e, 'photo')}
                                required
                            />
                        ) : (
                            <div className={styles.filePreview}>
                                <img src={URL.createObjectURL(files.photo)} alt="Photo" />
                                <p title={files.photo.name}>{files.photo.name}</p>
                                <button type="button" onClick={() => removeFile('photo')}>✕</button>
                            </div>
                        )}
                    </div>

                    {/* Resume */}
                    <div className={styles.fileField}>
                        <span>Resume / CV <small>(Optional)</small></span>

                        {!files.resume ? (
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => handleFileChange(e, 'resume')}
                            />
                        ) : (
                            <div className={styles.filePreview}>
                                <span className={styles.fileIcon}>📄</span>
                                <p title={files.resume.name}>{files.resume.name}</p>
                                <button type="button" onClick={() => removeFile('resume')}>✕</button>
                            </div>
                        )}
                    </div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                    Submit Application
                </button>
            </form>
        </div>
    );
}
