function changeScaleAccWidth() {
  let currentWidth = window.innerWidth;
  if (currentWidth > 1200) {
    let scale = currentWidth / 1200;
    document.documentElement.style.setProperty("--playCard-scale", scale);
  } else {
    document.documentElement.style.setProperty("--playCard-scale", "1");
  }
}
changeScaleAccWidth();
window.addEventListener("resize", changeScaleAccWidth);

let no = document.querySelector(".no");
let surahName = document.querySelector(".surahName");
let surahOrder = document.querySelector(".order");
let ayahNo = document.querySelector(".ayahNo");
let origin = document.querySelector(".origin");
let audioLink = document.querySelector("a");

let audio = document.querySelector("audio");
let input = document.querySelector("input");
let audioDuration = document.querySelector(".duration");
let currentTime = document.querySelector(".currTime");
let button = document.querySelector("button");
let replay = document.querySelector(".inputs div > span");
let loadingSpan = document.querySelector(".customPlayer > span");

let controllsI = document.querySelectorAll(".controllers i");
let controllsSpan = document.querySelectorAll(".controllers span");

let prevSpan = controllsSpan[0];
let playSpan = controllsSpan[1];
let nextSpan = controllsSpan[2];
let prevI = controllsI[0];
let playI = controllsI[1];
let nextI = controllsI[2];

let play = "fa-play";
let pause = "fa-pause";

let bars = "fa-bars";
let xMark = "fa-xmark";

