module.exports = class NewEmitter {
  events = {};

  // on(){}

  // once(){}

  // off(){}

  //   RemoveEvent(event, fn) {
  //     const Event = this.events[event];
  //     if (Event) return `There is no event called ${event}`;
  //   }

  AddEvent(event, fn) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(fn);
    return this;
  }

  // Produce(){}

  // AddEvent(){}
};
