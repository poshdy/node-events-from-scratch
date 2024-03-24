module.exports = class NewEmitter {
  events = {};

  AddEvent(event, fn) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(fn);
    return this;
  }

  On(event, fn) {
    return this.AddEvent(event, fn);
  }

  // once(){}

  RemoveEvent(event, fn) {
    const Events = this.events;
    for (const targetEvent in Events) {
      if (event == targetEvent) {
        delete Events[event];
      }
    }
    return this;
  }
  off(event) {
    return this.RemoveEvent(event);
  }
  Consumers(event) {
    const targetEvent = this.events[event];
    return targetEvent;
  }
  EventNames() {
    const Events = this.events;
    for (const event in Events) {
      console.log(event);
    }
  }

  // Produce(){}
};
