const { CronJob } = require("cron");

console.log("This will log before job instantiation");

const job = new CronJob("* * * * *", () => {
  console.log("Cron is executing now. timestamp: ", new Date());
});

console.log("This will log after job instantiation");

module.exports = job;