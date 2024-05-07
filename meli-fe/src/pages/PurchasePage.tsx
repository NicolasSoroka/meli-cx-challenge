import { Link, useParams } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import LeftArrowIcon from "../components/Icons/LeftArrowIcon";
import Loading from "../components/Loading";
import { useQuery } from "@tanstack/react-query";
import { getPurchase } from "../api/axios";
import PaymentStatus from "../components/PaymentStatus";
import ShipmentStatus from "../components/ShipmentStatus";

const PurchasePage = () => {
  const { purchaseId } = useParams();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["purchase"],
    queryFn: () => getPurchase(Number(purchaseId)),
  });

  const purchaseData = data ? data[0] : null;
  const formattedDate = new Date(purchaseData?.date).toLocaleDateString(
    "es-ES",
    {
      day: "numeric",
      month: "long",
    }
  );

  if (isLoading) return <Loading />;
  if (isError) return <p>Error! {error.message}</p>;

  return (
    <div className="flex flex-col items-center w-full h-full px-4 gap-y-2 md:max-w-[400px] md:mx-auto">
      <Link to={ROUTES.PROFILE_URL}>
        <nav className="flex w-screen items-center bg-meli_yellow p-2 gap-x-2">
          <LeftArrowIcon />
          <span>Mis compras</span>
        </nav>
      </Link>

      <div className="flex justify-between w-full py-2">
        <div className="flex flex-col">
          <p className="text-xl max-w-[280px] truncate">
            {purchaseData?.title}
          </p>
          <span className="text-meli_blue">#{purchaseData?.purchase_id}</span>
        </div>
        <img
          className="flex w-14 h-14 bg-white rounded-full"
          src={purchaseData?.image}
          alt="product_image"
        />
      </div>

      <PaymentStatus transactionId={purchaseData?.transaction_id} />

      <div className="flex flex-col bg-white rounded-lg shadow w-full p-4 gap-y-2">
        <ShipmentStatus shipmentId={purchaseData?.shipment_id} />
        <div className="flex flex-col">
          <p>Comprado el dia {formattedDate}</p>
          <p>Vendido por {purchaseData?.seller.nickname}</p>
        </div>
        <div className="flex flex-col">
          <p>{`${purchaseData?.amount} unidad${
            purchaseData?.amount > 1 ? "es" : ""
          }`}</p>
          <p>{`${purchaseData?.cost.currency} ${purchaseData?.cost.total}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
