export type Gender = 'fame' | 'male' | 'binary'

export type Currency = 'ARS' | 'USD' | 'EUR' | 'GBP' | 'JPY'

export interface UserEntry {
  id: number
  name: string
  gender: Gender
  salary: number
  salaryCurrency: Currency
}
