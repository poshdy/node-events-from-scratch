const Events = require("./events-from-scratch");

const events = new Events();

events.AddEvent("hi", () => console.log("hi"));
console.log();
