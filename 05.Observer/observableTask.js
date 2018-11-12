var Task = require(`./task`);
var ObserverList = require(`./observerList`);

var ObservableTask = function (data) {
    Task.call(this, data)
    this.observers = new ObserverList();
}

ObservableTask.prototype.addObserver = function (observer) {
    this.observers.add(observer);
}

ObservableTask.prototype.removeObserver = function (observer) {
    this.observers.removeAt(this.observers.indexOf(observer));
}

ObservableTask.prototype.notify = function (context) {
    var observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
        let f = this.observers.get(i);        
        if (typeof f === "function") {
            f(context);
        }
    }
}

ObservableTask.prototype.save = function () {
    this.notify(this);
    Task.prototype.save.call(this);
}

module.exports = ObservableTask;