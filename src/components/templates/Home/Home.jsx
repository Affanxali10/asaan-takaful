'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/organisms/Navbar/Navbar';
import Hero from '@/components/organisms/Hero/Hero';
import StatsSection from '@/components/organisms/StatsSection/StatsSection';
import PartnersSlider from '@/components/organisms/PartnersSlider/PartnersSlider';
import ExpertiseSection from '@/components/organisms/ExpertiseSection/ExpertiseSection';
import TrendingNewsSection from '@/components/organisms/TrendingNewsSection/TrendingNewsSection';
import TrailblazersSection from '@/components/organisms/TrailblazersSection/TrailblazersSection';
import ContactStrip from '@/components/organisms/ContactStrip/ContactStrip';
import FooterSection from '@/components/organisms/FooterSection/FooterSection';

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

  const countryOptions = [
    { value: 'pk', label: 'Pakistan' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
  ];

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

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return tableData.slice(startIndex, endIndex);
  }, [currentPage, pageSize]);

  const totalPages = Math.ceil(tableData.length / pageSize);

  const handlePageChange = (page) => setCurrentPage(page);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleDropdownChange = (selectedOption) => {
    setFormData((prev) => ({ ...prev, country: selectedOption }));
    if (errors.country) setErrors((prev) => ({ ...prev, country: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.country) newErrors.country = 'Country is required';

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
        title="!ہے Simple کیونکہ تکافل"
        subtitle="Takaful Made Simple, Ethical, and Accessible for Everyone"
        ctaText="Buy Now"
      />

      {/* STATS SECTION */}
      <section id="statistics"><StatsSection /></section>

      {/* EXPERTISE SECTION */}
      <section id="expertise"><ExpertiseSection /></section>

      {/* TRAILBLAZERS / LEADERS SECTION */}
      <section id="leaders"><TrailblazersSection /></section>

      {/* TRENDING NEWS SECTION */}
      <section id="trending"><TrendingNewsSection /></section>


      {/* CONTACT STRIP (above footer) */}
      <ContactStrip />

      {/* FOOTER SECTION */}
      <FooterSection />

      {/* OTHER CONTENT (commented earlier) */}
      {/* <div className={styles.container}> ... </div> */}

    </div>
  );
}
