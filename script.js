let alert1 = document.querySelector("#para");
let qustion = document.querySelector("#h1");
let input = document.querySelector(".input");
let button = document.querySelector("#btn");
let button2 = document.querySelector("#btn1");

let num1 = Math.ceil(Math.random()*10);
let num2 = Math.ceil(Math.random()*10); 
qustion.innerText = `What is ${num1} multiply by ${num2}?`;
let correctAns = num1 * num2;

button.addEventListener("click",()=> {
    const userAns = +input.value;
    if(userAns===correctAns) {
        alert1.innerText="You Enter Right Answer ✅";
        alert1.style.color="green";
    } else {
        alert1.innerText="You Enter Wrong Answer ❌";
        alert1.style.color="red";
    }
    boom();
    next();
});

function boom() {
    if(input.value==0) {
        alert1.innerText="Please Enter Your Answer ⚠️🔴";
        alert1.style.color="red";
    }
}
button2.addEventListener("click",()=> {
    let num1 = Math.ceil(Math.random()*10);
let num2 = Math.ceil(Math.random()*10); 
qustion.innerText = `What is ${num1} multiply by ${num2}?`;
correctAns = num1 * num2;
alert1.innerText="";
input.value="";
})