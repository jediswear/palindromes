export const isPalindrome = (str) => {
  if (str.trim().length < 2) {
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

const findPalindrome = (text, leftPos, rightPos) => {
  let palindrome

  const reg = /[^a-zA-Z]/

  let leftChar = text[leftPos]
  let rightChar = text[rightPos]

  while (leftPos >= 0 && rightPos < text.length) {

    //if chars are not equal && left + right chars not spec symbol
    if (leftChar !== rightChar && !reg.test(leftChar) && !reg.test(rightChar)) {
      break
    }

    //if left char is spec symbol
    if (reg.test(leftChar)) {
      leftChar = text[--leftPos]
      continue
    }

    //if right char is spec symbol
    if (reg.test(rightChar)) {
      rightChar = text[++rightPos]
      continue
    }

    palindrome = text.substring(leftPos, rightPos + 1)
    leftChar = text[--leftPos]
    rightChar = text[++rightPos]
  }

  return palindrome
}

function cutOut (str) {
  //if is a part of palindrome cut
  return str
}


export const findAll = (text) => {

  const formattedText = text.toLowerCase().trim()

  let results = []
  for (let i = 1; i < formattedText.length; i++) {
    let start = i - 1, end = i + 1
    let palindrome = findPalindrome(formattedText, start, end)

    if (palindrome)
      results.push(palindrome)

    start = i - 1
    end = i
    palindrome = findPalindrome(formattedText, start, end)
    if (palindrome)
      results.push(palindrome)

  }
  return results
}
