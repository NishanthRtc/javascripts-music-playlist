const img = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

const volumeBtn = document.querySelector(".volume-btn");
const volumeSlider = document.querySelector(".volume-slider");

// Check if playing
let isPlaying = false;
// Current Song Index
let songIndex = 0;

// Music
const songs = [
  {
    name: "song-1",
    displayName: "Deva Deva",
    artist: "Sid Sriram",
  },
  {
    name: "song-2",
    displayName: "Idhazhil oram",
    artist: "Anirudh",
  },
  {
    name: "song-3",
    displayName: "Poradalam",
    artist: "Amaran malik",
  },
  {
    name: "song-4",
    displayName: "Theethiriyai",
    artist: "Sid Sriram",
  },
  {
    name: "song-5",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-6",
    displayName: "Kannazhaga",
    artist: "Dhanush",

  },
  {
    name: "song-7",
    displayName: "Pagal Iravai",
    artist: "B8 Music",
  },
  {
    name: "song-8",
    displayName: "Yamma Yamma",
    artist: "SPB",
  },
  {
    name: "song-9",
    displayName: "Ratti",
    artist: "bagya",
  },
  {
    name: "song-10",
    displayName: "Analum indha",
    artist: "Sathaya prakash",
  },
  {
    name: "song-11",
    displayName: "Agayam Theepidicha",
    artist: "Pradeep Kumar",
  },
  {
    name: "song-12",
    displayName: "Ailasa",
    artist: "Anirudh",
  },
  {
    name: "song-13",
    displayName: "Arabic Kadaloram",
    artist: "A.R Rahman",
  },
  {
    name: "song-14",
    displayName: "Anjali Anjali",
    artist: "SPB",
  },
  {
    name: "song-15",
    displayName: "Arabu Naade",
    artist: "Haricharan",
  },
 
  {
    name: "song-17",
    displayName: "Ennai Vittu",
    artist: "SPB",
  },
  {
    name: "song-18",
    displayName: "Ennake Ennaka",
    artist: "Unnikrishnan",
  },
  {
    name: "song-19",
    displayName: "Enna solla pogirai",
    artist: "Shanker Mahadevan",
  },
  {
    name: "song-20",
    displayName: "Ariyadha vayasu",
    artist: "ilaiyaraja",
  },
  {
    name: "song-21",
    displayName: "Aval",
    artist: "PradeepKumar",
  },
  {
    name: "song-22",
    displayName: "Ayyayo Nenju",
    artist: "SPB",
  },
  {
    name: "song-23",
    displayName: "Beat of master",
    artist: "Anirudh",
  },
  {
    name: "song-24",
    displayName: "Chellama",
    artist: "Anirudh",
  },
  {
    name: "song-25",
    displayName: "Dhimu Dhimu",
    artist: "Kaerthick",
  },
  {
    name: "song-26",
    displayName: "Engadi Nee Poona",
    artist: "SPB",
  },
  {
    name: "song-27",
    displayName: "En Kadhale",
    artist: "SPB",
  },
  {
    name: "song-28",
    displayName: "En Kadhal Solla",
    artist: "Yuvan Shanker Raja",
  },
  {
    name: "song-29",
    displayName: "Ennai Kaanavillaiye",
    artist: "SPB",
  },
  {
    name: "song-30",
    displayName: "Ennavale",
    artist: "Unnikrishnan",
  },
 /*{
    name: "song-31",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-32",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-33",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-34",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-35",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-36",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-37",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-38",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-39",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-40",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-41",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-42",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-43",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-44",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-45",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-46",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-47",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-48",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-49",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-50",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-51",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-52",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-53",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-54",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-55",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-56",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-57",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-58",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-59",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-60",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-61",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-62",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-63",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-64",
    displayName: "Po indru",
    artist: "Dhanush",
  },
  {
    name: "song-65",
    displayName: "Po indru",
    artist: "Dhanush",
  }*/

];

// Random Background Color
const randomBgColor = function () {
  // Get a random number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.
  
  floor(Math.random() * 256) + 64;

  // Construct a color with the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

// Update DOM
const loadSong = function (song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  img.src = `img/${song.name}.jpg`;
  randomBgColor();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Play
const playSong = function () {
  isPlaying = true;
  playBtn.classList.replace("fa-play-circle", "fa-pause-circle");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// Pause
const pauseSong = function () {
  isPlaying = false;
  playBtn.classList.replace("fa-pause-circle", "fa-play-circle");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Mute/Unmute
const toggleMute = function () {
  if (music.muted) {
    music.muted = false;
    volumeSlider.value = 50;
    volumeBtn.classList.replace("fa-volume-mute", "fa-volume-up");
    volumeBtn.setAttribute("title", "Mute");
  } else {
    music.muted = true;
    volumeSlider.value = 0;
    volumeBtn.classList.replace("fa-volume-up", "fa-volume-mute");
    volumeBtn.setAttribute("title", "Unmute");
  }
}

// Update Progress Bar & Time
const updateProgressBar = function (e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;

    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }

    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }

    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

// Next Song
const nextSong = function () {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}

// Previous Song
const prevSong = function () {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}

// Set Progress Bar
const setProgressBar = function (e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;

  music.currentTime = (clickX / width) * duration;
};

// Set Volume
const setVolume = function () {
  music.volume = volumeSlider.value / 100;
};

// Event Listeners
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
volumeBtn.addEventListener("click", toggleMute);
progressContainer.addEventListener("click", setProgressBar);