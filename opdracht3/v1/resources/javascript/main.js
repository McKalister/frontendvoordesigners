var eyeballs = document.getElementsByClassName("eyeball");
document.onmousemove = function(){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";  
    //even.clientX => get the horizontal coördinates of the mouse
    //even.clientY => get the vertical coördinates of the mouse
    //window.innerWidth => get the browser width
    //window.innerHeight => get the browser height

    for(var i=0;i<2;i++){
        eyeballs[i].style.left = x;
        eyeballs[i].style.top = y;
        eyeballs[i].style.transform = "translate(-"+x+",-"+y+")";
    }
}

