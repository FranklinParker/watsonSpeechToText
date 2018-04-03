var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');
var file = '/Users/franklinparker/documents/GBSLendingSolutions/SpeechToText/mortgage.wav';

var speechToText = new SpeechToTextV1({
	username: 'username',
	password: 'password',
	url: 'https://stream.watsonplatform.net/speech-to-text/api/'
});
var params = {
	// From file
	audio: fs.createReadStream(file),
	content_type: 'audio/l16; rate=44100'
};

speechToText.recognize(params, function(err, res) {
	if (err)
		console.log(err);
	else
		console.log(JSON.stringify(res, null, 2));
});

// or streaming
fs.createReadStream(file)
	.pipe(speechToText.createRecognizeStream({ content_type: 'audio/l16; rate=44100' }))
	.pipe(fs.createWriteStream('./transcription.txt'));