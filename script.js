let setTimer = () => {
    let clock = document.getElementById("clock");
    clock.innerHTML = duration.value; 
}

let duration = document.getElementById("duration");
duration.addEventListener("change", setTimer);

let countdown = () => {
    let now = new Date().getTime();
    let difference = now - startTime;
    if (difference < 0){
        clearInterval(countdown, 100);
    } else {
        let minutes = 0 - Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = 59 - Math.floor((difference % (1000 * 60)) / (1000));

        if (seconds < 10){
            seconds = "0" + seconds;
        }

        clock.innerHTML = `0${minutes}:${seconds}`;
    }
}

let startTime = new Date().getTime();
setInterval(countdown, 100);
