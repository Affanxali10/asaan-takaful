import styles from './Pagination.module.css';

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  showPageNumbers = false,
  maxPageNumbers = 5,
  className = '',
}) {
  if (totalPages <= 1) return null;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    if (!showPageNumbers) return [];

    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

    if (endPage - startPage < maxPageNumbers - 1) {
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={`${styles.pagination} ${className}`}>
      <button
        className={styles.paginationButton}
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        Previous
      </button>

      {showPageNumbers && (
        <div className={styles.pageNumbers}>
          {pageNumbers[0] > 1 && (
            <>
              <button
                className={styles.pageNumber}
                onClick={() => handlePageClick(1)}
              >
                1
              </button>
              {pageNumbers[0] > 2 && <span className={styles.ellipsis}>...</span>}
            </>
          )}
          {pageNumbers.map((page) => (
            <button
              key={page}
              className={`${styles.pageNumber} ${currentPage === page ? styles.active : ''}`}
              onClick={() => handlePageClick(page)}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
          {pageNumbers[pageNumbers.length - 1] < totalPages && (
            <>
              {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                <span className={styles.ellipsis}>...</span>
              )}
              <button
                className={styles.pageNumber}
                onClick={() => handlePageClick(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}
        </div>
      )}

      <span className={styles.paginationInfo}>
        Page {currentPage} of {totalPages}
      </span>

      <button
        className={styles.paginationButton}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
}

