import { Level } from "./Level"

export type User = {
  user_id: number,
  name: string,
  surname: string,
  level: Level,
  profile_image: string
}

export type GetUserPurchaseBody = {
  userId: number,
  limit?: number,
  page?: number
}