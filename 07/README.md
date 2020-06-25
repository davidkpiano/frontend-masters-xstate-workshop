# Exercise 07 - Transient Transitions

## Goals

We don't want the `#box` to be draggable unless we are authorized (i.e., there is a `user` in `context`).

## Tips

- Start with an initial state that will check the authentication status using a guarded transition.
- That state should immediately move to `idle` if we're authorized.
- If we're not authorized, the state should move to an `unauthorized` state.
- Make a **machine creator** that can create the machine with the given `user`, if it exists.
- Alternatively, use `machine.withContext(...)` to specify the user.

## Extra Credit

- If we're not authorized, give us a chance to sign in. The sign in button is available on the page. What should this transition look like, and where should it transition to?

[Prev](../06/README.md) • [Next](../08/README.md)