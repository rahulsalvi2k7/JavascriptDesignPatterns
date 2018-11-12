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

