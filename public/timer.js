
//     let timerInterval;  // Make it global

// function startTimer() {
//   const el = document.getElementById('timer');
//   let timeLeft;

//   if (el.dataset.time !== undefined) {
//     timeLeft = parseInt(el.dataset.time, 10);
//     if (isNaN(timeLeft)) {
//       console.warn('Invalid data-time, using default.');
//       timeLeft = 120; //10 but default is 120 change1/2
//     }
//   } else {
//     timeLeft = 120; //10 but default is 120 change2/2
//   }

//   const updateDisplay = secs => {
//     const mm = String(Math.floor(secs / 60)).padStart(2, '0');
//     const ss = String(secs % 60).padStart(2, '0');
//     el.textContent = `${mm}:${ss}`;
//   };

//   updateDisplay(timeLeft);

//   timerInterval = setInterval(() => {
//     timeLeft--;
//     if (timeLeft <= 0) {
//       clearInterval(timerInterval);
//       updateDisplay(0);
//       document.getElementById('111').style.display = "flex";
//     // document.getElementsByClassName('congra').textContent = points;
    
// //     const collection = document.getElementsByClassName("congra");
// // for (let i = 0; i < collection.length; i++) {
// //   collection[i].textContent = points;
// // }

// alt();
// if(!points2 == 0){
// document.getElementById("congra").textContent = `tagged : ` + points2 + `\n untagged : ` + points;
// }else{
// document.getElementById("congra").textContent = points;
// }

//       return;
//     }
//     updateDisplay(timeLeft);
//   }, 1000);
// }

// function stopTimer() {
  
// //     const collection = document.getElementsByClassName("congra");
// // for (let i = 0; i < collection.length; i++) {
// //   collection[i].textContent = points;
// // }
//   clearInterval(timerInterval);
//   console.log('Timer stopped by user.');
//   // alert("timer stopped");
// }

// function ok2(){
//   document.getElementById('111').style.display = "none";
// }

// window.addEventListener('DOMContentLoaded', () => {
//   startTimer();
//   // document.getElementById('stopButton').addEventListener('click', stopTimer);
// });


let timerInterval = null;
let timeLeft = 0;
let isPaused = false;

const el = document.getElementById('timer');

// Initialize time safely
function initTime() {
  const dataTime = parseInt(el.dataset.time, 10);
  timeLeft = isNaN(dataTime) ? 120 : dataTime;
}

// Update UI
//  00:00 + s
function updateDisplay() {
  const mm = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const ss = String(timeLeft % 60).padStart(2, '0');
  el.textContent = `${mm}:${ss}`;
  if ((timeLeft <= 5)&&timeLeft > 0) {
    el.style.color = "red";
  } else {
    el.style.color = "White";
  }
}
// 00 + s imp
// function updateDisplay() {
//   el.textContent = timeLeft +"s";

//   if (timeLeft <= 5) {
//     el.style.color = "red";
//   } else {
//     el.style.color = "White";
//   }
// }

// Start
function startTimer() {
  clearInterval(timerInterval); // prevent duplicate timers
  isPaused = false;

  initTime();
  updateDisplay();

  timerInterval = setInterval(runTimer, 1000);
}

// Core logic (single place)
function runTimer() {
  timeLeft--;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    timeLeft = 0;
    updateDisplay();

    document.getElementById('111').style.display = "flex";

    // if (points2 !== 0) {
    //   document.getElementById("congra").textContent =
    //     `tagged : ${points2}\nuntagged : ${points}`;
    // } else {
    //   document.getElementById("congra").textContent = points;
    // }

    updateScoreBoard();

    return;
  }

  updateDisplay();
}

// Pause
function pauseTimer() {
  clearInterval(timerInterval);
  isPaused = true;
}

// Resume
function resumeTimer() {
  if (!isPaused) return;

  clearInterval(timerInterval);
  timerInterval = setInterval(runTimer, 1000);
  isPaused = false;
}

// Stop (full reset)
function stopTimer() {
  clearInterval(timerInterval);
  isPaused = false;
  timeLeft = 0;
  updateDisplay();
}


function ok2(){
  document.getElementById('111').style.display = "none";
}


window.addEventListener('DOMContentLoaded', () => {
  startTimer();
});