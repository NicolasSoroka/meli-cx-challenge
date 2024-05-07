const Pagination = ({ postPerPage, totalPosts, setCurrentPage, currentPage}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <ul className="flex gap-x-2 justify-center">
      {
        pages.map((page, index) => {
          return <button className={`flex w-[10] px-2 rounded shadow bg-white ${page === currentPage ? 'bg-meli_red' : ''}`} key={index} onClick={()=> setCurrentPage(page)}>{page}</button>
        })
      }
    </ul>
  );
};

export default Pagination;
