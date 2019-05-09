const fs = require('fs')
const path = require('path')
const _ = require('./utils')
const init = require('./start')
const program = require('commander')
const inquirer = require('inquirer')

const dirPath = __filename

// 定义命令
program
  .command('create [name]')
  .description('创建项目')
  .action(name => {
    if (!name) {
      inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'fill you project name:',
      }])
      .then(answers => {
        if (answers.name) {
          return init(dirPath, answers.name)
        }
        _.warn('the project name is not accord demand [' + (answers.name || 'unKnow') + ']', true)
      })
      .catch(error => _.warn(error))
    }
  })

program.parse(process.argv)