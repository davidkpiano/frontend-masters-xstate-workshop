# Exercise 06 - Guarded Transitions

## Goals

Use a guarded transition and `context` to prevent the `#box` from being dragged more than 5 times.

## Tips

- Start with inline assign action objects created from `assign(...)`.
- Refactor these ouside the machine.
- Set these as configurable actions in `options.actions`.

## Extra Credit

- Listen for `keyup` events on the body. When `Escape` is pressed, we should cancel dragging and reset the box to its original position. Where would this transition go?

[Prev](../05/README.md) • [Next](../07/README.md)