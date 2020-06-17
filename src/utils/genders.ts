interface GenderProps {
  code: number
  name: string
}

const genders: GenderProps[] = [
  { code: 1, name: 'male' },
  { code: 2, name: 'female' }
]

export const getGenderByCode = (
  genderName: string
): GenderProps | undefined => {
  const gender = genders.find(gender => gender.name === genderName)

  return gender
}

export const getGenderByName = (
  genderName: string
): GenderProps | undefined => {
  const gender = genders.find(gender => gender.name === genderName)

  return gender
}

export const getGenderCode = (genderName: string): number => {
  const gender = genders.find(gender => gender.name === genderName)

  if (!gender) {
    return 0
  }

  return gender.code
}

export const getGenderName = (genderCode: number): string => {
  const gender = genders.find(gender => gender.code === genderCode)

  if (!gender) {
    return ''
  }

  return gender.name
}
