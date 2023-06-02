/* Variable*/

// Create a new speechSynthesis object
var synth = window.speechSynthesis;

var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');

/* Functions */
function speakNow(string) {

    // Create a new speech object, attaching the string of text to speak
    
    var utterThis = new SpeechSynthesisUtterance(string);
    
    // Actually speak the text
    synth.speak(utterThis);
    }
    
    /* Event Listeners*/

    
    // button that speaks the text contained in the above var textToSpeak
    
    speakButton.onclick = function() {
    speakNow(textToSpeak);
    }