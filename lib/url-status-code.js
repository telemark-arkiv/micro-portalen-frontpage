'use strict'

const axios = require('axios')
const config = require('../config')
const instance = axios.create({timeout: config.timeout})

module.exports = url => {
  return new Promise(async (resolve, reject) => {
    instance.get(url)
      .then(result => {
        resolve(result.status)
      }).catch(error => {
        console.error(error.code)
        resolve(500)
      })
  })
}
