const cleanStr = (str) => {
  return str.trim().replace(/  +/g, ' ')
}

function getParts (str, searchStr = ' ') {
  let text = cleanStr(str) + ' '
  let start = 0
  let remain = text.substr(start)
  let current = text.search(searchStr)
  const res = []

  while (current !== -1) {
    res.push(remain.substr(0, current + 1))
    start = current + 1
    remain = remain.substr(start)
    current = remain.search(searchStr)
  }

  if (current === -1) {
    res.push(remain)
  }

  return res
}

export const getSentences = (str) => getParts(str, /[.?!]/)

export const getWords = (str) => getParts(str)