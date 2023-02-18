export default function isEmail(value: string) {
  const email = value || ''

  const test = 'jsontyper@gmail.com'.split('@')

  if (email.split('@').length !== 2) {
    return false
  } else if (email.includes(' ')) {
    return false
  } else if (email[0] === '-') {
    return false
  }

  return true
}
