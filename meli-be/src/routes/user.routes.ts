import mercadolibreController from "../controllers/mercadolibre.controller";

export default (router) => {
  router.get("/users", mercadolibreController.getUser);
  router.get("/users/:id/restrictions", mercadolibreController.getUserRestrictions);
  router.get("/users/:id/purchases", mercadolibreController.getUserPurchases);
};