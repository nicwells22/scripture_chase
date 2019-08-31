var scripture = null;
var book = null;
var chapter = null;
var verse = null;
var text = null;


function getRandomVerse(){
    var verse_el = document.getElementById('scripture_text');
    verse_el.innerHTML = ""

    var request = new XMLHttpRequest()
    request.open('GET','http://localhost:5000/', true)

    request.onload = function(){
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            scripture = data[0].Scripture;
            book = data[0].Book;
            chapter = data[0].Chapter;
            verse = data[0].Verse;
            text = data[0].Text;

            // build scripture reference and place 
            var reference = book + ' ' + chapter + ':' + verse;
            var ref_el = document.getElementById('reference');
            ref_el.innerHTML = reference

        } else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = `Gah, it's not working!`
            app.appendChild(errorMessage)
        }
     
    }

    request.send()
}

function displayVerseText(){
    var verse_el = document.getElementById('scripture_text');
    verse_el.innerHTML = text
}

function resetChase(){
    var verse_el = document.getElementById('scripture_text');
    verse_el.innerHTML = ""
    var ref_el = document.getElementById('reference');
    ref_el.innerHTML = ""
}