# javascript-engine

WIP in-browser JavaScript game engine (name to change).

My goal is to create a game engine that removes all of the boilerplate JavaScript and canvas code from the game developer's vision. Think MIT Scratch but with JavaScript.

From my experience visual block code (eg. MIT Scratch) mostly has an appeal for elementary students, but middle and high school students have a hard time focusing on writing purely text-based programs in Python. I've seen K-12 students lose interest if there is no visual component involved.

I envision this project as a strong educational middleman between MIT Scratch and text-based Python projects. Users will be able to write real, native JavaScript code withouut having to deal with the nuances of setting up a canvas or calculating tick cycles.

Games are mobile-ready and developers are able to target desktop browsers or mobile devices.

# Project Structure

```bash
src
  ├── core
  │   ├── canvas.js
  │   ├── events.js
  │   └── game.js
  ├── entities
  │   ├── entity.js
  │   ├── image.js
  │   └── text.js
  └── game
      ├── index.js
      ├── logic.js
      ├── patrick.jpg
      ├── patrick.js
      └── welcome.js
```

- core
  - for all engine-based mechanics. immutable to the game developer
    - canvas.js makes draw calls
    - events.js is an abstract class for all basic game events, like detecting clicks and keypresses. should be subclassed by entities or the game object itself
    - game.js is the game object. it handles things like the game loop and entity loading
- entities
  - contains classes for the types of entities the game dev might want
    - entity.js is the abstract class that is subclassed by specific entity types
    - image.js extends entity.js and represents an ImageEntity
    - text.js extends entity.js and represents a TextEntity
- game
  - contains all game developer code
  - a sample ImageEntity (patrick.js and its accompanying patrick.jpg) and a sample TextEntity (welcome.js) are provided
  - must contain an index.js, which allows webpack to properly pack all user-written entities
