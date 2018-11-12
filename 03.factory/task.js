var Task = function(data) {
    this.name = data.name;
    this.user = data.user;
    this.project = data.project;
	this.completed = false;
}

Task.prototype.complete = function() {
	console.log(`Completing task ` + this.name);
	this.completed = true;
};

Task.prototype.save = function() {
	console.log(`Saving task ` + this.name);
	this.completed = true;
	TaskRepository.save(this);
};

module.exports = Task;