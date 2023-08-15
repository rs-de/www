### Update of a big php web app to containerized setup

- **From** PHP 5.4 with TYPO3 Flow 3, classic server installation, RDMS based session
- **To** PHP 7.4 with Neos Flow 6 in alpine based docker container, Redis based session
- **The good:** PHP core update went relatively smooth with reasonable amount of required code updates.
- **The bad:** The Template Engine stuff (NeosFlow) was the most time consuming part of the update process.

I did the updated within the planned time frame and it was fun to hand over the system to a second development team as part of a training course.
Later, the team was able to maintain it, e.g. do version updates themselves.
