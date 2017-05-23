'use strict'

module.exports = card => {
  return `<a href="${card.url}" class="link" title="Åpne ${card.title}" target="_blank"><div class="mui-panel mui-col-md-4">
            <h1><span class="material-icons">${card.icon}</span> ${card.title}</h1>
            <p class="mui--text-headline">${card.description}</p>
          </div></a>`
}
