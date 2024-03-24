const Events = require("./events-from-scratch");
const events = new Events();

events.Before("test", () => console.log("before test"));

events.AddEvent("test", () => console.log("Test AddEvent Method"));
events.On("test 2", () => console.log("Test On Method"));
events.Once("test 3", () => console.log("Test Once Method"));

events.After("test", () => console.log("after test"));

events.Consumers();
events.Produce("test");
// events.Produce("test 2");
// events.Produce("test 2");
// events.Produce("test 3");
// events.Produce("test 3");

// console.log(events.events);
