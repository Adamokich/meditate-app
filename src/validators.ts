export const checkStatName = (value: string) => {
  switch (value) {
    case 'total_anxiety':
      return 'Тревожных дней'
    case 'total_calm':
      return 'Спокойных дней'
    case 'total_focus':
      return 'Фокусированных дней'
    case 'total_minutes':
      return 'Минут медитации'
    case 'total_relax':
      return 'Раслабленных дней'
  }
}

export const checkStatBg = (value: string) => {
  switch (value) {
    case 'total_anxiety':
      return '/img/total_anxiety_bg.png'
    case 'total_calm':
      return '/img/total_calm_bg.png'
    case 'total_focus':
      return '/img/total_focus_bg.png'
    case 'total_minutes':
      return '/img/total_min_bg.png'
    case 'total_relax':
      return '/img/total_relax_bg.png'
  }
}
