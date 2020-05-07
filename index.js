
var x=document.querySelectorAll("button");

for(var i=0;i<x.length;i++)
{
  x[i].addEventListener("click",function (){
    var innerhtml = this.innerHTML;
    draw(innerhtml);
    anim(innerhtml);



});

document.addEventListener("keydown",function(event){

  draw(event.key);
  anim(event.key);
})
}

function draw(y)
{
  switch (y) {
    case "w":

      var audio=new Audio("sounds/crash.mp3");
        audio.play();
      break;

    case "a":

      var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
      break;
      case "s":

        var audio=new Audio("sounds/snare.mp3");
          audio.play();
        break;
        case "d":

          var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
          break;
          case "j":

            var audio=new Audio("sounds/tom-2.mp3");
              audio.play();
            break;
            case "k":

              var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
              break;
              case "l":

                var audio=new Audio("sounds/tom-4.mp3");
                  audio.play();
                break;

}
}
function anim(y)
{
  var x=document.querySelector("."+y);
  x.classList.add("pressed");


  setTimeout(function () {
    x.classList.remove("pressed");
  }, 100);
}
