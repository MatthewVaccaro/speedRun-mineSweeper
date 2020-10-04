# MINESWEEPER SPEED RUN

## Back Story --
During a drive home, a friend/engineer called me and challenged me to speed run the creation
of the game minesweeper. The goal was to write the needed logic to play the game in under three hours.
After roughly 13 seconds of contemplation, I said "ehh, should be easy" and accepted. 

## After Math --
About 2 hours in I started hitting a wall on how to write the logic correctly. I didn't take into account the
"ripple" that can happen in a sparely bomb populated area. 4 hours in I had 90% of the logic written and working.
I had come to the final obstacle which was updating state. Due to using recursion, I tried to update the state too
quickly and caused many infinite loops. 6 hours in, everything is working. All that is left is to style the squares
to show the clickable squares, broken squares, and the bombs once the game ended. Time: 7 hours 13 minutes.

## Learnings --
I am proud of what I was able to write. I underestimated the problem and started without clearly understanding
all of the nuances of the problem. It also made me much more comfortable with working with a matrix. Now, to make the UI
something really snazzy.