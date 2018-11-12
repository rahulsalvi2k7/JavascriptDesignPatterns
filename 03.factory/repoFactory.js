var repoFactory = function() {
    
    this.getRepo = function(repoType) {
        switch (repoType)
        {
            case 'user': 
                var userRepo = require(`./repositories/userRepository`);
                return userRepo;
            case 'project': 
                var projectRepo = require(`./repositories/projectRepository`);
                return projectRepo;
            case 'task': 
                var taskRepo = require(`./repositories/taskRepository`);
                return taskRepo;
            default:
                console.error(`Unknown repoType ` + repoType);
                return undefined;
        }
    }
}

module.exports = new repoFactory;