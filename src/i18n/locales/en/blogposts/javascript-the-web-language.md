## JavaScript: The Web Language

If you think about human languages and assume you'd have to hire developers to build up a team, you would very likely require the candidates to speak a language everyone understands. Since good communication is a key for efficient, successful software-development, it is clear that you need one language every team member understands.

But what about programming languages? Basically the same thing: If possible you would use one language to implement an application.

In the early days of my web development career it was normal to work with more than
one programming language to build web applications.
On the server-side most of the time I used PHP (sometimes Java), on the client-side JavaScript.
Besides the fact that it would have been possible to build web apps only on the server-side (and therefore only with one language of choice), it was always required to build user interfaces which are snappy and responsive: Menu navigation should open and close fast, forms should be validated on the fly, and so on.
This has been done with JavaScript in the vast majority of cases. (Flash or Java applets were also a thing, but it was not so common).
So there was always a need to know JavaScript.

In 2009 [node.js](https://nodejs.org) was released and from that point in time it was possible to use JavaScript on the server-side, too.
How cool was that? It took some time for the community to build up the eco system (packaging system, libraries, etc.) and in 2014 I started to use it on server-side!

Since then, a lot has changed towards getting JavaScript better and better, my personal favorites are:

- [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions),
- [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) for array and objects,
- [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function),
- [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

...And TypeScript! Even though I was a late adopter of TypeScript, I am very happy to use it now.

## Some facts about JavaScript in 2023

- JavaScript is the most popular programming language in the world (see [stackoverflow](https://survey.stackoverflow.co/2022#most-popular-technologies-language) or [github](https://octoverse.github.com/2022/top-programming-languages)). The consequences are:
  - It's easier to find developers
  - Very good Community support
  - Good for Artificial Intelligence (AI) and Machine Learning (ML) (huge open source community => a lot of data)
  - Chance to find some libraries for your use case is higher
- JavaScript is also heavily used for desktop (offline capable) applications (see [electron apps](https://www.electronjs.org/apps))
- Many mobile apps are build with JavaScript, e.g. with [react native](https://reactnative.dev/showcase)

## Conclusion

Since JavaScript/TypeScript is a feature rich, well supported and growing base of a huge eco system today, it is kind of an obvious decision to me, to use it on the server-side too. So, if you are going to build a new user interface, or rebuild an existing one, and JavaScript is not used or planned to be used on the server-side: Consider to use it!

## Beware

Although JavasScript is very capable, it can and should _not_ be used for everything!
Nevertheless, especially for user interfaces and web applications it is very likely to be an excellent choice.
