export const isPalindrome = (str) => {
  if(str.trim().length < 2) {
    return false
  }

  const formatted = str.toLowerCase().replace(/[^a-zA-Z]/g, '')
  const half = Math.floor(formatted.length / 2)
  const even = formatted.length % 2 === 0
  let toRight = even ? half + 1 : half

  for (let toLeft = half; toLeft >= 0; toLeft--, toRight++) {
    if (formatted[toLeft] !== formatted[toRight]) {
      return false
    }
  }

  return true
}