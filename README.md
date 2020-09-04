# Acronymize

Write a function that returns the acronym of a sentence.

---

## Preparation

Live-code happens on the teacher's laptop, plugged to a projector in the classroom.

Open a terminal and run:

```bash
mkdir -p ~/code/lewagon/livecodes/acronymize-js && cd $_
touch acronymize.js
stt
```

Use [Split View](https://support.apple.com/kb/PH25072?locale=en_US) with the
Terminal and Sublime Text. The student should be able to easily switch between
both applications and at any time run:

```bash
node acronymize.js
```

## Context

Break the ice with the classroom asking them what is an [Acronym](https://en.wikipedia.org/wiki/Acronym) and ask for examples. Once everyone is warmed up, ask for a volonteer to come on stage.

## Let's do TDD!

We are going to use TDD (without a framework). Write the tests yourself in front of the classroom.

Help the students to write a first test. That will force them to think about the function **signature** (name, parameters, type returned). They should come up with something like:

```js
console.log(acronymize("Frequently Asked Questions") === "FAQ");
```

Make sure to run the code first to check that it's **red** (An exception will be thrown).

```bash
node acronymize.js
# => ReferenceError: acronymize is not defined
```

Before jumping to the implementation, ask the class to think about _edge cases_. Somethink like passing an empty sentence, or a sentence with only lower cased characters, or upper cased characters, etc. We won't do `ArgumentError` when passing something else than a `String` as it's easier with a proper testing framework but if they raise this tell them it's a good idea and we will see that later.

```js
// Other test examples
console.log(acronymize("") === "");
console.log(acronymize("AWAY FROM KEYBOARD") === "AFK");
console.log(acronymize("working from home") === "WFH");
```

## Implementation

We have some red tests? Now it's time to implement the `acronymize` function (or any other name the class chose)!

Once the `ReferenceError` has been fixed thanks to this code:

```js
const acronymize = (sentence) => {
  // TODO
};
```

Have the classroom think about the **pseudocode** first. They should write
it using **code comments**. Something like that:

```js
const acronymize = (sentence) => {
  // 1. Split the sentence into words
  // 2. Initialize an empty array `letters`
  // 3. Iterate over words, for each word, select the first letter (how?)
  // and store it in `letters`
  // 4. Join elements of `letters`, uppercase it and return it
};
```

Run the JS code as soon as (and as often as) possible to make sure that the **error message guides you** to the correct implementation. You can mention the **red** / **green** / **refactor** steps:

![](https://octoberclub.files.wordpress.com/2011/10/red-green-refactor.png)


# Rock-Paper-Scissors

Implement a Rock-Paper-Scissors game.

![Rock-Paper-Scissors](https://raw.githubusercontent.com/lewagon/fullstack-images/master/ruby/rock-paper-scissors.png)

---

## Preparation

Open a terminal and run:

```bash
mkdir -p ~/code/lewagon/livecodes/rock-paper-scissors-js && cd $_
touch game.js
stt
```

You can run the code with:

```bash
node game.js
```

## Introduction

Discuss with the class about the game. How is it played? What are the rules? How could we translate this game into a 1v1 against the computer?

## Implementation

We are **not** going to write an _interactive_ program at first because there is no easy way get user input from terminal in Node. Let's just focus on the implentation of the computation of the result of the game.

The **pseudo-code** phase is **vital** for this project. Start with that using JS code comments. The group should come up with something like this:

```js
// Pick randomly a hand for the computer
// Pick a fixed hand for the player
// Display a message with the player's hand
// Compare both hands! Outcome is Win / Lose / Draw
// Display the outcome and exit
```

## Going further

If you have questions about how to get input from the terminal in Node, you can implement [this code](https://nodejs.org/api/readline.html#readline_readline:~:text=The%20following%20simple%20example%20illustrates%20the%20basic%20use%20of%20the%20readline%20module.)
