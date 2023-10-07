// add remove button

var stranger =document.querySelector("h5");
var add = document.querySelector("#add");
var check=0;


add.addEventListener ("click",function(){
    if(check==0){
        stranger.innerHTML="Friend"
        stranger.style.color = "green"
        add.innerHTML = "remove Friend"
        check=1
    
    }
    else{
        stranger.innerHTML = "stranger"
        stranger.style.color = "red"
        add.innerHTML = "Add Friend"
        check = 0
    }
    
})
