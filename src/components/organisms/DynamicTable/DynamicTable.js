'use client';

import Pagination from '@/components/molecules/Pagination';
import styles from './DynamicTable.module.css';

export default function DynamicTable({
  data = [],
  columns = [],
  onRowClick,
  className = '',
  emptyMessage = 'No data available',
  // Pagination props - passed directly to Pagination component
  pagination = false,
  currentPage,
  totalPages,
  onPageChange,
  showPageNumbers = true,
}) {
  const renderCellContent = (row, column, rowIndex, colIndex) => {
    if (column.renderItem) {
      return column.renderItem({
        data: row,
        item: row[column.key],
        key: column.key,
        rowIndex,
        colIndex,
      });
    }
    return row[column.key] ?? '-';
  };

  if (data.length === 0) {
    return (
      <div className={`${styles.tableWrapper} ${className}`}>
        <div className={styles.emptyState}>{emptyMessage}</div>
      </div>
    );
  }

  return (
    <div className={`${styles.tableWrapper} ${className}`}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={styles.headerCell}
                style={{
                  width: column.width,
                  ...(column.headerStyles || {}),
                }}
              >
                <div className={styles.headerContent}>
                  {column.title}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={onRowClick ? styles.clickableRow : ''}
              onClick={() => onRowClick && onRowClick(row)}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={column.key}
                  className={styles.cell}
                  style={column.style || {}}
                >
                  {renderCellContent(row, column, rowIndex, colIndex)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {pagination && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showPageNumbers={showPageNumbers}
        />
      )}
    </div>
  );
}

