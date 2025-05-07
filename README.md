I have no idea if this is actually a proper Angular app or not.  It's such a confusing framework to make a tiny demo in.

---

## Unit testing vs integration testing

Anyway, one of the things I like about this codebase is that it shows off how a frontend developer can, as part of their normal build-pipeline processes, using nothing but the **Angular** JavaScript code they **already know and love**, run **fast**\-executing **unit** tests that **separately** validate that:

1.  Their data-fetching code **is fetching data that conforms to business expectations**.
    * _(`getGreeting()`)_
2.  Given specific fetched data _(here, "`Mockity mock mock mock`")_, their templating code **displays HTML as expected**.
    * _(`<h1>...</h1>`)_

The comments in the `.spec.ts` files talk about how the art of **mocking** turns [the `<h1>...</h1>` component test](/src/web/src/app/features/greeting/greeting.component.spec.ts) from a slow-running _**integration**_ test into a fast-running _**unit**_ test.

* The "mocked" component test doesn't waste its precious time calling `getGreeting()`.
* After all, `getGreeting()` already had [its own test](/src/web/src/app/features/greeting/helpers/getGreeting/getGreeting.spec.ts) that did so.

Check it out -- it's pretty nifty!

---

## Frontend-only opportunities for unit testing

Here're some quick-and-dirty samples I found of opportunities for mocking *within* a frontend (as opposed to just mocking out the backend).

1.  Undo/redo functionality.  The helper manages the undo/redo stack.  The component shows the buttons and current state.  The component's unit test mocks the helper stack to simulate "no more undos" or "multiple redos," ensuring that the component disables/enables buttons correctly.  The integration test *(perhaps optional, if not critical, or perhaps run less frequently)* uses real stack logic to ensure that the UI updates as a user performs actions.
2.  Theme/darkmode toggle.  The helper stores/retrieves the current theme from local browser storage.  The component toggles the theme & updates the UI.  The component's unit test mocks the theme helper to instantly switch themes, testing UI reaction without touching actual browser-emulator storage, making sure that the correct classes are applied.  Integration test *(same disclaimer)*:  use the real service to ensure the toggle actually persists into local browser storage *and* that the correct classes are applied.
3.  In-app notification system.  Helper queues/manages notifications.  Component renders notification popups.  The component's unit test mocks the notification helper to simulate bursts of notifications, ensuring the component displays & removes them as expected.
4.  Drag-and-drop list reordering.  Helper calculates new item order after a drag event.  Component renders the list & handles drag events.  The component's unit test mocks drag events, helping ensure that UI updates work well even for edge cases (e.g. dragging to the start/end).  Integration test *(same disclaimer)* uses real drag events to ensure that the list order is correct *and* that the UI updates worked well.
5.  Form validation & error display.  Helper validates fields & returns error messages.  Component shows errors inline as the user types.  The component's unit test mocks validation results to check that the component displays the error messages gracefully (e.g. that error messages don't overflow their allotted space in a weird way, e.g. that errors appear/disappear from the UI as mocked validation results shift).  ("Displays the right errors for every possible case" can live in the helper's unit test.)  Integration test *(same disclaimer)* can ensure errors disappear as a user performs actions.