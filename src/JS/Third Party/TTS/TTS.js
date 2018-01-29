// Fetch the list of voices and populate the voice options.
function loadVoices() {

  // Fetch the available voices.
	var voices = speechSynthesis.getVoices();
}

// Execute loadVoices.
loadVoices();

// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function(e) {
  loadVoices();
};


// Create a new utterance for the specified text and add it to
// the queue.
function speak(text, assistant_name) {
  // Create a new instance of SpeechSynthesisUtterance.

	var msg = new SpeechSynthesisUtterance();
  
  // Set the text.
	msg.text = text;
  
  // Set the attributes.
	msg.volume = 1;
	msg.rate = 1;
	msg.pitch = 1;


 
if (assistant_name == 'Lucy') {
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Google UK English Female'; })[0];

} else if (assistant_name == 'Brolu') {

		msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Google UK English Male'; })[0];

} else {

}

  
  // Queue this utterance.
	window.speechSynthesis.speak(msg);
}
