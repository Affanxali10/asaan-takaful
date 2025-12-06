'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/organisms/Navbar/Navbar';
import Hero from '@/components/organisms/Hero/Hero';

import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Textarea from '@/components/atoms/Textarea';
import Dropdown from '@/components/molecules/Dropdown';
import Tabs from '@/components/molecules/Tabs';
import Modal from '@/components/organisms/Modal';
import DynamicTable from '@/components/organisms/DynamicTable';
import styles from './Home.module.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    country: null,
  });
  const [errors, setErrors] = useState({});

  // Dropdown options
  const countryOptions = [
    { value: 'pk', label: 'Pakistan' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
  ];

  // Table data
  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', country: 'Pakistan', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', country: 'United States', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', country: 'United Kingdom', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', country: 'Canada', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', country: 'Australia', status: 'Pending' },
  ];

  const tableColumns = [
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'country', title: 'Country' },
    {
      key: 'status',
      title: 'Status',
      renderItem: ({ item }) => (
        <span className={item === 'Active' ? styles.activeStatus : styles.inactiveStatus}>
          {item}
        </span>
      ),
    },
  ];

  // Pagination logic - handled externally
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return tableData.slice(startIndex, endIndex);
  }, [currentPage, pageSize]);

  const totalPages = Math.ceil(tableData.length / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleDropdownChange = (selectedOption) => {
    setFormData((prev) => ({ ...prev, country: selectedOption }));
    if (errors.country) {
      setErrors((prev) => ({ ...prev, country: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    if (!formData.country) {
      newErrors.country = 'Country is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', message: '', country: null });
    setErrors({});
  };

  const handleTableRowClick = (row) => {
    alert(`Clicked on: ${row.name} (${row.email})`);
  };

  return (
    <div className={styles.page}>
      {/* NAVBAR + HERO */}
      <Navbar />
      <Hero
        title="Your Safety, Our Priority"
        subtitle="Covering 3 Million+ Lives, Asaantakaful Leads the Way!"
        ctaText="Know More"
      />


      {/* MAIN SHOWCASE CONTENT (existing) */}
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Component Showcase</h1>
          <p className={styles.subtitle}>All components in action</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Atoms: Buttons</h2>
          <div className={styles.buttonGroup}>
            <Button variant="primary" size="medium">
              Primary Button
            </Button>
            <Button variant="secondary" size="medium">
              Secondary Button
            </Button>
            <Button variant="outline" size="medium">
              Outline Button
            </Button>
            <Button variant="danger" size="medium">
              Danger Button
            </Button>
            <Button variant="primary" size="small">
              Small
            </Button>
            <Button variant="primary" size="large">
              Large
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Atoms: Input & Textarea</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
              error={errors.name}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              error={errors.email}
            />
            <Textarea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              rows={5}
              required
              error={errors.message}
            />
            <Dropdown
              label="Country"
              options={countryOptions}
              value={formData.country}
              onChange={handleDropdownChange}
              placeholder="Select a country"
              isClearable
              isSearchable
              required
              error={errors.country}
            />
            <div className={styles.formActions}>
              <Button type="submit" variant="primary" size="large">
                Submit Form
              </Button>
              <Button
                type="button"
                variant="outline"
                size="large"
                onClick={() => {
                  setFormData({ name: '', email: '', message: '', country: null });
                  setErrors({});
                }}
              >
                Reset
              </Button>
            </div>
          </form>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Molecules: Dropdown</h2>
          <div className={styles.dropdownGroup}>
            <Dropdown
              label="Single Select"
              options={countryOptions}
              placeholder="Choose a country"
              isClearable
              isSearchable
            />
            <Dropdown
              label="Multi Select"
              options={countryOptions}
              placeholder="Choose multiple countries"
              isMulti
              isClearable
              isSearchable
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Molecules: Tabs</h2>
          <div className={styles.tabsGroup}>
            <div>
              <p className={styles.tabLabel}>Button Variant:</p>
              <Tabs
                tabs={[
                  { value: 'tab1', label: 'Tab 1' },
                  { value: 'tab2', label: 'Tab 2' },
                  { value: 'tab3', label: 'Tab 3' },
                ]}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                variant="button"
              />
              <p className={styles.tabInfo}>Active Tab: {activeTab}</p>
            </div>
            <div>
              <p className={styles.tabLabel}>Pill Variant:</p>
              <Tabs
                tabs={[
                  { value: 'pill1', label: 'Pill 1' },
                  { value: 'pill2', label: 'Pill 2' },
                  { value: 'pill3', label: 'Pill 3' },
                ]}
                activeTab="pill1"
                onTabChange={(value) => console.log('Pill tab changed:', value)}
                variant="pill"
              />
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Organisms: Dynamic Table</h2>
          <DynamicTable
            data={paginatedData}
            columns={tableColumns}
            pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onRowClick={handleTableRowClick}
          />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Organisms: Modal</h2>
          <div className={styles.buttonGroup}>
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Open Small Modal
            </Button>
            <Button variant="secondary" onClick={() => setIsModalOpen('medium')}>
              Open Medium Modal
            </Button>
            <Button variant="outline" onClick={() => setIsModalOpen('large')}>
              Open Large Modal
            </Button>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen === true || isModalOpen === 'medium' || isModalOpen === 'large'}
          onClose={() => setIsModalOpen(false)}
          title="Sample Modal"
          size={typeof isModalOpen === 'string' ? isModalOpen : 'small'}
        >
          <div className={styles.modalContent}>
            <p>This is a modal component created using React Portal.</p>
            <p>You can close it by:</p>
            <ul className={styles.modalList}>
              <li>Clicking the X button</li>
              <li>Clicking outside the modal (overlay)</li>
              <li>Pressing the ESC key</li>
            </ul>
            <div className={styles.modalActions}>
              <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                Close Modal
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
