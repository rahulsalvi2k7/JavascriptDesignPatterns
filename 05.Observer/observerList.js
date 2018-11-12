function ObserverList() {
    this.observerList = [];
    this.add = function (obj) {
        this.observerList.push(obj);
    };
    this.get = function (index) {
        if (!isNaN(index) && index > -1 && index < this.observerList.length) {
            return this.observerList[index];
        }
    }
    this.count = function() {
        return this.observerList.length;
    }
    this.indexOf = function(observer){
        return this.observerList.indexOf(observer)
    }
    this.removeAt = function(index){
        this.observerList.splice(index, 1);
    }
}

module.exports = ObserverList;