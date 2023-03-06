export type Gender = 'fame' | 'male' | 'binary'

export type Currency = 'ARS' | 'USD' | 'EUR' | 'GBP' | 'JPY'

// export type UserWithoutGenderInfoEntry = Pick<UserEntry, 'id' | 'name' | 'salary' | 'salaryCurrency'>;

export type UserWithoutGenderInfoEntry = Omit<UserEntry, 'gender'>

export interface UserEntry {
  id: number
  name: string
  gender: Gender
  salary: number
  salaryCurrency: Currency
};
