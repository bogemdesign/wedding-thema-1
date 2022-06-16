// tombol musik

let mute = document.querySelector(".music ")
mute.addEventListener("click", function () {

    let c = mute.children[1]
    let d = mute.children[0]
    if (c.paused) {
        c.play();
        d.classList.remove("fa-pause")
        d.classList.add("fa-music")


    } else {
        c.pause();
        d.classList.remove("fa-music")
        d.classList.add("fa-pause")
      
    }
});
//tombol buka
let buka = document.querySelector('.buka')
let isi = document.querySelector('.gem-isi')
buka.addEventListener('click', function(){
  isi.style.display = "block"
  let c = buka.parentElement
c.style.display = "none"
//  console.log(c)
let b = mute.children[1]
b.play();
})

// waktu mundur plugin
let waktuMundur= document.querySelector(".waktu-mundur ul")

// edit di date awal bulan, harus 3 huruf bhasa inggris
var deadline = new Date("jul  10, 2022 08:59:59").getTime(); 
var x = setInterval(function() { 
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
// document.getElementById("countdown").innerHTML = days + " Hari "+ hours + " Jam " + minutes + "  " + seconds + "   "; 
waktuMundur.children[0].textContent = days
waktuMundur.children[1].textContent = hours
waktuMundur.children[2].textContent = minutes
waktuMundur.children[3].textContent = seconds
if (t < 0) { 
clearInterval(x); 
waktuMundur.children[0].textContent = 0
waktuMundur.children[1].textContent = 0
waktuMundur.children[2].textContent = 0
waktuMundur.children[3].textContent = 0
} 
}, 1000);
// mengambil data dari url lalu tulis ke html tujuan
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// console.log(urlParams)
//ambil key dari parameter di awali dengan tanda ?
const kepadaTamu = urlParams.get('to')
// console.log(kepadaTamu)

let tamuUndangan= document.querySelector('.tamu')
if(kepadaTamu){
  tamuUndangan.textContent=kepadaTamu;
  // console.log("work")
}


// swiper js
var swiper = new Swiper(".mySwiper", {
  // effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
    slidesPerView:3,
    spaceBetween: 10,
    freeMode: true,
    // coverflowEffect: {
    //   rotate: 20,
    //   stretch: 0,
    //   depth: 200,
    //   modifier: 1,
    //   slideShadows: true,
    // },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // wa form
  let sumbit = document.querySelector(".form button")
  sumbit.addEventListener("click",function(){
    let text = sumbit.previousElementSibling.value
    let hadir = sumbit.previousElementSibling.previousElementSibling.value
    let nama = sumbit.previousElementSibling.previousElementSibling.previousElementSibling.value
    if(nama ==""){
      alert('nama harus di isi')
    }else{
      window.open(`https://wa.me/6282118391206/?text=*Konfirmasi%20Kehadiran*%0A${nama}%0A*${hadir}*%0A${text}`)
      location.reload()
    }

  });