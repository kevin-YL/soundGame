# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Kevin Sekuj**

Time spent: **12** hours spent in total

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tab), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Custom styling/animations

## Video Walkthrough


<a href="https://gifyu.com/image/ZVFB"><img src="https://s4.gifyu.com/images/memoryGame.gif" title="Video Walkthrough" alt="Video Walkthrough" border="0" /></a>

GIF created with [ScreenToGif](http://www.screentogif.com.com).

<h2>Name: Kevin Sekuj</h2>

<h3>1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.</h3>

<ul>
  <li>MDN Web Docs</li>
  <li>CSSTricks</li>
  <li>Javascript.info</li>
</ul>

<h3>2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it?</h3>

<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; After the base program was written, I knew that the first thing I wanted to do was attempt to up the ante a bit
visually - even for a webapp which was relatively simple in scope. Thus, my greatest challenge was implementing
a design and styling that I felt was both minimalist enough to match the simplicity of the game, while also offering
a visual experience that was perhaps interesting, and hopefully, appealing. As a novice web developer, specifically
implementing a "typing" effect for the program instructions header was a bit of a challenge. Although perhaps trivial for
an experienced developer, it was certainly enjoyable to implement a pure JavaScript solution for that particular feature!
</p>

<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Another challenge for me while writing this program was attempting to implement a timer for
player moves. In an earlier version of the program, I wrote a timer using JS's SetTimeout and ClearTimeout methods
at intervals of around 7000ms. If the player ran out of time during a turn, their turn would reset and they'd receive
  a strike. </p>
  
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unfortunately, the timer caused issues with other parts of the program's functionality - specifically
with sequence time being shortened on each successful move. This caused bugs such as sequence times being shortened and
not reset even after the player had lost, causing new game sequences to play out far too quickly for a player to adapt.
In the end, I wasn't happy with the quality of the timer, and considering the scope of the assignment, decided it was optimal
  to remove it for the time being.</p>

<h3>3. What questions about web development do you have after completing your submission?</h3>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Firstly, I'd be interested to know whether or not using global variables
for most of the program's scripting might cause issues further down the line in terms of implementing new features to the application. Particularly,
if some of these global variables are changed or mutated in some way, I imagine it that much of the application would break. Moreover, might the use
of globally scoped variables cause any security risks?

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Also, as a web developer, what are the best practices in terms of implementing a web application's HTML and CSS? Just
from my experience browsing popular websites and inspecting their interfaces, I've noticed that many developers forego using some of the
more "structured" HTML elements such as "main" or "section" in favor of mainly using various divs styled with class and ID selectors. On that note, I've also seen
quite a significant use of these more specific CSS selectors.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I've read discussions online and heard from an instructor before that it is preferable to keep one's HTML
more structured, and to avoid over-use of high specificity CSS selectors. However, I also recognize that developers are more likely to be concerned with
things like functionality or deadlines while on the job. Thus, I'd like to hear a web developer's take on how best practices are balanced with
getting a web-application functional within an appropriate amount of time.

<h3>4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific.</h3>

<p>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Firstly, I might try and refactor/rewrite some of the functions that aren't event handlers into arrow functions - while probably unimportant on a larger scale,
  I think rewriting the code in this way might help with readability and documentation. In terms of implementing new features, I might attempt to add some visual
  effects for transitions for the game buttons between games - just to spruce up an otherwise simple game. On that note, I would probably add an element to represent
  the player's current strikes, incrementing/resetting them when appropriate. </p>
  
  <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Outside of outright game features, I think it'd be quite interesting to implement
  a high-score system. Players could enter an alias, and their score would be recorded and displayed on a high scores page. To do so, I imagine one might
  consider connecting their web application to a database. Although I've not had any experiences with databases besides a very minimal grasp of MongoDB, it would
  be exciting to learn!
</p>

## License

    Copyright [Kevin Sekuj]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.