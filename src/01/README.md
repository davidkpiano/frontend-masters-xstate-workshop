# Exercise 01 - Creating a State Machine

## Goals

Create a state machine that toggles the `#box` between the `inactive` and `active` states when clicked.

## Tips

- Start by using a `switch` statement for each of the states.
- Keep track of the current state (start with `inactive`).
- Listen for `click` events on `#box`, and "send" a click event that your state machine will interpret.
- Create a transition function that will return the next state given the current `state` and the `event` sent.
- Set the `data-state` attribute of the `#box` element to the current state.

## Extra Credit

- Use object syntax instead of a `switch` statement instead.
- Create a self-contained interpreter that uses a closure to keep track of the current state machine value. Get creative!

[Prev](../00/README.md) • [Next](../02/README.md)
