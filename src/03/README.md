# Exercise 03 - Interpreter

## Goals

Interpret state machines by using an interpreter. The machine should toggle between the `inactive` and `active` states:

- In the `inactive` state, when a `mousedown` event happens, go to `active`.
- In the `active` state, when a `mouseup` event happens, go to `inactive`.

## Tips

- Use the same machine as [Exercise 02](../02/README.md).
- Use `interpret(...)` to create a `service` that interprets the machine.
- Start the service with `service.start()`.
- Use `service.send(...)` to send events to the running service.

## Extra Credit

- Send the raw event from the event handler to the service instead. Notice how it fits the event object shape!
- Practice stopping the service when you no longer need it with `service.stop()` (e.g., after 10 seconds or so).

[Prev](../02/README.md) • [Next](../04/README.md)