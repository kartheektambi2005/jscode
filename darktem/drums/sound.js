const sounds = {
    A: {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        name: "Kick"
    },
    S: {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        name: "Snare"
    },
    D: {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        name: "Hi-Hat"
    },
    F: {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        name: "Tom 1"
    },
    G: {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        name: "Tom 2"
    },
    H: {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        name: "Crash"
    },
    J: {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        name: "Ride"
    },
    K: {
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        name: "Clap"
    },
    L: {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        name: "Bass"
    }
};

const display = document.getElementById("display");
const volumeSlider = document.getElementById("volume");

function playSound(key){
    if(!sounds[key]) return;

    const audio = new Audio(sounds[key].url);
    audio.volume = volumeSlider.value;
    audio.play();

    display.textContent = sounds[key].name;

    const btn = document.querySelector(`[data-key="${key}"]`);

    if(btn){
        btn.classList.add("active");
        setTimeout(()=>{
            btn.classList.remove("active");
        },150);
    }
}

document.querySelectorAll(".drum").forEach(btn=>{
    btn.addEventListener("click",()=>{
        playSound(btn.dataset.key);
    });
});

document.addEventListener("keydown",(e)=>{
    playSound(e.key.toUpperCase());
});

document.getElementById("demoBtn").addEventListener("click",()=>{

    const beat = ["A","S","D","A","F","G","H","J","K","L"];

    beat.forEach((key,index)=>{
        setTimeout(()=>{
            playSound(key);
        },index*300);
    });

});