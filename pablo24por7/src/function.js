const functions = require('firebase-functions')
const express = require('./express')

const api = functions.https.onRequest(express)
module.exports = {
  api
}
