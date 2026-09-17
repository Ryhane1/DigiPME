function Pagination({ page, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    return (
        <div className="pagination">
            <button onClick={() => onPageChange(page - 1)} disabled={page === 0}>
                Précédent
            </button>

            <span>
        Page {page + 1} sur {totalPages}
      </span>

            <button
                onClick={() => onPageChange(page + 1)}
                disabled={page + 1 >= totalPages}
            >
                Suivant
            </button>
        </div>
    );
}

export default Pagination;