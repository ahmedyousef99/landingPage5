// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 480) {
//       document.getElementById("navbar_top").style.top = "0";
//       // add padding top to show content behind navbar
//       navbar_height = document.querySelector(".navbar").offsetHeight;
//       document.body.style.paddingTop = navbar_height + "px";
//     } else {
//       document.getElementById("navbar_top").style.top = "-50px";
//       // remove padding top from body
//       document.body.style.paddingTop = "0";
//     }
//   });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 300) {
//       document.querySelector(".navbtns").style.display = "block";
//       // add padding top to show content behind navbar
//     } else {
//       document.querySelector(".navbtns").style.display = "none";

//       // remove padding top from body
//     }
//   });
// });

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 460 ||
    document.documentElement.scrollTop > 460
  ) {
    document.getElementById("navbar_top").style.top = "0";
    document.getElementById("navbar_top").style.backgroundColor = "#014e7b41";
    document.querySelector(".navbtns").style.display = "block";
    document.querySelector(".hov2").classList.add("hov1");
    document.querySelector(".hov3").classList.add("hov1");
    document.querySelector(".hov4").classList.add("hov1");
    document.querySelector(".hov5").classList.add("hov1");
    document.querySelector(".hov6").classList.add("hov1");
  } else {
    document.getElementById("navbar_top").style.top = "-50px";
    document.getElementById("navbar_top").style.backgroundColor = "transparent";
    document.querySelector(".hov2").classList.remove("hov1");
    document.querySelector(".hov3").classList.remove("hov1");
    document.querySelector(".hov4").classList.remove("hov1");
    document.querySelector(".hov5").classList.remove("hov1");
    document.querySelector(".hov6").classList.remove("hov1");
    document.querySelector(".navbtns").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY < 200) {
      document.getElementById("home").classList.add("actived");
      // add padding top to show content behind navbar
    } else {
      document.getElementById("home").classList.remove("actived");
      // remove padding top from body
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400 && window.scrollY < 1020) {
      document.getElementById("services").classList.add("actived");
      // add padding top to show content behind navbar
    } else {
      document.getElementById("services").classList.remove("actived");
      // remove padding top from body
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 1030 && window.scrollY < 1550) {
      document.getElementById("about").classList.add("actived");
      // add padding top to show content behind navbar
    } else {
      document.getElementById("about").classList.remove("actived");
      // remove padding top from body
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 1551 && window.scrollY < 1980) {
      document.getElementById("stage").classList.add("actived");
      // add padding top to show content behind navbar
    } else {
      document.getElementById("stage").classList.remove("actived");
      // remove padding top from body
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 1981 && window.scrollY < 2550) {
      document.getElementById("contact").classList.add("actived");
      // add padding top to show content behind navbar
    } else {
      document.getElementById("contact").classList.remove("actived");
      // remove padding top from body
    }
  });
});

// var english = document.getElementById("en"),
//   DN = document.getElementById("jp"),
//   change_text = document.getElementById("translate");

// english.addEventListener(
//   "click",
//   function () {
//     change(english, DN);
//   },
//   false
// );

// DN.addEventListener(
//   "click",
//   function () {
//     change(DN, english);
//   },
//   false
// );

// function change(lang_on, lang_off1) {
//   if (!lang_on.classList.contains("current_lang")) {
//     lang_on.classList.add("current_lang");
//     lang_off1.classList.remove("current_lang");
//   }
//   if (lang_on.innerHTML == "EN") {
//     change_text.classList.add("english");

//     change_text.classList.remove("DN");
//   } else if (lang_on.innerHTML == "DN") {
//     change_text.classList.add("DN");
//     change_text.classList.remove("english");
//   }
// }
