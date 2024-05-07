import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const getUser = async () => {
  const response = await axiosInstance.get('/users')
  return response.data
}

export const getUserRestrictions = async (userId: number) => {
  const response = await axiosInstance.get(`/users/:${userId}/restrictions`)
  return response.data
}

export const getAllPurchases = async (userId: number, limit = 10, page = 1) => {
  const response = await axiosInstance.get(`/users/${userId}/purchases`, {
    params: {
      limit,
      page
    }
  })
  return response.data
}

export const getPurchase = async (purchaseId: number) => {
  const response = await axiosInstance.get(`/purchases/${purchaseId}`, {})
  return response.data
}

export const getPaymentStatus = async (paymentId: number) => {
  const response = await axiosInstance.get(`/payments/${paymentId}`, {})
  return response.data
}

export const getShipmentStatus = async (shipmentId: number) => {
  const response = await axiosInstance.get(`/shipments/${shipmentId}`, {})
  return response.data
}