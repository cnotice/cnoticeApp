
// //   <script>window.addEventListener('DOMContentLoaded', () => {

    
// let timeLeft = 5 * 60;// Just before you redirect or at any point during the timer:
// // const timeLeft = 5 /* your current time in seconds or MM:SS string */;
// sessionStorage.setItem('timerValue', timeLeft);



//     // initial time: 2 minutes in seconds
//     // let timeLeft = 2 * 60;
//     const timerEl = document.getElementById('timer');

//     function updateTimer() {
//       const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
//       const seconds = (timeLeft % 60).toString().padStart(2, '0');
//       timerEl.textContent = `${minutes}:${seconds}`;

//       if (timeLeft <= 0) {
//         clearInterval(timerInterval);
//         // timer done – show modal
//         alert('Time is up!');
//         // when user clicks OK, redirect:
//         window.location.href = 'target.html'; // <-- change this URL as needed
//       }

//       timeLeft--;
//     }

//     // start the countdown, update every second
//     const timerInterval = setInterval(updateTimer, 1000);
// //   </script>






















// function startTimer() {
//   const el = document.getElementById('timer');
//   let timeLeft;

//   // Try reading initial time; dataset returns undefined if missing:
//   if (el.dataset.time !== undefined) {
//     timeLeft = parseInt(el.dataset.time, 10);
//     if (isNaN(timeLeft)) {
//       console.warn('Invalid data-time, using default.');
//       timeLeft = 120;
//     }
//   } else {
//     timeLeft = 120; // default 2 minutes
//   }

//   // Update display helper
//   const updateDisplay = (secs) => {
//     const mm = String(Math.floor(secs / 60)).padStart(2, '0');
//     const ss = String(secs % 60).padStart(2, '0');
//     el.textContent = `${mm}:${ss}`;
//   };

//   updateDisplay(timeLeft);

//   // Start countdown
//   const interval = setInterval(() => {
//     timeLeft--;
//     if (timeLeft <= 0) {
//       clearInterval(interval);
//     //   alert('Time is up!');
//     updateDisplay(timeLeft);
//         document.getElementById('111').style.display="flex";
//     //   window.location.href = 'next.html';
//       return;
//     }
//     updateDisplay(timeLeft);
//   }, 1000);
// }

// // Run on page load
// window.addEventListener('DOMContentLoaded', startTimer);


//     function ok(){
//         document.getElementById('111').style.display="none";
//     }









    let timerInterval;  // Make it global

function startTimer() {
  const el = document.getElementById('timer');
  let timeLeft;

  if (el.dataset.time !== undefined) {
    timeLeft = parseInt(el.dataset.time, 10);
    if (isNaN(timeLeft)) {
      console.warn('Invalid data-time, using default.');
      timeLeft = 120; //10 but default is 120 change1/2
    }
  } else {
    timeLeft = 120; //10 but default is 120 change2/2
  }

  const updateDisplay = secs => {
    const mm = String(Math.floor(secs / 60)).padStart(2, '0');
    const ss = String(secs % 60).padStart(2, '0');
    el.textContent = `${mm}:${ss}`;
  };

  updateDisplay(timeLeft);

  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      updateDisplay(0);
      document.getElementById('111').style.display = "flex";
    // document.getElementsByClassName('congra').textContent = points;
    
//     const collection = document.getElementsByClassName("congra");
// for (let i = 0; i < collection.length; i++) {
//   collection[i].textContent = points;
// }
if(!points2 == 0){
document.getElementById("congra").textContent = `tagged : ` + points2 + `\n untagged : ` + points;
}else{
document.getElementById("congra").textContent = points;
}

      return;
    }
    updateDisplay(timeLeft);
  }, 1000);
}

function stopTimer() {
  
//     const collection = document.getElementsByClassName("congra");
// for (let i = 0; i < collection.length; i++) {
//   collection[i].textContent = points;
// }
  clearInterval(timerInterval);
  console.log('Timer stopped by user.');
  // alert("timer stopped");
}

function ok2(){
  document.getElementById('111').style.display = "none";
}

window.addEventListener('DOMContentLoaded', () => {
  startTimer();
  // document.getElementById('stopButton').addEventListener('click', stopTimer);
});