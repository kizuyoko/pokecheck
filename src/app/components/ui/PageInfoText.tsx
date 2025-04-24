interface PageInfoBarProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

const PageInfoText = ({ currentPage, totalPages, itemsPerPage, totalItems }: PageInfoBarProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center my-4 w-full">
      <p className="text-lg">
        Page {currentPage} of {totalPages} – Showing {itemsPerPage} Pokémon per page (Total Pokémon: <strong>{totalItems}</strong>)
      </p>
    </div>
  );
}

export default PageInfoText;