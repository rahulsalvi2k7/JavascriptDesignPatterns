var Task = require(`./task`);
var UrgentTask = require(`./urgentTask`);

var myTask = new Task(`my legacy task`);
myTask.complete();
myTask.save();

console.log();
console.log();

var urgentTask = new UrgentTask(`my urgent task`, 2);
urgentTask.complete();
urgentTask.save();


class a{
    id;
    name;
}

class b extends a{

}

var bbb= new b();
console.log(bbb);