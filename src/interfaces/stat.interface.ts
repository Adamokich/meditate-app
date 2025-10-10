export interface Stat {
  data: {
    stat: {
      id: number
      created_at: string
      updated_at: string
      user_id: number
      date: string
      duration_min: number
      feeling_calm: number
      feeling_relax: number
      feeling_focus: number
      feeling_anxiety: number
    }
  }
  message: string
  status: string
}
