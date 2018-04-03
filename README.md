# watsonSpeechToText
1) run npm install
textToSpeech.js:
2) Change username and password to your watson speech to text:
var speechToText = new SpeechToTextV1({
	username: 'username',
	password: 'password',
	url: 'https://stream.watsonplatform.net/speech-to-text/api/'
});
3) change path to a wav file on your computer:
var file = '/Users/franklinparker/documents/GBSLendingSolutions/SpeechToText/mortgage.wav';
