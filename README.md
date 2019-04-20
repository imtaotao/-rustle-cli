# 笔记

## common method
```js
// 指定一条命令
program.command('xx')

// defined description style
program.usage('[options] <file ...>')

// description
program.description('xxxx')

// we can specified parameters
// xx command --tao taotao
// 可以在 action 的回调里面拿到
program.option('-t', '--tao <arg>')

program.action(option => {
  // 如果没有指定参数，值为 boolean
  console.log(option.tao)
})
```

## notice
在指定参数术，[] 里面的参数是可选的，<> 代表是必选的，如果不传参，会匹配不上命令

## simple implement
 1. 通过 commander 定义一系列需要的命令
 2. 在命令的执行时，检查必须要有的参数，可以使用 inquirer
 3. 判断需要创建的项目类型
 4. 检查项目是否已经存在
 5. 删除已经存在的模板（系统的临时文件中）
 6. 拉去模板
 7. 检查目录是否存在，如果存在就退出进程
 8. 循环拷贝文件
 9. 生成 package.json 等一些其他的文件（配置信息中获取相关的资料）
 
可以考虑是否需要代理，升级项目，清除缓存等相关的操作