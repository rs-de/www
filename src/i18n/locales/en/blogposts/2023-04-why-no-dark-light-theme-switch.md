## Why I decided to remove the Dark -/Light Theme switch from my web apps

I really like it if a web application follows the user's preferences.
So let us implement light and dark theme support in a web application.

### How does dark mode work

Since styling a web application is done with CSS, here is a simple example:

```css
/* example css */
body {
  background-color: white;
  color: black; /* text color */
  [...]
}
[...]

/* ↑↑↑ color settings above: "default" (or "light mode") ↑↑↑ */
@media (prefers-color-scheme: dark) {
  /* ↓↓↓ overwrite default color settings for "dark mode" ↓↓↓ */
  body {
    background-color: black;
    color: white;
    [...]
  }
  [...]
}
```

First there are the "default" settings and then, based on a media query, there is a block of CSS that overwrites the default settings (mostly colors) for "dark mode".
The CSS media query "prefers-color-scheme" is supported by all browsers today and can be [safely used](https://caniuse.com/?search=prefers-color-scheme). It is also supported by all major operating systems (Windows, macOS, iOS, Android, Linux, ...).

That's it, dark mode done. (As usual, there are special cases to care about, like images with transparency)

### Implementation of a toggle gets everything complicated

Since we can find these theme-toggles in many web applications nowadays, we're eager to add one too.

It seems to be simple: In a Single Page Application (SPA), for instance, we could just use a local-state to implement the toggle.
But what if the user reloads the page? State is gone. Ok, no problem ... let's add some flag to localStorage, done ... or not?
Unfortunately, there is a issue if the user loads the page the first time (or on reload of the page): there is a short "flicker" (from white to black background): The page is loaded with the default theme and then, after the page is done loading, the theme is switched to the user preference by javascript based on localStorage. This is not a good user experience. But even if this has been solved, there are still edge-cases: If a page is rendered on the server-side, the server does not know about any setting, but we want to render the page in the correct layout. No problem ... we can use a cookie! ... hm, thank god there are some packages on npm to make it easier to integrate :-). Ah, just forgot ... we have to adapt cookie settings in our privacy policy, we all know this gorgeous dialog forcing us to say "Yes, it's ok to use the cookie".

### So why do we add a toggle button?

When I thought about it two reasons came in my mind:

1. As a _developer_ I want to test the dark mode on my website and be able to switch modes
2. There might be bugs where dark mode fails, like if something is not "visible" on the page causing the user to struggle. So if we implemented a toggle, the user can still switch back to light mode and view the site as intended. 

In case 1) We can use the browser's developer tools to enable dark mode (or switch between dark and light). If we use it, we do not need a button within the app. As an example, here's said feature inside the devtools of chrome:

![dev tools theme toggle](/img/blog/devtools-darkmode.webp)

In case 2) we just have to fix the bug, as usual.

#### But there are more reasons, why we might think a toggle button is good:

It can be error-prone to support Darkmode. For instance, in tailwindcss we must add a "dark:" modifier to every class we have to overwrite, in order to support dark mode. So we have to carefully not forget it. But because there's the possibility that we could forget it, we will forget it from time to time as murphy's law dictates. . It looks like this:

```
// tailwind example of some div to style
<div class="bg-white dark:bg-slate-800  [...]

```

It's really easy to forget some "dark:" settings! Since tailwind (or CSS) is so flexible, I found one solution to overcome this issue:
[radix-ui/colors](https://www.radix-ui.com/colors).  
If radix-ui/colors are installed (there are tailwind plugins) the example above would look like this:

```
<div class="bg-slate-2  [...]
```

Only one setting and Darkmode is supported out of the box. (With a little overhead to learn the 12 color scales of radix-ui/colors)

#### What about download size of css file(s)?

I read about some complaints that it feels "wrong" to add the dark settings to the css statically, because it might not be needed.
I think we must live with that, and just follow the standard (as long as possible): CSS is statically pre-defined, loaded once upfront (and cached) and a http GET request should be stateless. If it is done right, it is really not that much of code.

### What about the users?

It is very likely most of the users do not care!
Users who prefer dark mode will have it enabled in their operating system and users who prefer light mode do not care at all, because it's the default.  
The best button might be the one we don't need.

### Conclusion

Because of the mentioned reasons, I decided to remove the toggle button from the page, and it happened to be nice:

- "workaround" code can be removed
- no cookie and/or lokal storage entry anymore
- no "flicker" issue (google for "theme flicker on page load" and you will find a lot of articles about that problem).

In the end it just works. Without a toggle button.
