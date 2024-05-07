/* eslint-disable @typescript-eslint/no-unused-vars */
import PurchaseItem from "./PurchaseItem";
import { getAllPurchases } from "../api/axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import { useState } from "react";
import Pagination from "./Pagination";

const PurchasesList = ({ userId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(3);

  const {
    // isLoading,
    // isPending,
    isFetching,
    isError,
    error,
    data: purchasesData,
  } = useQuery({
    queryKey: ["purchases", currentPage],
    queryFn: () => getAllPurchases(userId, limit, currentPage),
  });
  
  const lastPostIndex = currentPage * limit;
  const firstPostIndex = purchasesData?.offset;
  const currentPosts = purchasesData?.data.slice(firstPostIndex, lastPostIndex);
  
  return (
    <div className="flex flex-col w-full gap-y-2 md:gap-y-6">
      <Pagination
        totalPosts={purchasesData?.total}
        postPerPage={limit}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {isFetching ? (
        <Loading />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul className="flex flex-col gap-y-2 md:flex-row md:gap-x-2 md:mx-auto">
          {currentPosts?.map((purchase) => (
            <PurchaseItem key={purchase.purchase_id} purchase={purchase} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PurchasesList;
