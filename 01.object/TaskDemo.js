var task = {
	title : `my task`,
	description : `my description`	
};

Object.defineProperty(task, `toString`, {
	value: function() {
		return this.title + ` - ` + this.description;
	},
	writable: false,
	enumerable: false,
	configurable: false
});

// Enumerable
console.log(Object.keys(task));

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, `toString`, {
	value: function() {
		return this.title + ` is urgent `;
	},
	writable: false,
	enumerable: false,
	configurable: false
});

console.log(urgentTask.toString());