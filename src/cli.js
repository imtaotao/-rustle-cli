const fs = require('fs')
const path = require('path')
const _ = require('./utils')
const program = require('commander')
const inquirer = require('inquirer')

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
        console.log(answers);
      })
      .catch(error => console.error(error))
    }
  })

program.parse(process.argv)