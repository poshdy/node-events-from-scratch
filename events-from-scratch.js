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
  Once(event, fn) {
    this.events[event] = this.events[event] || [];
    const Once = () => {
      fn();
      this.off(event, fn);
    };
    this.events[event].push(Once);
    return this;
  }
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
  RemoveAllEvents() {
    const Events = this.events;
    for (const event in Events) {
      delete Events[event];
    }
  }
  Consumers(event) {
    const targetEvent = this.events[event];
    console.log(targetEvent);
  }
  EventNames() {
    const Events = this.events;
    for (const event in Events) {
      console.log(event);
    }
  }
  Produce(event, ...args) {
    const functions = this.events[event];
    if (!functions) return false;
    for (const fn of functions) {
      fn(...args);
    }
  }
  Before(event, fn) {
    const Event = this.events[event];
    if (Event) {
      this.events[event] = [fn, ...Event];
    } else {
      this.events[event] = [fn];
    }
  }
  After(event, fn) {
    const Events = this.events[event];
    if (Events) {
      this.events[event] = [...Events, fn];
    } else {
      this.events[event] = [fn];
    }
  }
};
