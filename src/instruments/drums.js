
//CYMBAL
document.getElementById("cymbal_drum_img").addEventListener("click", function() {
    cymbal_drum_audio.currentTime = 0;
    document.getElementById("cymbal_drum_audio").play();
    document.getElementById("cymbal_drum_img").classList.add('noteActve');
    setTimeout(() => {
      document.getElementById("cymbal_drum_img").classList.remove("noteActve");
    }, 80);
}
) 
// drums sound on click

document.addEventListener("keydown", (event) =>{
    if (event.key === "a") {
        cymbal_drum_audio.currentTime = 0;
        cymbal_drum_audio.play();
        document.getElementById("cymbal_drum_img").classList.add('noteActve');
        setTimeout(() => {
            document.getElementById("cymbal_drum_img").classList.remove("noteActve");
        }, 80);
    } 
}
)
// drums sound on key press


//RIDE HAT
document.getElementById("ride_hat_drum_img").addEventListener("click", function() {
    document.getElementById("ride_hat_drum_audio").play();
    document.getElementById("ride_hat_drum_img").classList.add('noteActve');
    setTimeout(() => {
      document.getElementById("ride_hat_drum_img").classList.remove("noteActve");
    }, 80);
}
)
// drums sound on click

document.addEventListener("keydown", (event) =>{
    if (event.key === "l") {
        ride_hat_drum_audio.currentTime = 0;
        ride_hat_drum_audio.play();
        document.getElementById("ride_hat_drum_img").classList.add('noteActve');
        setTimeout(() => {
            document.getElementById("ride_hat_drum_img").classList.remove("noteActve");
        }, 80);
    }
}
)
// drums sound on key press


// HIGH TOM
document.getElementById("high_tom_drum_img").addEventListener("click", function() {
    high_tom_drum_audio.currentTime = 0;
    document.getElementById("high_tom_drum_audio").play();
    document.getElementById("high_tom_drum_img").classList.add('noteActve');
    setTimeout(() => {
      document.getElementById("high_tom_drum_img").classList.remove("noteActve");
    }, 80);
}
) 
// drums sound on click

document.addEventListener("keydown", (event) =>{
    if (event.key === "f") {
        high_tom_drum_audio.currentTime = 0;
        high_tom_drum_audio.play();
        document.getElementById("high_tom_drum_img").classList.add('noteActve');
        setTimeout(() => {
            document.getElementById("high_tom_drum_img").classList.remove("noteActve");
        }, 80);
    } 
}
)
// drums sound on key press


// MID TOM
document.getElementById("mid_tom_drum_img").addEventListener("click", function() {
    mid_tom_drum_audio.currentTime = 0;
    document.getElementById("mid_tom_drum_audio").play();
    document.getElementById("mid_tom_drum_img").classList.add('noteActve');
    setTimeout(() => {
      document.getElementById("mid_tom_drum_img").classList.remove("noteActve");
    }, 80);
}
) 
// drums sound on click

document.addEventListener("keydown", (event) =>{
    if (event.key === "h") {
        mid_tom_drum_audio.currentTime = 0;
        mid_tom_drum_audio.play();
        document.getElementById("mid_tom_drum_img").classList.add('noteActve');
        setTimeout(() => {
            document.getElementById("mid_tom_drum_img").classList.remove("noteActve");
        }, 80);
    } 
}
)
// drums sound on key press


// HIHAT
document.getElementById("hihat_drum_img").addEventListener("click", function() {
    hihat_drum_audio.currentTime = 0;
    document.getElementById("hihat_drum_audio").play();
    document.getElementById("hihat_drum_img").classList.add('noteActve');
    setTimeout(() => {
      document.getElementById("hihat_drum_img").classList.remove("noteActve");
    }, 80);
}
) 
// drums sound on click

document.addEventListener("keydown", (event) =>{
    if (event.key === "z") {
        hihat_drum_audio.currentTime = 0;
        hihat_drum_audio.play();
        document.getElementById("hihat_drum_img").classList.add('noteActve');
        setTimeout(() => {
            document.getElementById("hihat_drum_img").classList.remove("noteActve");
        }, 80);
    } 
}
)
// drums sound on key press


// SNARE
document.getElementById("snare_drum_img").addEventListener("click", function() {
    snare_drum_audio.currentTime = 0;
    document.getElementById("snare_drum_audio").play();
    document.getElementById("snare_drum_img").classList.add('noteActve');
    setTimeout(() => {
      document.getElementById("snare_drum_img").classList.remove("noteActve");
    }, 80);
}
) 
// drums sound on click

document.addEventListener("keydown", (event) =>{
    if (event.key === "s") {
        snare_drum_audio.currentTime = 0;
        snare_drum_audio.play();
        document.getElementById("snare_drum_img").classList.add('noteActve');
        setTimeout(() => {
            document.getElementById("snare_drum_img").classList.remove("noteActve");
        }, 80);
    } 
}
)
// drums sound on key press


//FLOOR TOM
document.getElementById("floor_tom_drum_img").addEventListener("click", function() {
    floor_tom_drum_audio.currentTime = 0;
    document.getElementById("floor_tom_drum_audio").play();
    document.getElementById("floor_tom_drum_img").classList.add('noteActve');
    setTimeout(() => {
      document.getElementById("floor_tom_drum_img").classList.remove("noteActve");
    }, 80);
}
) 
// drums sound on click

document.addEventListener("keydown", (event) =>{
    if (event.key === "k") {
        floor_tom_drum_audio.currentTime = 0;
        floor_tom_drum_audio.play();
        document.getElementById("floor_tom_drum_img").classList.add('noteActve');
        setTimeout(() => {
            document.getElementById("floor_tom_drum_img").classList.remove("noteActve");
        }, 80);
    } 
}
)
// drums sound on key press


// KICK
document.getElementById("kick_drum_img").addEventListener("click", function() {
    kick_drum_audio.currentTime = 0;
    document.getElementById("kick_drum_audio").play();
    document.getElementById("kick_drum_img").classList.add('noteActve');
    setTimeout(() => {
      document.getElementById("kick_drum_img").classList.remove("noteActve");
    }, 80);
}
) 
// drums sound on click

document.addEventListener("keydown", (event) =>{
    if (event.key === "c") {
        kick_drum_audio.currentTime = 0;
        kick_drum_audio.play();
        document.getElementById("kick_drum_img").classList.add('noteActve');
        setTimeout(() => {
            document.getElementById("kick_drum_img").classList.remove("noteActve");
        }, 80);
    } 
    if (event.key === "n") {
        kick_drum_audio.currentTime = 0;
        kick_drum_audio.play();
        document.getElementById("kick_drum_img").classList.add('noteActve');
        setTimeout(() => {
            document.getElementById("kick_drum_img").classList.remove("noteActve");
        }, 80);
    } 
}
)
// drums sound on key press


// CLAP
document.getElementById("clap_drum_img").addEventListener("click", function() {
    clap_drum_audio.currentTime = 0;
    document.getElementById("clap_drum_audio").play();
    document.getElementById("clap_drum_img").classList.add('noteActve');
    setTimeout(() => {
      document.getElementById("clap_drum_img").classList.remove("noteActve");
    }, 80);
}
) 
// drums sound on click

document.addEventListener("keydown", (event) =>{
    if (event.key === "m") {
        clap_drum_audio.currentTime = 0;
        clap_drum_audio.play();
        document.getElementById("clap_drum_img").classList.add('noteActve');
        setTimeout(() => {
            document.getElementById("clap_drum_img").classList.remove("noteActve");
        }, 80);
    } 
}
)
// drums sound on key press