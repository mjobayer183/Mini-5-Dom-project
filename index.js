// add remove button

/*var stranger =document.querySelector("h5");
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
*/

//to do app

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
}
listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }

}, false);
