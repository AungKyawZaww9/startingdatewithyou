// UI
const years = document.getElementById('years');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let i = 0;


//2021
let currentyear = new Date().getFullYear();
// console.log(currentyear);


//2018
let startingyear = currentyear - 2;
console.log(startingyear);

let startyear = new Date(`December 25 2018 00:00:00`);
// console.log(startyear);

if(startingyear){
    // console.log("I am working");
   
    let getall = currentyear - startingyear;
    // console.log(getall);

    // years.innerText = getall;
    
}


function updatecount(){
    // console.log("I am working");

    const currenttime = new Date();
    // console.log(currenttime);

    let diff =currenttime - startyear;
    // console.log(diff);


    const d = Math.floor(diff / 1000 / 60 / 60 /24);
    // console.log(d);

    const h = Math.floor(diff / 1000 / 60 / 24) % 24;
    // console.log(h);

    const m = Math.floor(diff / 1000 / 60) % 60;
    // console.log(m);

    const s = Math.floor(diff / 1000 ) %60;
    // console.log(s);


    days.textContent = d;
    hours.textContent = h < 10 ? "0"+h : h;
    minutes.textContent = m < 10 ? "0"+m :m;
    seconds.textContent = s < 10 ? "0"+s : s;


}

// if(d === 980){
//     i++;
//     console.log(i);
// }

updatecount();
setInterval(updatecount,1000);


// const gethour = new Date().getHours();
// console.log(gethour);

// const getall = startyear + gethour;
// console.log(getall);