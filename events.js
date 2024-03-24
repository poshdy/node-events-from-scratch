const Events = require("./events-from-scratch");

const events = new Events();

events.On("hi", () => console.log("hi"));
events.On("hi", () => console.log("hi2"));
events.AddEvent("hello", () => console.log("hi"));
// console.log(events.events);
// events.off("hi");
console.log(events.events);
// console.log(events.Consumers("hi"));
events.EventNames();
// events.RemoveEvent("hi");
// console.log(events.events)