let surahs = [
  {
    order: 1,
    name: "Al-Fatiha",
    totalAyah: 7,
    type: "Makki",
    duration: 52,
    link: "https://youtu.be/GLMp_EGGLfk?si=WPKyQw4kbKAXJ_jp",
    source: "./Audios/Al-Fatiha_ 01.mp3",
  },
  {
    order: 10,
    name: "Yunus",
    totalAyah: 109,
    type: "Makki",
    duration: 2713,
    link: "https://youtu.be/YgbXRMEcWsE?si=i9ZPhkTsLjHOrmcs",
    source: "./Audios/Yunus_ 10.mp3",
  },
  {
    order: 18,
    name: "Al-Kahf",
    totalAyah: 110,
    type: "Makki",
    duration: 2010,
    link: "https://youtu.be/63tmkNj23Uk?si=EVCu6xwBoCqke9UA",
    source: "./Audios/Al-Kahf_ 18.mp3",
  },
  {
    order: 32,
    name: "As-Sajdah",
    totalAyah: 30,
    type: "Makki",
    duration: 524,
    link: "https://youtu.be/vNODxgw6eRc?si=2zNG7vuak7p7tMmz",
    source: "./Audios/As-Sajda_ 32.mp3",
  },
  {
    order: 36,
    name: "YaSeen",
    totalAyah: 83,
    type: "Makki",
    duration: 1060,
    link: "https://youtu.be/zcnSPIPOj68?si=RiTAe7R1ihpGQUDx",
    source: "./Audios/Yaseen_ 36.mp3",
  },
  {
    order: 55,
    name: "Ar-Rahman",
    totalAyah: 78,
    type: "Makki",
    duration: 679,
    link: "https://youtu.be/d0Xk4V1x45s?si=YYyWGtlo9dinoe2u",
    source: "./Audios/Ar-Rahman_ 55.mp3",
  },
  {
    order: 67,
    name: "Al-Mulk",
    totalAyah: 30,
    type: "Makki",
    duration: 456,
    link: "https://youtu.be/XPNDOXnuyEw?si=6PaUlMsGPzWlFSos",
    source: "./Audios/Al-Mulk_ 67.mp3",
  },
  {
    order: 87,
    name: "Al-A'la",
    totalAyah: 19,
    type: "Makki",
    duration: 108,
    link: "https://youtu.be/WR79toKxwlE?si=tJsUQiyKeC89SuQA",
    source: "./Audios/Al-Ala_ 87.mp3",
  },
  {
    order: 89,
    name: "Al-Fajr",
    totalAyah: 30,
    type: "Makki",
    duration: 213,
    link: "https://youtu.be/8fmP7O5rtFY?si=eem0Dwq8HWcG7Fn9",
    source: "./Audios/Al-Fajr_ 89.mp3",
  },
  {
    order: 91,
    name: "Ash-Shams",
    totalAyah: 15,
    type: "Makki",
    duration: 85,
    link: "https://youtu.be/eYmJbNS7qS4?si=_hDjUsNsBl6TcBpH",
    source: "./Audios/Ash-Shams_ 91.mp3",
  },
  {
    order: 93,
    name: "Ad-Duha",
    totalAyah: 11,
    type: "Makki",
    duration: 65,
    link: "https://youtu.be/mEFACmu5Me8?si=DcEp9VvGWEfBslIO",
    source: "./Audios/Ad-Dhuha_ 93.mp3",
  },
  {
    order: 94,
    name: "Al-Inshirah",
    totalAyah: 8,
    type: "Makki",
    duration: 43,
    link: "https://youtu.be/FljHpbVhSmc?si=LSXqm7cryWj3JdSj",
    source: "./Audios/Al-Inshirah_ 94.mp3",
  },
  {
    order: 95,
    name: "At-Tin",
    totalAyah: 8,
    type: "Makki",
    duration: 65,
    link: "https://youtu.be/hDabXotjUZY?si=T28Dqr0O4dqe6lRs",
    source: "./Audios/At-Tin_ 95.mp3",
  },
  {
    order: 96,
    name: "Al-Alaq",
    totalAyah: 19,
    type: "Makki",
    duration: 95,
    link: "https://youtu.be/fx-wTozXKC8?si=XTJ8UIl_BJSui6lx",
    source: "./Audios/Al-Alaq_ 96.mp3",
  },
  {
    order: 100,
    name: "Al-Adiyat",
    totalAyah: 11,
    type: "Makki",
    duration: 70,
    link: "https://youtu.be/kUyiInrUikw?si=ak-M_T6ZGhDO-O-5",
    source: "./Audios/Al-Adiyat_ 100.mp3",
  },
  {
    order: 103,
    name: "Al-Asr",
    totalAyah: 3,
    type: "Makki",
    duration: 28,
    link: "https://youtu.be/zaFF9WSzHvo?si=YDTiC3Gy29HTZdhV",
    source: "./Audios/Al-Asr_ 103.mp3",
  },
  {
    order: 104,
    name: "Al-Humazah",
    totalAyah: 9,
    type: "Makki",
    duration: 58,
    link: "https://youtu.be/Y2rxZWGS2d0?si=ToHBKtd8xQIxesXK",
    source: "./Audios/Al-Humaza_ 104.mp3",
  },
  {
    order: 105,
    name: "Al-Fil",
    totalAyah: 5,
    type: "Makki",
    duration: 49,
    link: "https://youtu.be/RaJeKZ9Vglg?si=RpZMbnbJ87uJKWYp",
    source: "./Audios/Al-Fil_ 105.mp3",
  },
  {
    order: 106,
    name: "Quraysh",
    totalAyah: 4,
    type: "Makki",
    duration: 43,
    link: "https://youtu.be/QJaD1wviSwE?si=wyxFIeo2kCVo5HCC",
    source: "./Audios/Quraysh_ 106.mp3",
  },
  {
    order: 107,
    name: "Al-Ma'un",
    totalAyah: 7,
    type: "Makki",
    duration: 58,
    link: "https://youtu.be/8Em1gyjMfss?si=3UKDt6aXE6vqUAUJ",
    source: "./Audios/Al Ma'un_ 107.mp3",
  },
  {
    order: 108,
    name: "Al-Kawthar",
    totalAyah: 3,
    type: "Makki",
    duration: 25,
    link: "https://youtu.be/Y4KG2GY9Njs?si=5o6ZJWOZny2op0QY",
    source: "./Audios/Al-Kawthar_ 108.mp3",
  },
  {
    order: 109,
    name: "Al-Kafirun",
    totalAyah: 6,
    type: "Makki",
    duration: 54,
    link: "https://youtu.be/PDz54DQTks0?si=FZX2Iwv2mqMil1Ae",
    source: "./Audios/Al-Kafirun_ 109.mp3",
  },
  {
    order: 110,
    name: "An-Nasr",
    totalAyah: 3,
    type: "Madani",
    duration: 35,
    link: "https://youtu.be/QLjUi-mS6gc?si=myGaFsrONi6GnAYU",
    source: "./Audios/An-Nasr_ 110.mp3",
  },
  {
    order: 112,
    name: "Al-Ikhlas",
    totalAyah: 4,
    type: "Makki",
    duration: 22,
    link: "https://youtu.be/T-GRQC6EziA?si=KUM_r66HmiIa7zHB",
    source: "./Audios/Al-Ikhlas_ 112.mp3",
  },
  {
    order: 113,
    name: "Al-Falaq",
    totalAyah: 5,
    type: "Makki",
    duration: 33,
    link: "https://youtu.be/ibddDVGp-cI?si=zQoNxM7ENKJSK2GO",
    source: "./Audios/Al-Falaq_ 113.mp3",
  },
  {
    order: 114,
    name: "An-Nas",
    totalAyah: 6,
    type: "Makki",
    duration: 50,
    link: "https://youtu.be/1yW7E618emc?si=E3m396NB59BpzjsS",
    source: "./Audios/Al-Nas_ 114.mp3",
  },
];
let len = surahs.length;

