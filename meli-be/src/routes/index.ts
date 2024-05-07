import { Router } from 'express'
import userRoutes from './user.routes'
import levelRoutes from './level.routes'
import shipmentRoutes from './shipment.routes'
import paymentRoutes from './payment.routes'
import purchasesRoutes from './purchases.routes'

export default () => {
  const router = Router()

  userRoutes(router)
  paymentRoutes(router)
  shipmentRoutes(router)
  levelRoutes(router)
  purchasesRoutes(router)

  return router
}
