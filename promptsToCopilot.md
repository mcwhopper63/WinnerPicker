1/14/2024

In landing.jsx.

i want the user's pick to have a yellow border, to indicate that fighter was selected.
i want the selections to persist until either the page is refreshed, or the generate button is clicked.

i want to learn so pls assist me.

Pls confirm i am understanding this correctly.

Here are the requirements.:

1. There can only be one fighter that is selected at any given time. If one fighter is selected and the other fighter is clicked on, the selection changes to the clicked fighter.
2. Generate can only be clicked when all the buttons are selected.

Here is my pseudcode.

For point 1,
I don't know how to do this but this is a guess. I think I need to keep a new state and call it winnerState. i think this should be at the fightComponent level. once a fighter is clicked, the setWinner sets the fighter's lastName to the winner state. we then assign a className called winner and give it border properties of 2px solid yellow. at the fighterComponent level, i will toggle a className of either winner or non-winner. the winner css class will have border properties of 2px solid yellow, and the non-winner class will have border none. this class will toggle, depending on who is set as the winner state. I need some feedback on the above psuedocode and also step by step instructions on how to create this.

For point 2,

1. if selection's length is less than the length of fights.length,
2. tag a class of incomplete
3. if incomplete, the button should not be clickable. This is a comment, but let's also add a message "Pls select a winner for all fights to generate" when the mouse is hovered over.
