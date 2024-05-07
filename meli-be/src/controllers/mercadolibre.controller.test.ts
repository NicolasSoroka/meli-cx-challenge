// import { Request, Response } from 'express'
// import mercadolibreController from './mercadolibre.controller'
// import MercadolibreService from '../MercadolibreService.js'

// jest.mock('../MercadolibreService')

// describe('mercadolibreController', () => {
//   describe('getUsers', () => {
//     it('should return users', async () => {
//       const mockUsers = [
//         { id: 1, name: 'User1' },
//         { id: 2, name: 'User2' }
//       ]
//       const mockReq = {} as unknown as Request
//       const mockRes = {
//         json: jest.fn(),
//         status: jest.fn().mockReturnThis()
//       } as unknown as Response
//       ;(MercadolibreService.getUser as jest.Mock).mockResolvedValue(mockUsers)

//       await mercadolibreController.getUsers(mockReq, mockRes)

//       expect(mockRes.json).toHaveBeenCalledWith(mockUsers)
//     })

//     it('should handle errors', async () => {
//       const mockError = new Error('Internal Server Error')
//       const mockReq = {} as Request
//       const mockRes = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn()
//       } as unknown as Response
//       ;(MercadolibreService.getUser as jest.Mock).mockRejectedValue(mockError)

//       await mercadolibreController.getUsers(mockReq, mockRes)

//       expect(mockRes.status).toHaveBeenCalledWith(500)
//       expect(mockRes.json).toHaveBeenCalledWith({ message: mockError.message })
//     })
//   })
// })
