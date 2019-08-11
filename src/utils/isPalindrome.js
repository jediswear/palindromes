export const isPalindrome = (str) => {
  if(str.trim().length < 2) {
    return false
  }

  const formatted = str.toLowerCase().replace(/[^a-zA-Z]/g, '')
  const half = Math.floor(formatted.length / 2)

  for (let i = half; i >= 0; i--) {
    if (!formatted[i] || formatted[i] !== formatted[formatted.length - i - 1]) {
      return false
    }
  }

  return true
}