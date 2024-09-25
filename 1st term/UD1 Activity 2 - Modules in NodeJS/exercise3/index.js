const moment = require('moment');

let now = moment();
let before = moment("10/07/2015", "DD/MM/YYYY");
let after = moment("24/06/2040", "DD/MM/YYYY");

let oneMonth = moment().add(1, 'months');

console.log(moment.duration(after.diff(before)).years());

if (before.isBefore(now)) {
    console.log(before.format("DD/MM/YYYY") + " is older than " + now.format("DD/MM/YYYY"));
}
if (after.isAfter(now)) {
    console.log(after.format("DD/MM/YYYY") + " is younger than " + now.format("DD/MM/YYYY"));
}

console.log(oneMonth.format("DD/MM/YYYY"));

