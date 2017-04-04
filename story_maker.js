function makeStory() {
    // get form values (2 points)
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var adjective3 = document.getElementById('adjective3').value;
    var favGame = document.getElementById('favGame').value;
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var favoriteMeme = document.getElementById('favoriteMeme').value;
    var pluralnoun1 = document.getElementById('pluralnoun1').value;
    var pluralnoun2 = document.getElementById('pluralnoun2').value;
    var pluralnoun3 = document.getElementById('pluralnoun3').value;
    var verb1 = document.getElementById('verb1').value;
    var verb2 = document.getElementById('verb2').value;
    var verb3 = document.getElementById('verb3').value;


    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "Meme story";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "I work in a Meme company called " + adjective1 + " Memes and today we had a special guest. " + favoriteMeme + " visited us today and we couldn't contain ourselves when they walked into our pawn shop."
    var paragraph2 = "They requested for memes that are " + noun2 + " and " + noun3 + " and also wholesome, original, and not stolen by any loser on Know Your Meme. I suggested " + favGame + " memes."
    var paragraph3 = "Weak, they said. Pretty sure that some  " + noun1 + " blogs on Tumblr already had that idea. They were right; Tumblr is a mess anyways."
    var paragraph4 = "Okay, okay if yall've'd'est are up to it, we should celebrate with Boca Bolas later. " + " Three " + adjective2 + " hours later, we finally got the memes made and watermarked and ready to show to " + favoriteMeme + " and the public."
    var paragraph5 = "The public showcase was hot. People here and there were " + verb1 + " , " + verb2 + " , and " + verb3  + " to the displays and staring in awe. At the end of the showcase, we gave each guest " + pluralnoun1 + " for them to take home. " + favoriteMeme + " got a beautiful " + pluralnoun2 + " and they thanked us. I wonder who will next come through our doors.";

    // Display story by putting title & paragraphs into appropriate divs. (3 points)
document.getElementById('title').innerHTML = title;
document.getElementById('one').innerHTML = paragraph1;
document.getElementById('two').innerHTML = paragraph2;
document.getElementById('three').innerHTML = paragraph3;
document.getElementById('four').innerHTML = paragraph4;
document.getElementById('five').innerHTML = paragraph5;
}
