var Task = require(`./task`);
var Observers = require(`./observers`);
var ObservableTask = require(`./observableTask`);
var NotificationService = Observers.notificationService;
var LoggingService = Observers.loggingService;
var AuditingService = Observers.auditingService;

var task1 = new ObservableTask({name:`ctor demo`, user:`John`});
var notificationService = new NotificationService();
var loggingService = new LoggingService();
var auditingService = new AuditingService();

task1.addObserver(notificationService.notify);
task1.addObserver(loggingService.log);
task1.addObserver(auditingService.audit);

task1.save();

task1.removeObserver(auditingService.audit);

task1.save();
