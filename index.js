const box = document.createElement("div");
document.body.appendChild(box);
box.style.height = "100vh";
box.style.width = "100%";
box.style.display = "flex";
box.style.flexDirection = "column";
box.style.justifyContent = "center";
box.style.alignItems = "center";

const h1 = document.createElement("h1");
box.appendChild(h1);
h1.appendChild(document.createTextNode("Color Changer"));

const parent = document.createElement("div");
parent.classList.add("p");
parent.style.display = "flex";
parent.style.justifyContent = "center";
box.appendChild(parent);

const div1 = document.createElement("div");

div1.classList.add("green");
div1.style.backgroundColor = "green";
div1.style.width = "20vh";
div1.style.height = "20vh";
parent.appendChild(div1);

const div2 = document.createElement("div");
div2.classList.add("green");
div2.style.backgroundColor = "brown";
div2.style.width = "20vh";
div2.style.height = "20vh";
parent.appendChild(div2);

const div3 = document.createElement("div");

div3.classList.add("green");
div3.style.backgroundColor = "red";
div3.style.width = "20vh";
div3.style.height = "20vh";
parent.appendChild(div3);

const div4 = document.createElement("div");
div4.classList.add("green");
div4.style.backgroundColor = "yellow";
div4.style.width = "20vh";
div4.style.height = "20vh";
parent.appendChild(div4);

const p = document.createElement("p");
box.appendChild(p);
p.appendChild(
  document.createTextNode(
    "Try clicking on one of the colors above to change the background color of this page! "
  )
);
p.style.fontSize = "20px";
p.style.fontWeight = "bold";

const green = document.querySelectorAll(".green");
green.forEach((element) => {
  element.style.margin = "10px";
  element.style.cursor = "pointer";
  element.style.border = "4px solid black";
});

document.querySelector(".green:nth-child(1)").addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});

document.querySelector(".green:nth-child(2)").addEventListener("click", () => {
  document.body.style.backgroundColor = "brown";
});

document.querySelector(".green:nth-child(3)").addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});

document.querySelector(".green:nth-child(4)").addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
});
