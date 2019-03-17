function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // console.log(audio);
    if(!audio) return; // stop the function from running completely
    audio.currentTime = 0; // rewind audio to the start
    audio.play();
    // console. log(key);
    key.classList.add('playing');
}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    // console.log(e.propertyName);  
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// const keys = document.querySelectorAll('.key');
// [].forEach.call(keys, (e) => {
//     console.log(e);
// });


window.addEventListener('keydown', playsound);
