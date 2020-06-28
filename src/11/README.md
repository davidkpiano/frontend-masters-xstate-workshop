# Exercise 11 - Parallel States

## Goals

Currently, when our statechart is in the `visible` state, we can only control its mode - `light` or `dark`. However, we want some behavior to happen at the same time where the `brightness` of the screen changes after a few seconds, to either `bright` or `dim`. These states can happen orthogonal (concurrently) to the other states, so let's model this as parallel states!

- After 5 seconds, we should go from `visible.brightness.bright` to `visible.brightness.dim`
- When a `SWITCH` event happens in `visible.brightness.dim`, we should go back to `visible.brightness.bright`.

## Tips

- You sill need to nest `visible.light` and `visible.dark` to `visible.mode.light` and `visible.mode.dark` as well.
- Don't forget initial states! We're initially on `visible.mode.light` and `visible.brightness.bright`.

## Extra Credit

- Try and see if a history state can remember where the screen was. This requires _deep_ history, not shallow history.

[Prev](../10/README.md) • [Next](../12/README.md)