# Exercise 02 - XState

## Goals

Refactor the previous state machine with [XState](https://github.com/davidkpiano/xstate).

## Tips

- Make sure XState is installed:

```bash
npm install xstate
```

- With object syntax, create the same machine as [Exercise 01](../01/README.md).
- Use `machine.initialState` to start tracking the current state.
- Use `machine.transition(...)` to determine the next state.

## Extra Credit

- Get a feel for the shorthand and the object transition syntax. Which do you prefer?

[Prev](../01/README.md) • [Next](../03/README.md)