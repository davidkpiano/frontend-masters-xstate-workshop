# Exercise 10 - History States

## Goals

Create a machine that shows and hides a display. When that display is visible, we should be able to switch between light and dark mode for that display.

However, when we go from `visible` to `hidden` and back to `visible`, the machine forgets what mode we were in!

Use a history state to "remember" what the most recent mode (child state) of the `visible` state was.

## Tips

- Instead of transitioning directly to the parent state, you would transition directly to its child history state using dot-syntax.

## Extra Credit

- Set the `target` of the history state to set the default target when there is no history. Without this, the machine will just go to the initial state of the parent state, which works for most use-cases.
- What if there were two types of dark modes? Try using deep history to remember the deepest state.

[Prev](../09/README.md) • [Next](../11/README.md)