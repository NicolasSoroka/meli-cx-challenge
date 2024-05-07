import { useQuery } from "@tanstack/react-query";
import CheckIcon from "./Icons/CheckIcon";
import { getPaymentStatus } from "../api/axios";
import Loading from "./Loading";
import Xicon from "./Icons/Xicon";

const PaymentStatus = ({ transactionId }) => {
  const {
    isLoading,
    isError,
    error,
    data: payment,
  } = useQuery({
    queryKey: ["payment"],
    queryFn: () => getPaymentStatus(Number(transactionId)),
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>Error! {error.message}</p>;

  return (
    <div className="flex gap-x-2 items-center bg-white rounded-lg shadow w-full justify-center p-2">
      <p className="font-semibold">Estado del pago</p>
      <span
        className={`flex items-center justify-center h-5 w-5 ${
          payment?.status !== "rejected" ? "bg-meli_green" : "bg-meli_red"
        } rounded-full`}
      >
        {payment?.status !== "rejected" ? (
          <CheckIcon color="#FFFFFF" size="12" />
        ) : (
          <Xicon />
        )}
      </span>
    </div>
  );
};

export default PaymentStatus;
