# Exercise 12 - Invoking Actors

## Goals

Instead of a fire-and-forget action, we want to **invoke** an actor that will send an event back to the invoking machine. Using the `invoke` property, invoke a promise that eventually resolves (or rejects) with a value, and transition to the appropriate states (`resolved` or `rejected`).

## Tips

- `onDone` is a special transition in the `invoke: { ... }` object that captures the resolved promise data.
- `onError` is a special transition in the `invoke: { ... }` object that captures the rejected promise data.

## Extra Credit

- Add cancellation - if the user manually cancels the promise, we should get out of the `pending` state and back to the `idle` state. The promise will be cancelled automatically!
- Likewise, let's set a timeout if the promise takes longer than expected. This should go to the `rejected` state.
- Try invoking other things, like a machine, observable, or a callback.

[Prev](../11/README.md) • [Next](https://twitter.com/swyx/status/1233187898943516673)