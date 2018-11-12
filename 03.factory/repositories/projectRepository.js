var projectRepository = function() {
    console.log(`creating new projectRepository`);
	return {
		get: function(id) {
			console.log(`Getting project ` + id + ` from db.`);
			return {
				name: 'new project from db'
			}
		},
		save: function(project) {
			console.log(`Saving project ` + project.name + ` to db.`);
		}
	};
};

module.exports = new projectRepository;