let navOptionSpan = document.querySelector(".playlistDiv span");
let navOption = document.querySelector(".playlistDiv span i");
let playlist = document.querySelector(".playlist");
let playlistOl = document.querySelector(".playlist ol");
let playlistLis = [];
for (let i = 0; i < len; i++) {
  let li = document.createElement("li");
  li.value = i + 1;
  li.title = "Play";
  li.textContent = "Surah " + surahs[i].name + " (" + surahs[i].order + ")";
  playlistOl.appendChild(li);
  playlistLis.push(li);
}

playlist.classList.add("hidden");

let idx = Number(localStorage.getItem("lastSurahIdx")) || 0;
let audioTime = 0;

playSpan.addEventListener("click", function () {
  if (playI.classList.contains(play)) {
    loadingSpan.classList.remove("hidden");
    audio.addEventListener("timeupdate", function () {
      loadingSpan.classList.add("hidden");
    });
    playSpan.title = "Pause";
    playI.classList.add(pause);
    playI.classList.remove(play);
    audio.play();
  } else {
    playSpan.title = "Play";
    playI.classList.replace(pause, play);
    audio.pause();
  }
});

window.addEventListener("keydown", (event) => {
  if (
    event.code === "Space" ||
    event.code === "ArrowLeft" ||
    event.code === "ArrowRight" ||
    event.code === "Escape" ||
    event.code === "Tab"
  ) {
    event.preventDefault();
  }

  if (event.code === "Space") {
    playSpan.click();
  } else if (event.code === "ArrowLeft") {
    prevSpan.click();
  } else if (event.code === "ArrowRight") {
    nextSpan.click();
  } else if (event.code === "Escape" || event.code === "Tab") {
    navOptionSpan.click();
  }
});

audio.addEventListener("timeupdate", function () {
  localStorage.setItem(`surahTime${idx}`, Math.round(audio.currentTime));
  input.value = (audio.currentTime / audio.duration) * 100;
  currentTime.textContent = timeInMinutes(Math.round(audio.currentTime));
});

input.addEventListener("input", function () {
  if (playI.classList.contains(pause)) {
    loadingSpan.classList.remove("hidden");
    audio.addEventListener("timeupdate", function () {
      loadingSpan.classList.add("hidden");
    });
  }
  audio.currentTime = (input.value / 100) * audio.duration;
  localStorage.setItem(`surahTime${idx}`, Math.round(audio.currentTime));
  currentTime.textContent = timeInMinutes(Math.round(audio.currentTime));
});

