var Task = require(`./task`);
var Mediator = require(`./mediator`);
var Services = require(`./services`);

var NotificationService = Services.notificationService;
var LoggingService = Services.loggingService;
var AuditingService = Services.auditingService;

var notificationService = new NotificationService();
var loggingService = new LoggingService();
var auditingService = new AuditingService();

var mediator = new Mediator();

mediator.subscribe('channel1', notificationService, notificationService.notify);
mediator.subscribe('channel1', loggingService, loggingService.log);
mediator.subscribe('channel1', auditingService, auditingService.audit);

var task1 = new Task({name:`Mediator demo`, user:`John`});

task1.complete = function(){
    mediator.publish('channel1', this);
    Task.prototype.complete.call(this);
}

task1.complete();