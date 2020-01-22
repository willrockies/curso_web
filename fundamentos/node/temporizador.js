const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 23 * * 2", function() {
  console.log("Executando Tarefa 1!", new Date().getSeconds());
});

setTimeout(function() {
  tarefa1.cancel();
  console.log("Cancelando tarefa 1!");
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(2, 5)];
regra.hour = 23;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function() {
  console.log("Executando tarefa 2!", new Date().getSeconds());
});
