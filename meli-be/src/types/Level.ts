const levels = ['ORO', 'PLATA', 'BRONZE'] as const
type Levels = typeof levels[number]

export type Level = {
  level_id: 'ORO' | 'PLATA' | 'BRONCE'
  description: string
}

export type LevelMap = {
  [key in Levels]: Level
}