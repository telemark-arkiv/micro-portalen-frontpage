'use strict'

module.exports = card => {
  return `<div class="mui-panel mui-col-md-4">
            <a href="${card.url}" class="mui--text-headline material-icons mui--pull-right link" title="Åpne ${card.title}" target="_blank">launch</a>
            <h1><span class="material-icons">${card.icon}</span> ${card.title}</h1>
            <p class="mui--text-headline">${card.description}</p>
          </div>`
}
