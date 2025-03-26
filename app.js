// const body = document.querySelector("body");

// function changeColor(color) {
//     setTimeout(() => {
//         body.style.background = color;
//     }, 1000);
// };

// function changeColor2(color) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(!color){
//                 reject("color not found");
//                 return;
//             }
//             body.style.background = color;
//             resolve("done.!");
//         }, 1000);
//     });
// }

// // changeColor2("black")
// // .then(()=>changeColor2("white"))
// // .then(()=>changeColor2("pinkk"))
// // .catch((err)=>console.error(err));


// function changeColor2(color) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(!color){
//                 reject("color not found");
//                 return;
//             }
//             body.style.background = color;
//             resolve("done.!");
//         }, 1000);
//     });
// }

// async function call() {
//     await changeColor2("red")
//     await changeColor2("green")
//     await changeColor2("orange")
//     await changeColor2("yellow")
// }

const search = document.querySelector(".up-bar #city");
const btn = document.querySelector("#btn");

let city = document.querySelector(".mid p");
let temp = document.querySelector(".mid h1");
let humidity = document.querySelector(".humidity .info h2");
let wind = document.querySelector(".wind-speed .info h2");
let img = document.querySelector("#sign");

let url = "http://api.weatherapi.com/v1/current.json";
let key = "876e73065743424891591059252303";

async function getData(q) {
    let res = await fetch(`${url}?key=${key}&q=${q}`);
    let data = await res.json();
    city.innerText = q;
    let pureD = data.current;
    temp.innerHTML = `<h1>${pureD.temp_c}<sup>o</sup>C</h1>`;
    humidity.innerText = `${pureD.humidity}%`
    wind.innerText = `${pureD.wind_kph}km/hr`

}
btn.addEventListener("click", () => {
    let q = search.value;
    getData(q);
})