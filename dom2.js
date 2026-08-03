// console.log("hello")
// let heading = document.getElementById("header");
// console.log("heading");
// console.dir(window.document.body);
// console.log(document.body);
// console.log(document.head);

// let headings = document.getElementsByClassName("heading");
// console.dir(headings)
// console.log(headings)


// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);


// let elements = document.querySelector("p");
// console.dir(elements)

// let div = document.querySelector("div")
// console.dir(div);
//tag name 
// inner text

let divs = document.querySelectorAll(".box");
// console.log(divs[0]);

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}






// let h2 = document.querySelector("h2")
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " " + "from adil sohel";
