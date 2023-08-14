const offCanvas = document.querySelector("#header-off-canvas");
const navbarToggler = document.querySelector("#navbar-toggler");
const roomSlider = document.querySelector(".swiper-wrapper");
const sentFeedbackBtn = document.querySelector("#sent-feedback-button");
const feedbackBackdrop = document.querySelector("#feedback-backdrop");

navbarToggler.addEventListener("click", () => {
  offCanvas.classList.add("open-canvas");
  offCanvas.children[0].classList.remove("-translate-x-[100%]");
  offCanvas.children[0].classList.add("translate-x-o");
});

document.body.addEventListener("click", (e) => {
  if (e.target === offCanvas) {
    offCanvas.children[0].classList.add("-translate-x-[100%]");
    offCanvas.children[0].classList.remove("translate-x-o");
    setTimeout(() => {
      offCanvas.classList.remove("open-canvas");
    }, 100);
  } else if (e.target === feedbackBackdrop) {
    feedbackBackdrop.classList.remove("active-feedback-backdrop");
    feedbackBackdrop.classList.remove("flex");
    feedbackBackdrop.classList.add("hidden");
  }
});

(function () {
  let counter = roomSlider.childElementCount;
  if (counter == 1) {
    for (let i = 0; i < 4; i++) {
      roomSlider.appendChild(roomSlider.children[0].cloneNode(true));
    }
  } else if (counter == 2) {
    for (let i = 0; i < 2; i++) {
      roomSlider.appendChild(roomSlider.children[0].cloneNode(true));
      roomSlider.appendChild(roomSlider.children[1].cloneNode(true));
    }
  } else if (counter == 3) {
    for (let i = 0; i < 1; i++) {
      roomSlider.appendChild(roomSlider.children[0].cloneNode(true));
      roomSlider.appendChild(roomSlider.children[1].cloneNode(true));
      roomSlider.appendChild(roomSlider.children[2].cloneNode(true));
    }
  } else if (counter == 4) {
    roomSlider.appendChild(roomSlider.children[0].cloneNode(true));
    roomSlider.appendChild(roomSlider.children[1].cloneNode(true));
    roomSlider.appendChild(roomSlider.children[2].cloneNode(true));
    roomSlider.appendChild(roomSlider.children[3].cloneNode(true));
  }
})();

// document.querySelector("#video-play-btn svg")?.addEventListener("click", () => {
//   document.querySelector("#videoImg").click();
// });

sentFeedbackBtn.addEventListener("click", () => {
  feedbackBackdrop.classList.add("active-feedback-backdrop");
  feedbackBackdrop.classList.remove("hidden");
  feedbackBackdrop.classList.add("flex");
});
