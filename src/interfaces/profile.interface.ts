export interface Profile {
  data: {
    token: string
    user: {
      email: string
      id: string
      username: string
    }
  }
  message: string
  status: string
}

export interface RegisteredUser {
  data: {
    email: string
    id: number
    username: string
  }
  message: string
  status: string
}

export interface User {
  data: {
    user: {
      email: string
      id: number
      last_login_at: string
      username: string
    }
  }
  status: string
}
