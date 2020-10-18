function smoothscroll(hash) {
  $("html, body").animate({
      scrollTop: $(hash).offset().top,
    },
    800,
    function () {
      window.location.hash = hash;
    }
  );
}

function closeProfile() {
  let pop = document.getElementById("company-profile");
  pop.style.animation = "pop-down 0.6s ease-in-out forwards";
}
var pages = [{
    img: "https://res.cloudinary.com/sapiangroup/image/upload/w_auto,q_auto,f_auto/v1601650581/OZEETY_IMAGES/assets/img/FlashWallet_flashgroup-cryptostations.png",
    heading: "Flashwallet",
    text: "All-in-one crypto and fiat wallet"
  },
  {
    img: "https://res.cloudinary.com/sapiangroup/image/upload/v1601660967/OZEETY_IMAGES/assets/img/FlashXchanger_flashgroup-cryptostations.png",
    heading: "FlashXchanger",
    text: "Omnichannel exchange for trading derivatives and digital currency",
  },
  {
    img: "/assets/img/ai.svg",
    heading: "AI/ML based trading BOTs",
    text: "AI/ML based trading BOTs for arbitrage and trading",
  },
  {
    img: "https://res.cloudinary.com/sapiangroup/image/upload/f_auto,q_auto,w_450/v1601820525/OZEETY_IMAGES/assets/img/oztcard_flashgroup-cryptostations.png",
    heading: "OZT card",
    text: "Unique biometric all-in-one smart card with onboard encrypted cold storage",
  },
  {
    img: "https://res.cloudinary.com/sapiangroup/image/upload/v1602066481/OZEETY_IMAGES/assets/img/masternode-2-flashgroup-cryptostations.jpg",
    heading: "OZTG Core Wallet",
    text: "Masternode and Staking rewards wallet for wealth creation and passive income",
  },
  {
    img: "/assets/img/cryptostation.png",
    heading: "Cryptostation",
    text: "An all-in-one information station in various models, providing Blockchain based educational information. It also has full ATM-style functionality, with the capability to dispense your own OZTGcard and the possibility to buy crypto directly from the Cryptostation. ",
  },
  {
    img: "/assets/img/subs/flashcom.svg",
    heading: "Flashcom",
    text: "A dedicated team to design all graphics and user interfaces for corporate branding and image across the whole group of companies",
  },
  {
    img: "https://res.cloudinary.com/sapiangroup/image/upload/v1601650675/OZEETY_IMAGES/assets/img/FlashAdchain_flashgroup-cryptostations.png",
    heading: "Adchain",
    text: "A targeted ad service across all our platforms, to provide the user with information and promo offers on their interested areas and location. The revenue from this will be shared with the clients and also contribute towards our charity foundation.",
  },
  {
    img: "/assets/img/handshake.svg",
    heading: "Flashcare",
    text: "An independently managed foundation through which the group of companies will contribute towards helping our chosen projects and causes. Self-sustainable humanity is our  mission and we will work hard in collaboration with other NGOs and government bodies to bring this to reality",
  },
];

var idx = 0;


function next() {

  if (idx > 9 || idx < 0) return;

  var new_left_data = pages[idx + 1];
  if (idx != 8) {
    idx = idx + 1;
  } else {
    idx = 0;
    new_left_data = pages[idx];
  }

  setTimeout(() => {
    // document.getElementById("fgf-heading").innerHTML = new_left_data.heading;
    document.getElementById("slid_img").src = new_left_data.img;
    document.getElementById("side-text-p").innerHTML = new_left_data.text;
  }, 1500);


  let slider = document.querySelector('.slider');
  setTimeout(slide, 300);
  slider.removeAttribute("style");


  let slideText = document.querySelector('#slide-text');
  let slideImage = document.querySelector('#slide-image');

  setTimeout(() => {
    slideText.removeAttribute('style');
    slideImage.removeAttribute('style');
  }, 4500);
  slideImage.style.animation = "flip 4s ease";
  slideText.style.animation = "flip 4.5s ease";


  let btn = document.querySelector('.next');
  setTimeout(() => {
    btn.removeAttribute('style');
  }, 3500);
  btn.style.animation = "go-ease ease-in-out 3.5s forwards";
}

function slide() {
  let slider = document.querySelector('.slider');
  slider.style.animation = "flip 3s ease";
}

function closeDiv(compPage) {
  let companyPage = document.getElementById(compPage);
  companyPage.style.animation = "close .6s ease-in-out forwards"

  let logo = companyPage.querySelector('.comp-logo');
  let paragraph = companyPage.querySelector('.comp-p');

  if (logo !== null && paragraph !== null) {
    paragraph.removeAttribute('style');
    logo.removeAttribute('style');
  }
}

function showCompanyData(company, page) {

  smoothscroll('#' + page);

  let elem = document.getElementById(company);
  let rect = elem.getBoundingClientRect();

  let x = rect.left + 40;
  let y = rect.top + 40;

  let companyPage = document.getElementById(page);

  let logo = companyPage.querySelector('.comp-logo');
  let paragraph = companyPage.querySelector('.comp-p');

  if (logo !== null && paragraph !== null) {
    logo.style.animation = "fade-up 1s ease-in-out forwards";
    paragraph.style.animation = "fade-up 1.5s ease-in-out forwards 1s";
  }
  companyPage.style.clipPath = "circle(0% at " + x + "px " + y + "px)";
  companyPage.style.animation = "open .6s ease-in-out forwards";
  setTimeout(() => {
    companyPage.style.clipPath = "circle(100% at " + x + "px " + y + "px)";
  }, 600);
}


let fun = document.querySelector('.fun');
setInterval(()=>{
  fun.classList.toggle('flip');
},3000);