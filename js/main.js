// let video = document.querySelector(".pop");
// video.addEventListener("click", function (event) {
//   let overlay = document.createElement("div");
//   overlay.className = "pop-over";
//   document.body.appendChild(overlay);

//   let mybutton = document.createElement("button");
//   mybutton.className = "my-button";
//   var context = document.createTextNode("X");
//   mybutton.appendChild(context);
//   overlay.appendChild(mybutton);

//   let show = document.createElement("iframe");
//   show.className = "vid";
//   show.src = "https://www.youtube-nocookie.com/embed/EYw0kBKhkU8?start=4";
//   overlay.appendChild(show);
// });

// document.addEventListener("click", function (event) {
//   if (event.target.className === "my-button") {
//     document.querySelector(".pop-over").remove();
//   }
// });
$(function() {
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

const prags = document.querySelectorAll(".carousel-caption .prag");
let slidbuttons = document.querySelectorAll("button[type=button]");
console.log(slidbuttons);

SpanDo();
SetAndClear();

function SpanDo() {
  let myarrayword = [];
  for (let y = 0; y < prags.length; y++) {
    myarrayword[y] = prags[y].innerHTML.split(" ");
    prags[y].innerHTML = "";
    for (let i = 0; i < myarrayword[y].length; i++) {
      let span = document.createElement("span");
      span.innerHTML = `${myarrayword[y][i]}  `;
      span.classList.add("animate__animated");
    //   span.classList.add("animate__zoomIn");

      prags[y].append(span);
    }
  }
}

function SetAndClear() {
  let spans = document.querySelectorAll(".prag span");
  spans.forEach((e) => {
    e.classList.remove("animate__zoomIn");
    e.classList.add("d-none");
  });

  let x = 0;
  let time = setInterval(() => {
    spans[x].classList.add("animate__zoomIn");
    spans[x].classList.remove("d-none");
    x++;
    if (!spans[x]) {
      clearInterval(time);
      console.log("out");
    }
  }, 300);
}
// function SetAndClear() {
//   let spans = document.querySelectorAll(".prag span");
//   spans.forEach((e) => {
//     e.classList.add("d-none");
//   });

//   let x = 0;
//   let time = setInterval(() => {
//     spans[x].classList.remove("d-none");
//     x++;
//     if (!spans[x]) {
//       clearInterval(time);
//       console.log("out");
//     }
//   }, 300);
// }








// function SetNew() {
//   let spans = [""];
//     for (let i = 0; i < 3; i++) {
//       spans[i] = prags[i].querySelectorAll("span");
//     }
//     spans.forEach((el)=>{
//         el.forEach((e)=>{
//             e.classList.add("d-none");
//         })
//     })
//     return spans
// }

// function time(){

//         SetNew().forEach((el)=>{
            
//             let time =setInterval(()=>{
//             el.forEach((e)=>{
//                 e.classList.remove("d-none");
//                 console.log(e)
//             })
//         },5000)
//         })

// }