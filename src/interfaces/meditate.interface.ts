export interface MeditateItem {
  id: number
  created_at: string
  updated_at: string
  title: string
  description: string
  duration_min: number
}

export interface MeditateData {
  meditations: MeditateItem[]
  status: string
}

export interface Meditate {
  data: MeditateData
}
