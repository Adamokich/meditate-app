export interface StatData {
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

export interface TotalStatItem {
  total_anxiety: number
  total_calm: number
  total_focus: number
  total_minutes: number
  total_relax: number
}

export interface TotalStat {
  data: {
    stats: StatData[] | null
    summary: TotalStatItem
    status: string
  }
}
