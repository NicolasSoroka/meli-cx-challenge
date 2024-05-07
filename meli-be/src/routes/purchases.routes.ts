import mercadolibreController from "../controllers/mercadolibre.controller";

export default (router) => {
  router.get("/purchases/:id", mercadolibreController.getPurchase);
};