let secondsToMinutes = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60; 
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    return [minutes, seconds];
}

let setTimer = () => {
    let clock = document.getElementById("clock");
    let set_duration = secondsToMinutes(duration.value);
    let set_minutes = set_duration[0];
    let set_seconds = set_duration[1];

    clock.innerHTML = `0${set_minutes}:${set_seconds}`;

    clock.startTime = new Date().getTime();

    clearInterval(clock.interval_ID);
    let interval_ID = setInterval(countdown, 100);
    clock.interval_ID = interval_ID;
}

let duration = document.getElementById("duration");
duration.addEventListener("change", setTimer);

let countdown = () => {
    console.log("chec");
    let now = new Date().getTime();
    let difference = now - clock.startTime;
    if (difference > duration.value * 1000){
        clearInterval(clock.interval_ID);
        clock.innerHTML = "00:00";
    } else {
        let seconds_passed = Math.floor((difference % (1000 * 60)) / (1000));
        let seconds_remaining = duration.value - seconds_passed;

        let duration_remaining = secondsToMinutes(seconds_remaining);
        let clock_minutes = duration_remaining[0];
        let clock_seconds = duration_remaining[1];

        clock.innerHTML = `0${clock_minutes}:${clock_seconds}`;
    }
}

