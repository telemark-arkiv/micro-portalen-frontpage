'use strict'

module.exports = card => {
  return `<div class="mui-panel">
            <span class="material-icons mui--pull-right">${card.icon}</span>
            <h1>${card.title}</h1>
            <p class="mui--text-headline">${card.description}</p>
            <a href="${card.url}" class="mui--text-headline material-icons link" title="Åpne ${card.title}" target="_blank">launch</a>
          </div>`
}
