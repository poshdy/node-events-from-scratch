const Events = require("./events-from-scratch");
const e = require("node:events");
const events = new Events();
events.On("hi", (data) => {
  console.log(data);
});
// events.On("hi", () => {
//   console.log("hi2");
// });
// events.AddEvent("hello", () => {
//   console.log("hello");
// });
events.AddEvent("hello", () => {
  console.log("hello");
});
events.Once("enter", () => {
  console.log(123);
});
// console.log(events.events);
// events.off("hi");
// console.log(events.events);
// console.log(events.Consumers("hi"));
// events.EventNames();

events.Produce("enter");
events.Produce("enter");
events.Produce("enter");
events.Produce("hello");
events.Produce("hello");
events.Produce("hello");
// events.Produce("enter", 123);
// events.Produce("enter", 123);
// events.Produce("enter", 123);
// events.RemoveEvent("hi");
// console.log(events.events)
