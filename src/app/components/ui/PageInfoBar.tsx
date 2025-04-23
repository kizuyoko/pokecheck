import Paginator from "./Paginator";

interface PageInfoBarProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const PageInfoBar = ({ currentPage, totalPages, itemsPerPage, totalItems, onPreviousPage, onNextPage }: PageInfoBarProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center my-4 w-full">
      <p className="text-lg">
        Page {currentPage} of {totalPages} – Showing {itemsPerPage} Pokémon per page (Total Pokémon: <strong>{totalItems}</strong>)
      </p>
      <div>
        <Paginator
          onClick={onPreviousPage}
          disabled={currentPage === 1}
          buttonText="Previous"
        />
        <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <Paginator
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          buttonText="Next"
        />
      </div>
    </div>
  );
}

export default PageInfoBar;