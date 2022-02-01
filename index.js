
 for (let index = 0; index <= 6; index++) {
     
    document.querySelectorAll("button")[index].addEventListener("click", PlayASound);


    let keyPressed = this.innerText;
    PlayASound(keyPressed);
    
    

 };
    


      document.addEventListener("keypress", function (evt) {
          PlayASound(evt.key);
          animationWhenPress(evt.key);
      });
    
          
    
    function PlayASound(key)
    {

       
 

         switch (key) {
             case "w":

                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                 

                 break;
                 case "a":
                    var audio = new Audio('sounds/kick-bass.mp3');
                    audio.play();
                 break;
                 case "s":
                    var audio = new Audio('sounds/snare.mp3');
                    audio.play();

                case "d":
                    var audio = new Audio('sounds/tom-1.mp3');
                    audio.play();
                 break;
                 case "j":
                    var audio = new Audio('sounds/tom-2.mp3');
                    audio.play();
                 break;
                case "k":
                    var audio = new Audio('sounds/tom-3.mp3');
                    audio.play();
            
                break;
             default:
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                   
                 break;
         }
         
           
       
    }

    function animationWhenPress(currentKey) {
        var buttonPressed = document.querySelector("." + currentKey);
         buttonPressed.classList.add("pressed");
        const delayInMilliseconds = 200; //1 second

 
 


    setTimeout(function(){
       
        buttonPressed.classList.remove("pressed");
      }, delayInMilliseconds);
     
     

 

    }

 
