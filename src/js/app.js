const offCanvas = document.querySelector("#header-off-canvas");
const navbarToggler = document.querySelector("#navbar-toggler");
const roomSlider = document.querySelector(".swiper-wrapper");
const sentFeedbackBtn = document.querySelector("#sent-feedback-button");
const feedbackBackdrop = document.querySelector("#feedback-backdrop");
const userNameFirst = document.querySelector("#userName-first");
const userNumberFirst = document.querySelector("#userNumber-first");
const userCommentFirst = document.querySelector("#userComment-first");
const userNameSecond = document.querySelector("#userName-second");
const userNumberSecond = document.querySelector("#userNumber-second");
const userCommentSecond = document.querySelector("#userComment-second");
const videosWrapper = document.querySelector("#videosWrapper");
let oldAllVideos = "";

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

  oldAllVideos = videosWrapper.innerHTML;
  if (Array.from(videosWrapper.children).length > 3) {
    let count = 0;
    Array.from(videosWrapper.children).map((item) => {
      count++;
      if (count >= 4) item.remove();
    });
  }
})();

function activeVideo(e) {
  let parent = e.target.parentElement.parentElement.parentElement;
  if (parent.className.includes("img-content"))
    parent.querySelector("a img").click();
  else parent.querySelector(".img-content a img").click();
}

sentFeedbackBtn.addEventListener("click", () => {
  feedbackBackdrop.classList.add("active-feedback-backdrop");
  feedbackBackdrop.classList.remove("hidden");
  feedbackBackdrop.classList.add("flex");

  userNameSecond.value = userNameFirst.value.trim();
  userCommentSecond.value = userCommentFirst.value.trim();
  userNumberSecond.value = userNumberFirst.value.trim();
});

function moreVideo() {
  videosWrapper.innerHTML = oldAllVideos;
}

function takeFileName(e) {
  document.querySelector("#fileLabel").textContent = e.target.files[0].name;
}
