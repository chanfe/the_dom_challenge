//ids
let counter_id = document.getElementById("counter");
let pause_id = document.getElementById("pause");
let minus_id = document.getElementById("-");
let plus_id = document.getElementById("+");
let heart_id = document.getElementById("<3");
let list_id = document.getElementById("list");
let comment_id = document.getElementsByTagName("form")[0];

//other variables
let counter = 0;
let paused = false;

//As a user, i should see the timer increment every second once the page has loaded
let timer = setInterval(function() {
    if(!paused){
        counter += 1;
        counter_id.innerHTML = counter;
    }
},1000)
  
//As a user, i can manually increment and decrement the counter as i like
plus_id.addEventListener("click", function(){
    counter += 1;
    counter_id.innerHTML = parseInt(counter_id.innerHTML) + 1;
})

minus_id.addEventListener("click", function(){
    counter -= 1;
    counter_id.innerHTML = parseInt(counter_id.innerHTML) - 1;
})

//As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
heart_id.addEventListener("click", function(){
    let like = document.querySelector(".likes");

    if(document.getElementById(`li${counter}`) == null){
        let li = document.createElement("li");
        li.setAttribute("id", `li${counter}`);
        li.innerHTML = `${counter} have this many likes:1`;
        like.appendChild(li);
      }
    else {
        let li = document.getElementById(`li${counter}`);
        let splitted = parseInt(li.innerHTML.split(":")[1]) + 1;
        li.innerHTML = `${counter} have this many likes:${splitted}`;
        like.appendChild(li);
    }
})

//As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
pause_id.addEventListener("click", function(){
    if (paused){
        pause_id.innerHTML = "pause";
        paused = false;
    }
    else{
        pause_id.innerHTML = "resume";
        paused = true;
    }
})
// As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"
comment_id.addEventListener("click", function(event){
    event.preventDefault(); //prevent the comments from dissappearing
    let comments = document.querySelector(".comments");
    let p = document.createElement("p");
    let textbox = document.querySelector("#comment_text")

    p.innerHTML = textbox.value;
    textbox.value = "";
    comments.appendChild(p);
})
