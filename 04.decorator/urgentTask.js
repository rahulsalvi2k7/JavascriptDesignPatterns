var Task = require(`./task`);

var UrgentTask = function(name, priority){
    Task.call(this, name);
    this.priority = priority;
}

UrgentTask.prototype.notify = function(){
    console.log(`urgentTask.notify`);
}

UrgentTask.prototype.save = function() {
    this.notify();
    Task.prototype.save.call(this);
}

UrgentTask.prototype.complete = function() {
	console.log(`Completing task ` + this.name);
	Task.prototype.complete.call(this);
};

module.exports = UrgentTask;
