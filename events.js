const events = require("node:events");

const messi = new events();


messi.on("hi", () => {
  console.log("hi from on");
});

messi.emit("hi");
