# Twisty

Simple application to be used with a Twister playmat.

Just click the spinner to reveal the randomly chosen color and body part. After two and half seconds the spinner will reset and resuming spinning. Just click again for the next move.

Upon clicking the spinner I generate a random number that will be used as the index to choose a css class from an array. I then target the event to add the chosen className. After 2500ms has elapse, I remove the added className to reset the image and animation.
