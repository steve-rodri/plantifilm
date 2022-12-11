export const createStringFromStringArray = (array: string[]): string => {
  return array.reduce((str, member, i) => {
    if (i === array.length - 1) return (str += `${member}`)
    return (str += `${member}, `)
  }, "")
}
