var mediator = function () {    
    this.channels = {};
    this.subscribe = function (channel, context, func) {
        if (!this.channels[channel]) {
            this.channels[channel] = [];
        }
        this.channels[channel].push({
            context: context,
            func: func
        });
    }
    this.publish = function (channel) {
        console.log(channel);
        if (!this.channels[channel]) {
            return false;
        }
        var args = Array.prototype.slice.call(arguments, 1);
        for (let i = 0; i < this.channels[channel].length; i++) {
            let sub = this.channels[channel][i];
            sub.func.apply(sub.context, args);
        }
    }
};

module.exports = mediator;