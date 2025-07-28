const Audio1 = document.getElementById('Audio1')
const firstButton = document.getElementById('First-button')
function note1() {

    firstButton.addEventListener('click', () => {
        Audio1.play()
    })
    document.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
            Audio1.play()
            firstButton.classList.add('btnActive');
            setTimeout(() => {
                firstButton.classList.remove("btnActive");
            }, 300);

        }
    })
    

}
note1()
const Audio2 = document.getElementById('Audio2')
const secondButton = document.getElementById('Second-button')
function note2() {
    secondButton.addEventListener('click', () => {
        Audio2.play()
    })
    document.addEventListener('keydown', (event) => {
        if (event.key === 't') {
            Audio2.play()
            secondButton.classList.add('btnActive');
            setTimeout(()=> {
                secondButton.classList.remove("btnActive");
            },300);
        }
    })
    
}
note2()
const Audio3 = document.getElementById('Audio3')
const thirdButton = document.getElementById('Third-button')
function note3() {
    thirdButton.addEventListener('click', () => {
        Audio3.play()

    })
    document.addEventListener('keydown', (event) => {
        if (event.key === 'y'){
            Audio3.play()
            thirdButton.classList.add('btnActive');
            setTimeout(()=> {
                thirdButton.classList.remove("btnActive");
            },300);
        }
    
    })
  
}
note3()
const Audio4 = document.getElementById('Audio4')
const fourthButton = document.getElementById('Fourth-button')
function note4() {
    fourthButton.addEventListener('click', () => {
        Audio4.play()
    })
    document.addEventListener('keydown', (event) => {
        if (event.key === 'u'){
            Audio4.play()
            fourthButton.classList.add('btnActive');
            setTimeout(()=> {
                fourthButton.classList.remove("btnActive")
            },300);
        }
    })
}
note4()
const Audio5 = document.getElementById('Audio5')
const fifthButton = document.getElementById('Fifth-button')
function note5() {
    fifthButton.addEventListener('click', () => {
        Audio5.play()
    })
    document.addEventListener('keydown', (event) => {
        if (event.key === 'i'){
            Audio5.play()
            fifthButton.classList.add('btnActive');
            setTimeout(()=> {
                fifthButton.classList.remove("btnActive")
            },300);
        }
    })
    
}
note5()
const Audio6 = document.getElementById('Audio6')
const sixthButton = document.getElementById('Sixth-button')
function note6() {
    sixthButton.addEventListener('click', () => {
        Audio6.play()
    })
    document.addEventListener('keydown', (event) => {
        if (event.key === 'o'){
            Audio6.play()
            sixthButton.classList.add('btnActive');
            setTimeout(()=> {
                sixthButton.classList.remove("btnActive");
            },300);
        }
    })
   
}
note6()