function setup(){
    createCanvas(500,500);
    background(255);
}

function draw(){
    let wordsDiv = select('#words-div');
    var addedWords = select('.added-word', wordsDiv);
    if (addedWords) {
        for (var i = 0; i < addedWords.length; i++) {
            console.log(addedWords);
            var el = addedWords[i];
            el.position(50, 50);
        }
    }
}