let numbers= document.querySelectorAll("div a");
let h2=document.querySelector("h2");
let guessesleft=document.querySelector("#guesses-left");
let popup=document.querySelector(".popup");
let clicks=0;
let random=Math.floor(Math.random()*10+1);

window.onload;

for (let i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click",numberEqual)
}

function numberEqual(e) {
    if(clicks<2 && random != e.target.innerText){
        clicks++;
        guessesleft.innerHTML=3-clicks;
        e.preventDefault();
        if(clicks == 2 && random != e.target.innerText){
            h2.innerHTML="One more try!";   }}
            else if (random == e.target.innerText){
                h2.innerText="...";
                popup.style.display="block";
                popup.innerHTML="You won! One more time?"+popup.innerHTML;
                numbers.innerHTML=popup; 
                e.preventDefault();
            };  
            console.log(e.target.innerText);
            console.log(random);
            console.log(clicks);
        };
          
    popup.addEventListener("click",e=>{
        if (e.target.id=="no"){
            window.close();
        } else if (e.target.id=="yes"){
            document.location.reload(true);
        }
    });

