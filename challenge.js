//ids
let counter_id = document.getElementById("counter")
let pause_id = document.getElementById("pause")
let minus_id = document.getElementById("-")
let plus_id = document.getElementById("+")
let heart_id = document.getElementById("<3")
let list_id = document.getElementById("list")
let comment_id = document.getElementsByTagName("form")[0]

//other variables
let counter = 0

//As a user, i should see the timer increment every second once the page has loaded
let timer = setInterval(function() {
    counter_id.innerHTML = counter;
    counter += 1;
},1000)
  
//As a user, i can manually increment and decrement the counter as i like

//As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number

//As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'

// As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"