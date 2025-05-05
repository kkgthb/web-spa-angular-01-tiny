I have no idea if this is actually a proper Angular app or not.  It's such a confusing framework to make a tiny demo in.

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