const fs = require('fs')
const os = require('os')
const path = require('path')
const download = require('download')

const templateDir = path.join(os.tmpdir(), './rustle_cli_template')

function warn (message, isWarn) {
  message = 'Rustle Cli Warn: ' + message
  if (isWarn) return console.warn(message)
  throw new Error(message)
}

/**
 *  下载的逻辑
 *  1. 先拿到存放模板的临时路径
 *  2. 
 * */
function downProjectTemplate () {

}

module.exports = {
  warn,
  downProjectTemplate,
}