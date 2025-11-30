import styles from './Tabs.module.css';

export default function Tabs({
  tabs = [],
  activeTab,
  onTabChange,
  variant = 'button',
  className = '',
}) {
  const handleTabClick = (tabValue) => {
    if (onTabChange) {
      onTabChange(tabValue);
    }
  };

  const containerClass = [
    styles.container,
    styles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClass}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;
        const tabClass = [
          styles.tab,
          styles[`${variant}Tab`],
          isActive && styles.active,
        ].filter(Boolean).join(' ');

        return (
          <button
            key={tab.value}
            className={tabClass}
            onClick={() => handleTabClick(tab.value)}
            aria-selected={isActive}
            role="tab"
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

