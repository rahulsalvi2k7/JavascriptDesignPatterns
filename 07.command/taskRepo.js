var taskRepo = {
    tasks: {},
    commands: [],
    get: function (id) {
        console.log(`Getting task ` + id + ` from db`);
        return {
            id: id,
            name: `task ` + id
        };
    },
    save: function (task) {
        this.tasks[task.id] = task;
        console.log(`Saving task ` + task.id + ` to db`);
    },
    execute: function (name) {
        let args = Array.prototype.slice.call(arguments, 1);

        this.commands.push({
            name: name,
            obj: args[0]
        });

        if (this[name]) {
            return this[name].apply(this, args);
        }

        return false;
    }
}

taskRepo.execute(`save`, {id:1, name:'Task 1', completed: false});
taskRepo.execute(`save`, {id:2, name:'Task 2', completed: false});
taskRepo.execute(`save`, {id:3, name:'Task 3', completed: false});
taskRepo.execute(`save`, {id:4, name:'Task 4', completed: false});

console.log(taskRepo.tasks);