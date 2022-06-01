function setup(){
    createCanvas(windowWidth,windowHeight);
    background(255);
}

function draw(){
    let wordsDiv = select('#words-div');
    var addedWords = selectAll('.added-word', wordsDiv);

    if (addedWords) {
        for (var i = 0; i < addedWords.length; i++) {
            var el = addedWords[i];

            if (!el.hasClass('already-touched')) {
                el.position(random(width), random(100, height));
                el.addClass('already-touched');
            }
        }
    }
}




