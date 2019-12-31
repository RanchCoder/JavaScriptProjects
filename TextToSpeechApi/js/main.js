//Init speech synth API
const synth = window.speechSynthesis;

//DOM elements
const body = document.querySelector('body');
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');

//Init voices array
let voices = [];
const populateVoiceList = () => {

    voices = synth.getVoices();

    //loop through voices and create option for each one
    voices.forEach(voice => {
        console.log(voice);
        //crate an option element
        const option = document.createElement('option');
        //fill the option with voice
        option.textContent = voice.name + '(' + voice.lang + ')';
        //set needed option attribute
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    })

}

populateVoiceList();

if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
}

//speak
const speak = () => {


    //check if speaking
    if (synth.speaking) {
        console.log('already speaking...');
        return;
    }
    if (textInput.value !== '') {

        // add background animation
        body.style.background = '#141414 url(../image/wave.gif)';
        body.style.backgroundRepeat = 'repeat-x';
        body.style.backgroundSize = '100% 100%';
        //get speak text
        const speakText = new SpeechSynthesisUtterance(textInput.value);
        //speak end
        speakText.onend = e => {
            console.log('Done speaking...');
            body.style.background = '#141414';
        }

        //speak error
        speakText.onerror = e => {
            console.error('something went wrong');
        }

        //selected voice
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

        //loop through voices
        voices.forEach(voice => {
            if (voice.name === selectedVoice.name) {
                speakText.voice = voice;
            }
        });

        //set pitch and rate
        speakText.rate = rate.value;

        speakText.pitch = pitch.value;
        //speak
        synth.speak(speakText);
    }
};

//Event listeners 
//form submission
textForm.addEventListener('submit', e => {
    e.preventDefault();
    speak();
    textInput.blur();
});

//rate value change
rate.addEventListener('change', e => rateValue.textContent = rate.value);

//rate value change
pitch.addEventListener('change', e => pitchValue.textContent = pitch.value);


//voice select
voiceSelect.addEventListener('change', e => speak());