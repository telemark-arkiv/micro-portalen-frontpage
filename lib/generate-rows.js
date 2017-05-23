'use strict'

module.exports = list => {
  let rows = []
  let start = 0
  let end = 3
  let step = 3
  let length = list.length

  while (end < length) {
    rows.push(`<div class="mui-row">${list.splice(start, end).join('')}</div>`)
    start += step
    end += step
  }

  return rows
}
