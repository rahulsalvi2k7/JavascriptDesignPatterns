var Task = require(`./task`);
var RepoFactory = require(`./repoFactory`);

var taskRepo1 = RepoFactory.getRepo('task');
var task1 = new Task(taskRepo1.get(1));
var taskRepo2 = RepoFactory.getRepo('task');
var task2 = new Task(taskRepo2.get(2));

var user = RepoFactory.getRepo('user').get(1);
var project = RepoFactory.getRepo('project').get(1);
task1.project = project;
task1.user = user;

console.log(task1);
console.log(task2);
