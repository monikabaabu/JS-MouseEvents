const myBox = document.getElementById("mybox");
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = " rgb(250, 116, 228)";
    event.target.textContent = "Mwaah Mwaaah <3"
});

myBox.addEventListener("mouseover", event=>{
    event.target.style.backgroundColor = " rgb(255, 0, 153)";
    event.target.textContent = "No Dont! 😳 "
    
});

myBox.addEventListener("mouseout", event=>{
    event.target.style.backgroundColor = " rgb(255, 196, 245)";
    event.target.textContent = "Click Me 😋";
});