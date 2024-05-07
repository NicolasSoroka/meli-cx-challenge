import mercadolibreController from "../controllers/mercadolibre.controller";

export default (router) => {
  router.get("/levels/:id", mercadolibreController.getLevel);
};