function info(idx) {
  let currentSurah = surahs[idx];

  no.textContent = idx + 1 + ".";
  surahOrder.textContent = currentSurah.order;
  surahName.textContent = currentSurah.name;
  ayahNo.textContent = currentSurah.totalAyah;
  origin.textContent = currentSurah.type;
  audioLink.href = currentSurah.link;
  audioDuration.textContent = timeInMinutes(currentSurah.duration);

  loadingSpan.classList.remove("hidden");

  audioTime = Number(localStorage.getItem(`surahTime${idx}`)) || 0;

  audio.src = currentSurah.source;
  audio.load();

  audio.onloadedmetadata = function () {
    audio.currentTime = audioTime;
    input.value = (audio.currentTime / audio.duration) * 100;
    currentTime.textContent = timeInMinutes(Math.round(audio.currentTime));
    loadingSpan.classList.add("hidden");
  };
  localStorage.setItem("lastSurahIdx", idx);

  disable(idx);
  playlistLis[idx].style.backgroundColor = "#4F83A1";
}

info(idx);

function disable(idx) {
  if (idx == 0) {
    prevSpan.classList.add("disabled");
    prevSpan.title = "Disabled";
  } else if (idx !== 0) {
    prevSpan.classList.remove("disabled");
    prevSpan.title = "Previous Surah";
  }
  if (idx == len - 1) {
    nextSpan.classList.add("disabled");
    nextSpan.title = "Disabled";
  } else if (idx !== len - 1) {
    nextSpan.classList.remove("disabled");
    nextSpan.title = "Next Surah";
  }
}

prevSpan.addEventListener("click", function () {
  if (idx > 0) {
    playlistLis[idx].style.backgroundColor = "#8cbfdb";
    localStorage.setItem(`surahTime${idx}`, Math.round(audio.currentTime));
    idx--;
    info(idx);
    if (playI.classList.contains(pause)) {
      playI.classList.replace(pause, play);
    }
  }
});

nextSpan.addEventListener("click", function () {
  if (idx < len - 1) {
    playlistLis[idx].style.backgroundColor = "#8cbfdb";
    localStorage.setItem(`surahTime${idx}`, Math.round(audio.currentTime));
    idx++;
    info(idx);
    if (playI.classList.contains(pause)) {
      playI.classList.replace(pause, play);
      playSpan.title = "Play";
    }
  }
});

navOptionSpan.addEventListener("click", function () {
  if (navOption.classList.contains(bars)) {
    navOption.classList.replace(bars, xMark);
    playlist.classList.remove("hidden");
    playlist.classList.add("navOpen");
    playlist.classList.remove("navClose");
    navOptionSpan.title = "Close";
  } else {
    navOption.classList.replace(xMark, bars);
    playlist.classList.replace("navOpen", "navClose");
    navOptionSpan.title = "Open";
  }
});

playlistLis.forEach(function (li) {
  li.addEventListener("click", function () {
    if (idx != li.value - 1) {
      playlistLis[idx].style.backgroundColor = "#8cbfdb";
      localStorage.setItem(`surahTime${idx}`, Math.round(audio.currentTime));
      idx = li.value - 1;
      info(idx);
      audio.pause();
      if (playI.classList.contains(pause)) {
        playI.classList.replace(pause, play);
        playSpan.title = "Play";
      }
    }

    navOption.classList.replace(xMark, bars);
    playlist.classList.replace("navOpen", "navClose");
    navOptionSpan.title = "Open";
  });
});

replay.addEventListener("click", function () {
  loadingSpan.classList.remove("hidden");
  audio.currentTime = 0;
  localStorage.setItem(`surahTime${idx}`, 0);
  input.value = 0;
  audio.load();
  audio.onloadedmetadata = function () {
    loadingSpan.classList.add("hidden");
  };
  if (playI.classList.contains(pause)) {
    playI.classList.replace(pause, play);
    playSpan.title = "Play";
  }
});

button.addEventListener("click", function () {
  localStorage.removeItem("lastSurahIdx");
  for (let i = 0; i < len; i++) {
    localStorage.removeItem(`surahTime${i}`);
  }
  window.location.reload();
});

function timeInMinutes(duration) {
  let sec = duration;
  let min = 0;
  min = parseInt(sec / 60);
  sec = sec - min * 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}