
const button1 = document.getElementById("button1");
const audio1 = document.getElementById("Audio1");
function soundbass1() {
    button1.addEventListener("click", function () {
        audio1.play();
          audio1.currentTime = 0;
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "5") {
            audio1.play();
              audio1.currentTime = 0;
            button1.classList.remove('btnbass')
            button1.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "5") {
            button1.classList.add('btnbass')
            button1.classList.remove('noteActive')
        }
    });
}
soundbass1()






const button2 = document.getElementById("button2");
const audio2 = document.getElementById("audio2");
function soundbass2() {
    button2.addEventListener("click", function () {
        audio2.play();
          audio2.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "6") {
            audio2.play();
              audio2.currentTime = 0;
            button2.classList.remove('btnbass')
            button2.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "6") {
            button2.classList.add('btnbass')
            button2.classList.remove('noteActive')
        }
    });
}
soundbass2()





const button3 = document.getElementById("button3");
const audio3 = document.getElementById("audio3");
function soundbass3() {
    button3.addEventListener("click", function () {
        audio3.play();
          audio3.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "7") {
           audio3.play();
             audio3.currentTime = 0;
            button3.classList.remove('btnbass')
            button3.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "7") {
            button3.classList.add('btnbass')
            button3.classList.remove('noteActive')
        }
    });
}
soundbass3()




const button4 = document.getElementById("button4");
const audio4 = document.getElementById("audio4");
function soundbass4() {
    button4.addEventListener("click", function () {
        audio4.play();
          audio4.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "8") {
            audio4.play();
              audio4.currentTime = 0;
            button4.classList.remove('btnbass')
            button4.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "8") {
            button4.classList.add('btnbass')
            button4.classList.remove('noteActive')
        }
    });
}
soundbass4()




const button5 = document.getElementById("button5");
const audio5 = document.getElementById("audio5");
function soundbass5() {
    button5.addEventListener("click", function () {
        audio5.play();
          audio5.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "r") {
             audio5.play();
               audio5.currentTime = 0;
            button5.classList.remove('btnbass')
            button5.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "r") {
            button5.classList.add('btnbass')
            button5.classList.remove('noteActive')
        }
    });
}
soundbass5()




const button6 = document.getElementById("button6");
const audio6 = document.getElementById("audio6");
function soundbass6() {
    button6.addEventListener("click", function () {
        audio6.play();
          audio6.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "t") {
           audio6.play();
             audio6.currentTime = 0;
            button6.classList.remove('btnbass')
            button6.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "t") {
            button6.classList.add('btnbass')
            button6.classList.remove('noteActive')
        }
    });
}
soundbass6()




const button7 = document.getElementById("button7");
const audio7 = document.getElementById("audio7");
function soundbass7() {
    button7.addEventListener("click", function () {
        audio7.play();
          audio7.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "y") {
         audio7.play();
           audio7.currentTime = 0;
            button7.classList.remove('btnbass')
            button7.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "y") {
            button7.classList.add('btnbass')
            button7.classList.remove('noteActive')
        }
    });
}
soundbass7()




const button8 = document.getElementById("button8");
const audio8 = document.getElementById("audio8");
function soundbass8() {
    button8.addEventListener("click", function () {
        audio8.play();
          audio8.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "u") {
         audio8.play();
           audio8.currentTime = 0;
            button8.classList.remove('btnbass')
            button8.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "u") {
            button8.classList.add('btnbass')
            button8.classList.remove('noteActive')
        }
    });
}
soundbass8()



const button9 = document.getElementById("button9");
const audio9 = document.getElementById("audio9");
function soundbass9() {
    button9.addEventListener("click", function () {
        audio9.play();
          audio9.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "d") {
          audio9.play();
            audio9.currentTime = 0;
            button9.classList.remove('btnbass')
            button9.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "d") {
            button9.classList.add('btnbass')
            button9.classList.remove('noteActive')
        }
    });
}
soundbass9()




const button10 = document.getElementById("button10");
const audio10 = document.getElementById("audio10");
function soundbass10() {
    button10.addEventListener("click", function () {
        audio10.play();
          audio10.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "f") {
         audio10.play();
           audio10.currentTime = 0;
            button10.classList.remove('btnbass')
            button10.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "f") {
            button10.classList.add('btnbass')
            button10.classList.remove('noteActive')
        }
    });
}
soundbass10()




const button11 = document.getElementById("button11");
const audio11 = document.getElementById("audio11");
function soundbass11() {
    button11.addEventListener("click", function () {
        audio11.play();
          audio11.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "g") {
      audio11.play();
        audio11.currentTime = 0;
            button11.classList.remove('btnbass')
            button11.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "g") {
            button11.classList.add('btnbass')
            button11.classList.remove('noteActive')
        }
    });
}
soundbass11()




const button12 = document.getElementById("button12");
const audio12 = document.getElementById("audio12");
function soundbass12() {
    button12.addEventListener("click", function () {
        audio12.play();
          audio12.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "h") {
          audio12.play();
            audio12.currentTime = 0;
            button12.classList.remove('btnbass')
            button12.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "h") {
            button12.classList.add('btnbass')
            button12.classList.remove('noteActive')
        }
    });
}
soundbass12()




const button13 = document.getElementById("button13");
const audio13 = document.getElementById("audio13");
function soundbass13() {
    button13.addEventListener("click", function () {
        audio13.play();
          audio13.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "x") {
        audio13.play();
          audio13.currentTime = 0;
            button13.classList.remove('btnbass')
            button13.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "x") {
            button13.classList.add('btnbass')
            button13.classList.remove('noteActive')
        }
    });
}
soundbass13()




const button14 = document.getElementById("button14");
const audio14 = document.getElementById("audio14");
function soundbass14() {
    button14.addEventListener("click", function () {
        audio14.play();
          audio14.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "c") {
         audio14.play();
           audio14.currentTime = 0;
            button14.classList.remove('btnbass')
            button14.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "c") {
            button14.classList.add('btnbass')
            button14.classList.remove('noteActive')
        }
    });
}
soundbass14()



const button15 = document.getElementById("button15");
const audio = document.getElementById("audio15");
function soundbass15() {
    button15.addEventListener("click", function () {
        audio15.play();
          audio15.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "v") {
          audio15.play();
            audio15.currentTime = 0;
            button15.classList.remove('btnbass')
            button15.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "v") {
            button15.classList.add('btnbass')
            button15.classList.remove('noteActive')
        }
    });
}
soundbass15()



const button16 = document.getElementById("button16");
const audio16 = document.getElementById("audio16");
function soundbass16() {
    button16.addEventListener("click", function () {
        audio16.play();
          audio16.currentTime = 0;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "b") {
          audio16.play();
            audio16.currentTime = 0;
            button16.classList.remove('btnbass')
            button16.classList.add('noteActive')
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === "b") {
            button16.classList.add('btnbass')
            button16.classList.remove('noteActive')
        }
    });
}
soundbass16()


// on key press 



