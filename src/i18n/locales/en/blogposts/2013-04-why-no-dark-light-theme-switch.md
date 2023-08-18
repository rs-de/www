## Why I decided to remove the Dark -/Light Theme switch from my web apps

I really like, if a web application follows user's preferences.
So let us implement light and dark theme support in a web application.

### How does dark mode work

Since styling a web application is done by CSS, here is a simple example:

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
The CSS media query "prefers-color-scheme" is supported by all browser today and can be [safely used](https://caniuse.com/?search=prefers-color-scheme). It is also supported by all major operating systems (Windows, macOS, iOS, Android, Linux, ...).

That's it, dark mode done. (As usual, there are special cases to care about like images with transparency)

### Implementation of a toggle gets everything complicated

Since we can find this theme-toggles in many web applications nowadays, we add one too.

It seems to be simple: In a Single Page Application (SPA), for instance, we could just use local-state to implement the toggle.
But what if the user reloads the page? State is gone. Ok, no problem ... let's add some flag to localStorage, done ... or not?
Unfortunately there is a issue if the user loads the page the first time (or on reload of the page): there is a short "flicker" (from white to black background). The page is loaded with the default theme and then, after the page is loaded, the theme is switched to the user preference by javascript based on localStorage. This is not a good user experience. But even this has been solved, there are still edge-cases: If a page is rendered on server side the server does not know about any setting, but we want to render tha page in correct layout, no problem ... we can use a cookie! ... hm, thanks god there are some packages on npm to make it easier to integrate :-). Ah, just forgot ... we have to adapt cookie settings in our privacy policy, we all know this gorgeous dialog forcing us to say "Yes, it's ok to use the cookie".

### So why do we add a toggle button?

When I thought about it two came in my mind:

1. As _developer_ I want to test the dark mode on my website and be able to switch
2. There might be bugs where Darkmode fails, something is not "visible" on the page and user struggles: But the User might be happy to have a switch? Maybe not: It is very likely that the user does not know about this "workaround" or does not find the toggle

In case 1) We can use browser's developer tools to enable dark mode (or switch between dark and light). If we use it, we do not need a button within the app. Here devtools of chrome:

![dev tools theme toggle](/img/blog/devtools-darkmode.webp)

In case 2) we have just to fix the bug, as usual.

#### But there is something more, why we might think a toggle button is good

It can be error-prone to support Darkmode. For instance, in tailwindcss we must add a "dark:" modifier to every class we have to overwrite in order to support dark mode. So we have to carefully not forget it. But we will forget one (because we can). It looks like this:

```
// tailwind example of some div to style
<div class="bg-white dark:bg-slate-800  [...]

```

Really easy to forget some "dark:" settings! Since tailwind is so flexible (or CSS) I found one solution to overcome this issue:
[radix-ui/colors](https://www.radix-ui.com/colors).  
If radix-ui/colors are installed (there are tailwind plugins) the example above would look like this:

```
<div class="bg-slate-2  [...]
```

Only one setting and Darkmode is supported out of the box. (With a little overhead to learn the 12 color scales of radix-ui/colors)

#### What about download size of css file(s)

I read about some complaints it feels "wrong" to add the dark settings to the css statically, even it might not be needed.
I think we must live with that, and just follow the standard (as long as possible): CSS is statically pre-defined, loaded once upfront (and cached) and a http GET request should be stateless. If it is done right, it is really not much of css.

### What about the users?

It is very likely most of the users do not care!
Users who prefer dark mode will have it enabled in their operating system and users who prefer light mode they do not care at all, because it's the default.  
The best button might be the one we do not need.

### Conclusion

Because of that reasons I decided to remove the toggle from the page, and it happened to be nice:

- "workaround" code can be removed
- no cookie and/or lokal storage entry anymore
- no "flicker" issue (google for "theme flicker on page load" and you will find a lot of articles about that problem).

It just works. Without a toggle button.
