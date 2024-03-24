const Events = require("./events-from-scratch");
const events = new Events();
events.Before("test", () => console.log("before test"));
events.AddEvent("test", () => console.log("test"));
events.AddEvent("test2", () => console.log("test2"));
events.After("test", () => console.log("after test"));

console.log(events.events);
events.Produce("test");
events.Produce("test2");

events.RemoveAllEvents();
console.log(events.events);
