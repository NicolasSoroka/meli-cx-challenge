import mercadolibreController from "../controllers/mercadolibre.controller";

export default (router) => {
  router.get("/shipments/:id", mercadolibreController.getShipment);
};