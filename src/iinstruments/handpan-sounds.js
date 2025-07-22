// on click
document.getElementById("D3note").addEventListener("click", function() {
    document.getElementById("D3audio").play();
    activeColor(forD3);
})
document.getElementById("A3note").addEventListener("click", function() {
    document.getElementById("A3audio").play();
    activeColor(forA3);
})
document.getElementById("C4note").addEventListener("click", function() {
    document.getElementById("C4audio").play();
    activeColor(forC4);
})
document.getElementById("D4note").addEventListener("click", function() {
    document.getElementById("D4audio").play();
    activeColor(forD4);
})
document.getElementById("E4note").addEventListener("click", function() {
    document.getElementById("E4audio").play();
    activeColor(forE4);
})
document.getElementById("A4note").addEventListener("click", function() {
    document.getElementById("A4audio").play();
    activeColor(forA4);
})
document.getElementById("C5note").addEventListener("click", function() {
    document.getElementById("C5audio").play();
    activeColor(forC5);
})
// on key press
document.addEventListener("keydown", function(event) {
    switch (event.key.toLowerCase() && event.key.toUpperCase()) {
        case "U" || "u":
            document.getElementById("D3audio").play();
            activeColor(forD3);
            break;
        case "H" || "h":
            document.getElementById("A3audio").play();
            activeColor(forA3);
            break;
        case "I" || "i":
            document.getElementById("C4audio").play();
            activeColor(forC4);
            break;
        case "J" || "j":
            document.getElementById("D4audio").play();
            activeColor(forD4);
            break;
        case "N" || "n":
            document.getElementById("E4audio").play();
            activeColor(forE4);
            break;
        case "K" || "k":
            document.getElementById("A4audio").play();
            activeColor(forA4);
            break;
        case "M" || "m":
            document.getElementById("C5audio").play();
            activeColor(forC5);
            break;
        default:
            break;
    }
});
// buttons color change
const forD3 = document.getElementById("D3note");
function activeColor(forD3) {
    if (forD3) {
        forD3.classList.add("noteActve");
        setTimeout(() => forD3.classList.remove("noteActve"), 200);
    }
}
const forC4 = document.getElementById("C4note");
function activeColor(forC4) {
    if (forC4) {
        forC4.classList.add("noteActve");
        setTimeout(() => forC4.classList.remove("noteActve"), 200);
    }
}
const forA3 = document.getElementById("A3note");
function activeColor(forA3) {
    if (forA3) {
    forA3.classList.add("noteActve");
    setTimeout(() => forA3.classList.remove("noteActve"), 200);
    }
}
const forD4 = document.getElementById("D4note");
function activeColor(forD4) {
    if (forD4) {
    forD4.classList.add("noteActve");
    setTimeout(() => forD4.classList.remove("noteActve"), 200);
    }
}
const forA4 = document.getElementById("A4note");
function activeColor(forA4) {
    if (forA4) {
    forA4.classList.add("noteActve");
    setTimeout(() => forA4.classList.remove("noteActve"), 200);
    }
}
const forE4 = document.getElementById("E4note");
function activeColor(forE4) {
    if (forE4) {
        forE4.classList.add("noteActve");
        setTimeout(() => forE4.classList.remove("noteActve"), 200);
    }
}

const forC5 = document.getElementById("C5note");
function activeColor(forC5) {
    if (forC5) {
        forC5.classList.add("noteActve");
        setTimeout(() => forC5.classList.remove("noteActve"), 200);
    }
}