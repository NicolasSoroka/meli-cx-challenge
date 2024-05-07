import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const PurchaseItem = ({ purchase }) => {
  const formattedDate = new Date(purchase.date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
  });

  return (
    <li className="bg-white rounded-lg border shadow md:w-[350px]">
      <div className="flex justify-between items-center w-full px-4 pt-3 pb-2 border-b">
        <p>{formattedDate}</p>
        <p className="text-meli_blue">#{purchase.purchase_id}</p>
      </div>

      <div className="flex justify-between px-4 py-2">
        <div>
          <p>{purchase.title}</p>
          <p>{`${purchase.amount} unidad${purchase.amount > 1 ? "es" : ""}`}</p>
          <p>{`${purchase.cost.currency} ${purchase.cost.total}`}</p>
        </div>
        <Link to={`${ROUTES.PURCHASES_URL}/${purchase.purchase_id}`} className="flex items-end">
          <button className="flex place-items-end w-[160px] bg-meli_blue text-white justify-center rounded-md font-normal py-1">
            Ver compra
          </button>
        </Link>
      </div>
    </li>
  );
};

export default PurchaseItem;
