const Events = require("./events-from-scratch");

const events = new Events();

events.On("hi", () => console.log("hi"));
events.AddEvent("hello", () => console.log("hi"));
console.log(events.events);
events.off("hi");
console.log(events.events);
// events.RemoveEvent("hi");
// console.log(events.events)
