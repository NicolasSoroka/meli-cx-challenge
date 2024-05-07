import CheckIcon from "./Icons/CheckIcon";
import { useQuery } from "@tanstack/react-query";
import { getShipmentStatus } from "../api/axios";
import Loading from "./Loading";
import Xicon from "./Icons/Xicon";

const ShipmentStatus = ({ shipmentId }) => {
  const {
    isLoading,
    isError,
    error,
    data: shipment,
  } = useQuery({
    queryKey: ["shipment"],
    queryFn: () => getShipmentStatus(Number(shipmentId)),
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>Error! {error.message}</p>;

  return (
    <div className="flex gap-1 items-center">
      <p
        className={`font-semibold ${
          shipment?.status ? "text-meli_red" : "text-meli_green"
        }`}
      >
        Entrega {shipment?.status ? "cancelada" : "realizada"}
      </p>
      {shipment?.status ? (
        <Xicon color={"#ab0a0a"} />
      ) : (
        <CheckIcon color="#00A650" size="15" />
      )}
    </div>
  );
};

export default ShipmentStatus;
