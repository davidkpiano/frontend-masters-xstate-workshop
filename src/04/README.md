# Exercise 04 - Actions

## Goals

Execute an action with XState that set's the `data-point` attribute of `#box` to wherever it was clicked on the `mousedown` event.

## Tips

- Start with the previous state machine in Exercise 03.
- Use an inline function first for the transition action. Remember that action functions take two arguments - `context` and `event`.

## Extra Credit

- Separate the action into its own named function.
- Configure the action in the machine in the `options.actions` property in the second argument to `createMachine(def, options)`:

```js
createMachine(
  {
    // ...
  },
  {
    actions: {
      // ...
    },
  }
);
```

[Prev](../03/README.md) • [Next](../05/README.md)