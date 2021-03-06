# Browser Games

Specifications

## General

- [x] Artifact produced is a fork of the browser-games repo.
- [x] Variables, functions, files, etc. have appropriate and meaningful names.
- [x] HTML, CSS, and JS files are well formatted with proper spacing and indentation.
- [ ] There is a clear separation of game logic code from view/rendering code.
- [x] All major features are added via pull requests with a clear description and concise commit messages.
- [x] The artifact produced is properly licensed, preferably with the MIT license.

## Tetris

- [ ] User stories and features for the game are added as issues to your repo with the label feature or user-story
- [ ] You’ll have to define these yourself by looking at the rules of the game and coming up with the right user stories & features
- [x] jQuery is used for DOM manipulation code
- [x] Tetris game can be found at public/tetris.html
- [x] Tetris game is playable
- [x] Players have a score
- [x] Game page is linked from public/index.html

## Stretch

- [ ] Players can configure the key mapping (e.g. change the “drop” key to the space bar)
- [ ] Game follows object-oriented patterns using ES6 classes

## Resources

jQuery Learning Center #jquery

Code School: Try jQuery #jquery #js #dom

CSS Tricks: Learn jQuery from Scratch #jquery #js #dom

Tetris Tutorial https://github.com/jonhoo/tetris-tutorial/

Video series on building tetris: part 1, part 2, part 3, and part 4

## Installation and Setup

Clone the repo, install npm dependencies, and start the server:

```shell-session
$ git clone git@github.com:GuildCrafts/browser-games.git
$ cd browser-games
$ npm install

...

$ npm start
...
Starting up http-server, serving ./public
Available on:
  http://127.0.0.1:4321
  http://10.0.1.11:4321
```

Then open `http://localhost:4321/` in your browser of choice and play away!
