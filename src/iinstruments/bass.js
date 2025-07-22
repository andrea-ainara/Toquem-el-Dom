
  

  const button = document.getElementById("button1");
  const audio1 = document.getElementById("Audio1");
function soundbass1(){
  button.addEventListener("click", function() {
        audio1.play(); 
    });
    
}

  

//on key press
document.addEventListener("keydown", function(event) {
    switch (event.key.toUpperCase()) {
        case "4":
            document.getElementById("audio1").play();
            activeColor(forD3);
            break;




        
    }
})
