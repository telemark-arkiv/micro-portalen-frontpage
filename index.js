'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const axios = require('axios')
const urlStatus = require('url-status-code')
const { parse } = require('url')
const { send } = require('micro')
const generateCard = require('./lib/generate-card')
const config = require('./config')

module.exports = async (request, response) => {
  const { pathname } = await parse(request.url, true)

  if (pathname === '/docs') {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  } else {
    const [front, api] = await Promise.all([urlStatus(config.webUrl), urlStatus(config.apiUrl)])
    if (front === 200 && api === 200) {
      response.writeHead(302, { Location: config.portalenUrl })
      response.end()
    } else {
      const results = await axios(config.shortcutsUrl)
      const shorcuts = results.data.map(shortcut => generateCard(shortcut))
      const index = readFileSync('lib/data/index.html', 'utf-8')
      const html = index.replace('{{data}}', shorcuts.join(''))
      send(response, 200, html)
    }
  }
}