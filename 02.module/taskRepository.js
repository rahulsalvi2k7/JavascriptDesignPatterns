var taskRepository = function() {
	return {
		get: function(id) {
			console.log(`Getting task ` + id + ` from db.`);
			return {
				name: 'new task from db'
			}
		},
		save: function(task) {
			console.log(`Saving task ` + task.name + ` to db.`);
		}
	};
};

module.exports = taskRepository();