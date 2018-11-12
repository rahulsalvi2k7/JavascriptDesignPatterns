var userRepository = function() {
    console.log(`creating new userRepository`);
	return {
		get: function(id) {
			console.log(`Getting user ` + id + ` from db.`);
			return {
				name: 'new user from db'
			}
		},
		save: function(user) {
			console.log(`Saving user ` + user.name + ` to db.`);
		}
	};
};

module.exports = new userRepository;