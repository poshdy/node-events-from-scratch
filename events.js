const events = require("node:events");

const messi = new events();

messi.addListener("hi", () => {
  console.log("hi from add listener");
});
messi.on("hi", () => {
  console.log("hi from on");
});

messi.emit("hi");
