const Events = require("./events-from-scratch");
const events = new Events();
events.Before("test", () => console.log("before test"));
events.AddEvent("test", () => console.log("test"));
events.After("test", () => console.log("after test"));

events.Produce("test");
