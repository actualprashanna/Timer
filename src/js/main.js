//timer 
let timer;

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let timer_element = document.getElementById("timer");



startBtn.addEventListener("click", function () {
    timer = setInterval(TimerHandler, 1000);
    resetBtn.disabled = false;

});





stopBtn.addEventListener("click", function () {
    timer = clearInterval(timer);
    resetBtn.disabled = false;

});




resetBtn.addEventListener("click", function () {
    timer = clearInterval(timer);
    resetBtn.disabled = true;
    sec = 0;
    min = 0;
    hr = 0;
    timer_element.innerHTML = "00:00:00";

});

let sec = 0;
let min = 0;
let hr = 0;
function TimerHandler() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        hr++;

    }
    DisplayTimer();
}

function DisplayTimer() {
    let secf = sec;
    let minf = min;
    let hrf = hr;
    if (sec < 10) {
        secf = "0" + sec;
    }
    if (min < 10) {
        minf = "0" + min;
    }
    if (hr < 10) {
        hrf = "0" + hr;
    }
    timer_element.innerHTML = hrf + ":" + minf + ":" + secf;

}
