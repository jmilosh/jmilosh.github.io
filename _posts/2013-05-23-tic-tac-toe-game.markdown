---
date: 2013-05-23
layout: post
title: Tic-tac-toe game
categories:
- JavaScript
---

[![tic-tac-toe game with cat faces]({{ "/images/tictactoe.png" | prepend: site.baseurl | prepend: site.url }})](http://janmilosh.github.io/tic-tac-toe/)

This game was written in pure JavaScript (no jQuery) and was a personal code challenge project. Play it here: [janmilosh.github.io/tic-tac-toe](http://janmilosh.github.io/tic-tac-toe/). The player moves first and can choose the "easy game" option at the click of a button. In this case, the computer will always block a move or complete a row to win, but otherwise makes random moves.

During the player's move, the cat image appears on hover and stays upon click. The player can change his mind and select a different position until the "Finalize Move" button is clicked. This then locks in the player's move and allows the computer to make a move. If there is a win, an alert box appears and no more moves can be made. The "New Game" button clears the board without a page re-load.
