`use strict`

class Task {
	constructor(name) {
		this.name = name;
		this.completed = false;
	};
	
	complete() {
		console.log(`Completing task ` + this.name);
		this.completed = true;
	};
	
	save() {
		console.log(`Saving task ` + this.name);
		this.completed = true;
	};
}

var task1 = new Task(`Demo task 1`);
var task2 = new Task(`Demo task 2`);
var task3 = new Task(`Demo task 3`);
var task4 = new Task(`Demo task 4`);

task1.complete();
task2.save();
