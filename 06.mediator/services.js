var notificationService = function () {
    var message = `Notifying `;
    this.notify = function (task) {
        console.log(message + task.user + ` for task ` + task.name);
    }
}

var loggingService = function () {
    var message = `Logging `;
    this.log = function (task) {
        console.log(message + task.user + ` for task ` + task.name);
    }
}

var auditingService = function () {
    var message = `Auditing `;
    this.audit = function (task) {
        console.log(message + task.user + ` for task ` + task.name);
    }
}

module.exports = {
    notificationService: notificationService,
    loggingService: loggingService,
    auditingService: auditingService
}
