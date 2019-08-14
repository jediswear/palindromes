const findPalindrome = (text, leftPos, rightPos) => {
  const reg = /[^a-zA-Z]/
  let res = {}
  let leftChar = text[leftPos]
  let rightChar = text[rightPos]

  //spec symbol cant be center of symmetry
  if(reg.test(text[leftPos + 1]))
    return res

  while (leftPos >= 0 && rightPos < text.length) {

    //if chars are not equal && left + right chars are not spec symbols
    if (leftChar !== rightChar && !reg.test(leftChar) && !reg.test(rightChar)) {

      if (!reg.test(text[res.start - 1]) || !reg.test(text[res.end])) {
        res.start = res.end = undefined
      }
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

    res.palindrome = text.substring(leftPos, rightPos + 1)
    res.start = leftPos
    res.end = rightPos + 1
    leftChar = text[--leftPos]
    rightChar = text[++rightPos]
  }

  return res
}

export const findAll = (text) => {

  const formattedText = text.toLowerCase()

  let results = []
  for (let i = 1; i < formattedText.length; i++) {
    let start = i - 1, end = i + 1
    let res = findPalindrome(formattedText, start, end)

    if (res.start || res.end)
      results.push(res)

    start = i - 1
    end = i
    res = findPalindrome(formattedText, start, end)
    if (res.start || res.end)
      results.push(res)
  }

  return results
}

export const getPalindromes = (text) => {
  const list = findAll(text)

  return list.map(el => {
    return {
      ...el,
      palindrome: text.substring(el.start, el.end)
    }

  })
}

export const mergePalindromesToText = (str, list) => {
  let start = 0
  const fullList = [...list, ''].sort((a, b) => a.start - b.start)

  return fullList.reduce((acc, palindrome) => {

    const substr = str.substring(start, palindrome.start)
    start = palindrome.end
    return [...acc, substr, palindrome]

  }, [])
}

