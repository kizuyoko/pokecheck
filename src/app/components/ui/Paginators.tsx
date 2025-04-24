import Paginator from "./Paginator";

interface PaginatorsProps {
  currentPage: number;  
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const Paginators = ({ currentPage, totalPages, onPreviousPage, onNextPage }: PaginatorsProps) => {
  return (
    <div className="my-4 flex items-center justify-center gap-2">
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
  );
}

export default Paginators;

  