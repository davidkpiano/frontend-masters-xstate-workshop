# Exercise 05 - Context

## Goals

Use `context` to update the extended state of the drag/drop state machine. You will need to:

- Assign the point values (`px`, `py`) to wherever the `#box` was clicked on the `idle (mousedown) -> dragging` transition.
- Assign the delta values (`dx`, `dy`) to how far from the original `px` and `py` values the mouse has moved on the `dragging (mousemove)` transition.
- Assign the resting position (`x`, `y`) as the current position + the delta on the `dragging (mouseup) -> idle` transition.

## Tips

- Start with inline assign action objects created from `assign(...)`.
- Refactor these ouside the machine.
- Set these as configurable actions in `options.actions`.

## Extra Credit

- Listen for `keyup` events on the body. When `Escape` is pressed, we should cancel dragging and reset the box to its original position. Where would this transition go?

[Prev](../04/README.md) • [Next](../06/README.md)