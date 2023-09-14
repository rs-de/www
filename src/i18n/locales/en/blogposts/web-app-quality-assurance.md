## Quality Assurance for Web Applications

Once a web application is functional and ready for deployment one key step
– serving business value — is done. Nice!
But there is another thing to care about: **Quality Assurance (QA)**. Fortunately
there are open source tools available to check several aspects of a web application.

Since I just build up _this_ page, I tested them and will describe the tools used and the results I got:

### Google Lighthouse

#### Prerequisites

- Google Chrome Browser installed

The first tool is [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/).
Everybody who has a Google Chrome browser installed can use it. It is integrated in the developer tools,
to open it just press _F12_ on MS Windows and _Command+Option+I_ on Mac.
When I ran it on my page, the results were pretty good, however the SEO (Search Engine Optimization) scores had room for improvement, because page meta tags where missing.
After I added the meta description tags to the page I got this:
![Google Lighthouse end result of rushsoft.de in 2023](/img/blog/lighthouse-result-rushsoft-de-2023.png)
_These little color dots are part of some "firework animation" google developers added to the tool if an app achieves a score of 100% in all categories. :-)_

Nice! 100% in all categories. But what does it mean? Let's have a look at the categories.
Stop ... too much details. When working on projects it is essential to remember the [80/20 rule](https://en.wikipedia.org/wiki/Pareto_principle). Only if there is something bad we have to investigate further.
In this context bad means: A _red_ or _orange_ number. If the tool shows a _green_ result, it is good enough most of the time.
In my case, although there was a good result, the effort to improve it further was only a matter of minutes, so I did it anyways.
Next tool, more about security ...

### OWASP ZAP

#### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed

The next tool I used is [OWASP ZAP](https://www.zaproxy.org/).
It is a tool to check web applications for security issues.
It is available as a desktop application or as a docker image.
I used the docker image to check my page (domain replaced by example):

```bash
docker run -t owasp/zap2docker-stable zap-baseline.py -t https://www.example.com
```

It is only a baseline, passive check, but it is a good start and easy to use, as you can see.
ZAP crawls and requests all pages it can find and generates reports about it's findings.
(A good example why it is important to use HTML's anchor element instead of JavaScript for links).

Here are the results:

```bash
WARN-NEW: Re-examine Cache-control Directives [10015] x 8
WARN-NEW: Missing Anti-clickjacking Header [10020] x 8
WARN-NEW: X-Content-Type-Options Header Missing [10021] x 11
WARN-NEW: Information Disclosure - Suspicious Comments [10027] x 11
WARN-NEW: Strict-Transport-Security Header Not Set [10035] x 11
WARN-NEW: Server Leaks Version Information via "Server" HTTP Response Header Field [10036] x 11
WARN-NEW: Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s) [10037] x 10
WARN-NEW: Content Security Policy (CSP) Header Not Set [10038] x 10
WARN-NEW: Non-Storable Content [10049] x 11
WARN-NEW: Permissions Policy Header Not Set [10063] x 11
WARN-NEW: Timestamp Disclosure - Unix [10096] x 2
WARN-NEW: Modern Web Application [10109] x 10
```

_Note: I removed the passed checks and the lines with the links to the pages, because they are not relevant for this post._

The result is not that bad. The warnings are mostly about missing HTTP response headers.
Since the page is build with [Next.js](https://nextjs.org/), but not deployed via [Vercel](https://vercel.com/), these headers need to be added manually.

Unfortunately one header couldn't be fixed (without hacks) - the first one: _Re-examine Cache-control Directives_.
If you use frameworks, you have to accept limitations sometimes.

### Conclusion

- The tools are easy to use and they give you a good overview about the quality of a web application.
- There are options to include them in a CI/CD pipeline, maybe not for every run, but for a nightly run as an example.

### Beware

Everything has its costs, It is important to discuss and review the status quo of a project with the stakeholders and define the goals step by step.
It is not necessary to achieve 100% in all categories. It is important to know the risks and to have a plan to mitigate them.
