// // console.log("hello")
// // let heading = document.getElementById("header");
// // console.log("heading");
// // console.dir(window.document.body);
// // console.log(document.body);
// // console.log(document.head);

// // let headings = document.getElementsByClassName("heading");
// // console.dir(headings)
// // console.log(headings)


// // let parahs = document.getElementsByTagName("p");
// // console.dir(parahs);


// // let elements = document.querySelector("p");
// // console.dir(elements)

// // let div = document.querySelector("div")
// // console.dir(div);
// //tag name 
// // inner text

// let divs = document.querySelectorAll(".box");
// // console.log(divs[0]);

// let idx = 1;
// for(div of divs){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }






// // let h2 = document.querySelector("h2")
// // console.dir(h2.innerText);
// // h2.innerText = h2.innerText + " " + "from adil sohel";


// let div = document.querySelector("div")
// console.log(div);
// div.style.backgroundColor = "green"
// div.style.fontSize = "20px"

// let id = div.getAttribute("id");
// console.log(id);

// let newBtn = document.createElement("button")
// newBtn.innerText = "click me";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn)



// let newheading = document.createElement("h1");
// newheading.innerHtml = "<i>hi,my name is Adil Sohel</i>";
// document.querySelector("body").prepand(newheading);

let newBtn = document.createElement("button");
newBtn.innerHTML = "click me";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
 document.querySelector("body").prepend(newBtn);


 let para = document.querySelector("p")
 