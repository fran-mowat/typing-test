let setTimer = () => {
    let clock = document.getElementById("clock");
    clock.innerHTML = duration.value; 
}

let duration = document.getElementById("duration");
duration.addEventListener("change", setTimer);
