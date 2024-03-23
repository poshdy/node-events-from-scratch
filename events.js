const events = require("node:events");

const messi = new events();

messi.prependListener("hi", () => {
  console.log("Hi from  prepend");
});
// messi.on("hi", () => {
//   console.log("Hi from on ");
// });
messi.on("hello", () => {
  console.log("Hello");
});

// messi.on("hi", () => {
//   console.log("hi from on");
// });

messi.emit("hi");
messi.emit("hello");
