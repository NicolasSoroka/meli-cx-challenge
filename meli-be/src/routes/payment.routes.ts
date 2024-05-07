import mercadolibreController from "../controllers/mercadolibre.controller";

export default (router) => {
  router.get("/payments/:id", mercadolibreController.getPayment);
};