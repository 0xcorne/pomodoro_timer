/* 
Created with passion by Corné Adema / 0xcorne
GitHub: https://github.com/0xcorne
*/

// Grabbing the elements from the DOM
const playBtn = document.getElementById('play_btn')
const reloadBtn = document.getElementById('reload_btn')
const minutesLeft = document.getElementById('minutes_left')
const secondsLeft = document.getElementById('seconds_left')

// Set initial time values with variables
let minutes = 25;
let seconds = 0;


// Load initial values upon loading the page
function initial() {
    minutesLeft.innerHTML = minutes;
    secondsLeft.innerHTML = seconds;


}

// Main function for the countdown
function start() {
    playBtn.removeEventListener('click', start)

    minutes = 24;
    seconds = 59;

    minutesLeft.innerHTML = minutes;
    secondsLeft.innerHTML = seconds;

    // Execute local functions every minute (6000ms) and seconds (1000ms)
    let minutesInterval = setInterval(minutesTimer, 60000)
    let secondsInterval = setInterval(secondsTimer, 1000);

    // MinutesTimer function, subtracts 1 from the count every minute (60000ms)
    function minutesTimer() {
        minutes = minutes - 1;
        minutesLeft.innerHTML = minutes
    }
    // Seconds timer functions, subtracts 1 from the count every second (1000ms) 
    function secondsTimer() {
        seconds = seconds - 1
        secondsLeft.innerHTML = seconds
        // If statement that checks if second count doesn't fall under 0, also clears intervals after timers are both at 0
        if (seconds <= 0) {
            if (minutes <= 0) {
                clearInterval(minutesInterval)
                clearInterval(secondsInterval)
                playBtn.addEventListener('click', start)
                alert("Well done! You completed the Pomodoro session, take a break of 5 minutes and start again.")
            }
            seconds = 60;
        }
    }
}

// Reload page function
function reloadTimer() {
    location.reload()
}


// EventListeners attached to play and reload button
playBtn.addEventListener('click', start)
reloadBtn.addEventListener('click', reloadTimer)