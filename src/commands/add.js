const {Command, flags} = require('@oclif/command')
const {Todo} = require('../db')

class AddCommand extends Command {
  async run() {
    const {flags: {task}} = this.parse(AddCommand)
    const res = await Todo.push({
      task,
      id: Todo.value().reduce((a, b) => a.id > b.id ? a : b, {id: -1}).id + 1,
      done: false,
    }).write()
    this.log(res)
  }
}

AddCommand.description = `Adds a new todo
...
Adds a new todo to the existing list
`

AddCommand.flags = {
  task: flags.string({char: 't', description: 'task'}),
}

module.exports = AddCommand
