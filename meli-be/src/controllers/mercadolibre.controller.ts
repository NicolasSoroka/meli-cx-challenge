import { GetUserPurchaseBody, User } from '../types/User'
import { Request, Response } from 'express'
const MercadolibreService = require('../MercadolibreService.js')

const meliServiceInstance = new MercadolibreService()

const mercadolibreController = {
  async getUser (req: Request, res: Response) {
    try {
      const users: User[] = await meliServiceInstance.getUser()
      return res.json(users)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
    }
  },

  async getUserRestrictions (req: Request, res: Response) {
    try {
      const { id } = req.params
      const user = await meliServiceInstance.getUserRestrictions(parseInt(id))
      return res.json(user)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
    }
  },

  async getUserPurchases (req: Request, res: Response) {
    try {
      const { id } = req.params
      const { limit, page } = req.query
      const purchases = await meliServiceInstance.getUserPurchases(
        id,
        limit,
        page
      )
      return res.json(purchases)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
    }
  },

  async getPurchase (req: Request, res: Response) {
    try {
      const { id } = req.params
      const result = await meliServiceInstance.getUserPurchases(1)
      const purchase = result.data.filter(el => el.purchase_id === Number(id))
      return res.json(purchase)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
    }
  },

  async getLevel (req: Request, res: Response) {
    try {
      const { levelId } = req.params
      await meliServiceInstance.getLevel(parseInt(levelId))
      return res.sendStatus(204)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
    }
  },

  async getShipment (req: Request, res: Response) {
    try {
      const { id } = req.params
      const shipment = await meliServiceInstance.getShipment(parseInt(id))
      return res.json(shipment)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
    }
  },

  async getPayment (req: Request, res: Response) {
    try {
      const { id } = req.params
      const payment = await meliServiceInstance.getPayment(parseInt(id))
      return res.json(payment)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
    }
  }
}

export default mercadolibreController
