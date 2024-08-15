const container = document.getElementById("container");
const content = document.createElement("div");



content.classList.add("content");
content.textContent = "This is the glorious text-content";

container.appendChild(content);

const p = document.createElement("p");
//p.classList.add("para");
p.textContent = "Hey I'm Red!";
p.setAttribute("style", "color: red");
container.append(p);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.setAttribute("style", "color: blue");
container.append(h3);


const content2 = document.createElement("div");
//content2.setAttribute("style", "border: 6px solid black", "background: pink;");
content2.style.backgroundColor = "pink";
content2.style.border = "6px solid black";
container.appendChild(content2);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
content2.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
content2.appendChild(p2);

//Method 2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

//Method 3
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {   alert("Hello World")    });

/*Named Functions
  Method 1, 2 & 3*/
function alertFunction()
{
    alert("YAY! YOU DID IT!");
}

//Method 2 & 3
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");


//Method 2
btn3.onclick = alertFunction;

//Method 3
btn4.addEventListener("click", alertFunction);

//btn5.addEventListener("click", function (e) {   console.log(e);     });

//btn5.addEventListener("click", function (e) {   console.log(e.target);     });

btn5.addEventListener("click", function (e) {   e.target.style.background = "blue";     });

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => 
    {   
        button.addEventListener("click", () =>
        {
            alert(button.id);
        })
    });

