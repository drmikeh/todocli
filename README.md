todocli
=======

Just a simple todo app.

Taken from the article [How to build a CLI tool in NodeJS](https://medium.freecodecamp.org/how-to-build-a-cli-tool-in-nodejs-bc4f67d898ec).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todocli.svg)](https://npmjs.org/package/todocli)
[![Downloads/week](https://img.shields.io/npm/dw/todocli.svg)](https://npmjs.org/package/todocli)
[![License](https://img.shields.io/npm/l/todocli.svg)](https://github.com/drmikeh/todocli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todocli
$ todocli COMMAND
running command...
$ todocli (-v|--version|version)
todocli/1.0.0 darwin-x64 node-v11.10.0
$ todocli --help [COMMAND]
USAGE
  $ todocli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [todocli](#todocli)
- [Usage](#usage)
- [Commands](#commands)
  - [`todocli add`](#todocli-add)
  - [`todocli show`](#todocli-show)
  - [`todocli update`](#todocli-update)
  - [`todocli remove`](#todocli-remove)

## `todocli add`

Add a task

```
USAGE
  $ todocli add

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/add.js](https://github.com/drmikeh/todocli/blob/v1.0.0/src/commands/add.js)_

## `todocli show`

Show existing tasks

```
USAGE
  $ todocli show

DESCRIPTION
  ...
  Show all the tasks sorted by their ids.
```

_See code: [src/commands/show.js](https://github.com/drmikeh/todocli/blob/v1.0.0/src/commands/show.js)_


## `todocli update`

Update a task

```
USAGE
  $ todocli update

OPTIONS
  --id=id  id of task to update

DESCRIPTION
  ...
  Marks a task as done
```

_See code: [src/commands/update.js](https://github.com/drmikeh/todocli/blob/v1.0.0/src/commands/update.js)_


## `todocli remove`

Remove a task

```
USAGE
  $ todocli remove

OPTIONS
  --id=id  id of task to remove

DESCRIPTION
  ...
  Remove a task permanently from database by id
```

_See code: [src/commands/remove.js](https://github.com/drmikeh/todocli/blob/v1.0.0/src/commands/remove.js)_


## `todocli help [COMMAND]`

display help for todocli

```
USAGE
  $ todocli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
