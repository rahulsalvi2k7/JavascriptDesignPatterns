var Task = require(`./Task`);
var TaskRepository = require(`./taskRepository`);

var task1 = new Task(TaskRepository.get(1));

task1.complete();
task1.save();
