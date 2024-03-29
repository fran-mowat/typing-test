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
    clearInterval(clock.interval_ID);
    test_area.addEventListener("input", startTimer);

    test_area.value = "";

    let progress_bar = document.getElementById("progress-bar");
    progress_bar.classList = "";
}

let duration = document.getElementById("duration");
duration.addEventListener("change", setTimer);

let countdown = () => {
    let now = new Date().getTime();
    let difference = now - clock.startTime;
    if (difference > duration.value * 1000){
        clearInterval(clock.interval_ID);
        clock.innerHTML = "00:00";
        test_area.setAttribute("disabled", "true");
        displayResults();
    } else {
        let seconds_passed = (difference % (1000 * 60 * 60)) / (1000);
        let seconds_remaining = duration.value - Math.floor(seconds_passed);

        let duration_remaining = secondsToMinutes(seconds_remaining);
        let clock_minutes = duration_remaining[0];
        let clock_seconds = duration_remaining[1];

        clock.innerHTML = `0${clock_minutes}:${clock_seconds}`;

        let progress_filled = document.getElementById("progress-fill");
        let percentage = seconds_passed / duration.value * 100;
        progress_filled.style.width = percentage + "%";
    }
}

let text_1984 = ["It was a bright cold day in April, and the clocks were striking thirteen.", "Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.", "The hallway smelt of boiled cabbage and old rag mats.", "At one end of it a coloured poster, too large for indoor display, had been tacked to the wall.", "It depicted simply an enormous face, more than a metre wide: the face of a man of about forty-five, with a heavy black moustache and ruggedly handsome features.", "Winston made for the stairs. ", "It was no use trying the lift.", "Even at the best of times it was seldom working, and at present the electric current was cut off during daylight hours.", "It was part of the economy drive in preparation for Hate Week.", "The flat was seven flights up, and Winston, who was thirty-nine and had a varicose ulcer above his right ankle, went slowly, resting several times on the way.", "On each landing, opposite the lift-shaft, the poster with the enormous face gazed from the wall.", "It was one of those pictures which are so contrived that the eyes follow you about when you move.", "BIG BROTHER IS WATCHING YOU, the caption beneath it ran.", "Inside the flat a fruity voice was reading out a list of figures which had something to do with the production of pig-iron.", "The voice came from an oblong metal plaque like a dulled mirror which formed part of the surface of the right-hand wall.", "Winston turned a switch and the voice sank somewhat, though the words were still distinguishable.", "The instrument (the telescreen, it was called) could be dimmed, but there was no way of shutting it off completely.", "He moved over to the window: a smallish, frail figure, the meagreness of his body merely emphasized by the blue overalls which were the uniform of the party.", "His hair was very fair, his face naturally sanguine, his skin roughened by coarse soap and blunt razor blades and the cold of the winter that had just ended.", "Outside, even through the shut window-pane, the world looked cold.", "Down in the street little eddies of wind were whirling dust and torn paper into spirals, and though the sun was shining and the sky a harsh blue, there seemed to be no colour in anything, except the posters that were plastered everywhere.", "The black-moustachio\'d face gazed down from every commanding corner.", "There was one on the house-front immediately opposite.", "BIG BROTHER IS WATCHING YOU, the caption said, while the dark eyes looked deep into Winston\'s own.", "Down at streetlevel another poster, torn at one corner, flapped fitfully in the wind, alternately covering and uncovering the single word INGSOC.", "In the far distance a helicopter skimmed down between the roofs, hovered for an instant like a bluebottle, and darted away again with a curving flight."];
let text_oliver_twist = ["Among other public buildings in a certain town, which for many reasons it will be prudent to refrain from mentioning, and to which I will assign no fictitious name, there is one anciently common to most towns, great or small: to wit, a workhouse; and in this workhouse was born; on a day and date which I need not trouble myself to repeat, inasmuch as it can be of no possible consequence to the reader, in this stage of the business at all events; the item of mortality whose name is prefixed to the head of this chapter.", "For a long time after it was ushered into this world of sorrow and trouble, by the parish surgeon, it remained a matter of considerable doubt whether the child would survive to bear any name at all; in which case it is somewhat more than probable that these memoirs would never have appeared; or, if they had, that being comprised within a couple of pages, they would have possessed the inestimable merit of being the most concise and faithful specimen of biography, extant in the literature of any age or country.", "Although I am not disposed to maintain that the being born in a workhouse, is in itself the most fortunate and enviable circumstance that can possibly befall a human being, I do mean to say that in this particular instance, it was the best thing for Oliver Twist that could by possibility have occurred.", "The fact is, that there was considerable difficulty in inducing Oliver to take upon himself the office of respiration, -a troublesome practice, but one which custom has rendered necessary to our easy existence; and for some time he lay gasping on a little flock mattress, rather unequally poised between this world and the next: the balance being decidedly in favour of the latter.", "Now, if, during this brief period, Oliver had been surrounded by careful grandmothers, anxious aunts, experienced nurses, and doctors of profound wisdom, he would most inevitably and indubitably have been killed in no time.", "There being nobody by, however, but a pauper old woman, who was rendered rather misty by an unwonted allowance of beer; and a parish surgeon who did such matters by contract; Oliver and Nature fought out the point between them.", "The result was, that, after a few struggles, Oliver breathed, sneezed, and proceeded to advertise to the inmates of the workhouse the fact of a new burden having been imposed upon the parish, by setting up as loud a cry as could reasonably have been expected from a male infant who had not been possessed of that very useful appendage, a voice, for a much longer space of time than three minutes and a quarter.", "As Oliver gave this first proof of the free and proper action of his lungs, the patchwork coverlet which was carelessly flung over the iron bedstead, rustled; the pale face of a young woman was raised feebly from the pillow; and a faint voice imperfectly articulated the words, “Let me see the child, and die.”"];
let text_wizard_of_oz = ["Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer\'s wife.", "Their house was small, for the lumber to build it had to be carried by wagon many miles.", "There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds.", "Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner.", "There was no garret at all, and no cellar—except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path.", "It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole.", "When Dorothy stood in the doorway and looked around, she could see nothing but the great gray prairie on every side.", "Not a tree nor a house broke the broad sweep of flat country that reached to the edge of the sky in all directions.", "The sun had baked the plowed land into a gray mass, with little cracks running through it.", "Even the grass was not green, for the sun had burned the tops of the long blades until they were the same gray color to be seen everywhere.", "Once the house had been painted, but the sun blistered the paint and the rains washed it away, and now the house was as dull and gray as everything else.", "When Aunt Em came there to live she was a young, pretty wife.", "The sun and wind had changed her, too.", "They had taken the sparkle from her eyes and left them a sober gray; they had taken the red from her cheeks and lips, and they were gray also.", "She was thin and gaunt, and never smiled now.", "When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child\'s laughter that she would scream and press her hand upon her heart whenever Dorothy\'s merry voice reached her ears; and she still looked at the little girl with wonder that she could find anything to laugh at.", "Uncle Henry never laughed.", "He worked hard from morning till night and did not know what joy was.", "He was gray also, from his long beard to his rough boots, and he looked stern and solemn, and rarely spoke.", "It was Toto that made Dorothy laugh, and saved her from growing as gray as her other surroundings.", "Toto was not gray; he was a little black dog, with long silky hair and small black eyes that twinkled merrily on either side of his funny, wee nose.", "Toto played all day long, and Dorothy played with him, and loved him dearly."];
let text_display = document.getElementById("reference-text");
text_display.text_index = 0;

let setText = (sentence) => {
    text_display.textContent = "";

    sentence.split("").forEach(char => {
        let char_span = document.createElement("span");
        char_span.innerHTML = char;
        text_display.appendChild(char_span);
    })
}

let changeText = () => {
    text_display.text_index = 0;

    switch (selected_text.value){
        case "1":
            setText(text_1984[0]);
            break;
        case "2":
            setText(text_oliver_twist[0]); 
            break;
        case "3":
            setText(text_wizard_of_oz[0]);
            break;
        default: 
            text_display.innerHTML = "Error on selection";
    }

    test_area.value = "";
    test_area.placeholder = "Start typing here to begin...";
}

let incrementText = () => {
    text_display.text_index++;
    test_area.placeholder = "Continue typing here...";

    switch (selected_text.value){
        case "1":
            setText(text_1984[text_display.text_index]);
            break;
        case "2":
            setText(text_oliver_twist[text_display.text_index]); 
            break;
        case "3":
            setText(text_wizard_of_oz[text_display.text_index]);
            break;
        default: 
            text_display.innerHTML = "Error on selection";
    }
    test_area.value = "";
}

let startTimer = () => {
    clock.startTime = new Date().getTime();

    test_area.removeEventListener("input", startTimer);

    clearInterval(clock.interval_ID);
    let interval_ID = setInterval(countdown, 10);
    clock.interval_ID = interval_ID;
}

let validateInput = () => {
    test_area.errors = 0;
    total_characters_typed++;
    
    let current_input = test_area.value;
    const current_input_arr = current_input.split("");

    let sentence = text_display.children;

    let current_character = 0;
    nullFound = false;

    for (let i = 0; i < sentence.length; i++){
        if (current_input_arr[i] == null){
            sentence[i].classList = "";
            if (!nullFound){
                current_character = i;
                nullFound = true;
            }
        } else if (sentence[i].innerHTML == current_input_arr[i]){
            sentence[i].classList = "correct_char";
        } else if (sentence[i].innerHTML != current_input_arr[i]){
            if (sentence[i].innerHTML == " "){
                sentence[i].classList = "incorrect_space";
            } else {
                sentence[i].classList = "incorrect_char";
            }
            test_area.errors++;
        }
    }

    sentence[current_character].classList.add("current_char");

    test_area.current_characters = current_input.length;
    test_area.current_words = current_input.split(" ").length - 1;

    if (current_input.length === sentence.length){
        incrementText();
        test_area.total_errors += test_area.errors; 
        test_area.characters_typed += test_area.current_characters;
        test_area.total_words += test_area.current_words;
    }
}

let setAnimal = (level, animal, message) => {
    let comparison = document.getElementById("comparison");
    let animal_txt = comparison.children[0].children[0];
    let typing_message = comparison.children[0].children[1];
    let animal_img = comparison.children[1];

    animal_img.src = "./static/s1-cheetah.svg";
    animal_img.src = "./static/" + level + animal + ".svg";
    animal_img.alt = animal + " icon"; 
    if (animal == "elephant"){
        animal_txt.innerHTML = "You're an elephant!";
    } else {
        animal_txt.innerHTML = "You're a " + animal + "!";
    }
    typing_message.innerHTML = message;
}

let displayResults = () => {
    let result_display = document.getElementById("results-container");
    result_display.style.display = "block";

    let errors = 0;
    let characters = 0; 
    let words = 0;

    if (test_area.value.length != 0){
        errors = test_area.total_errors + test_area.errors;
        characters = test_area.characters_typed + test_area.current_characters;
        words = test_area.total_words + test_area.current_words;
    } else {
        errors = test_area.total_errors;
        characters = test_area.characters_typed;
        words = test_area.total_words;
    }

    let correct_characters = total_characters_typed - errors;
    let accuracy = Math.floor((correct_characters / total_characters_typed) * 100);
    
    let accuracy_div = document.getElementById("accuracy");
    let accuracy_display = accuracy_div.children[1];
    accuracy_display.innerHTML = accuracy + "%";
    
    let minutes = duration.value / 60;

    let wpm_div = document.getElementById("wpm");
    let wpm_display = wpm_div.children[1];
    let wpm = Math.floor(words / minutes); 
    wpm_display.innerHTML = wpm;

    let cpm_div = document.getElementById("cpm");
    let cpm_display = cpm_div.children[1];
    let cpm = Math.floor(characters / minutes); 
    cpm_display.innerHTML = cpm;

    let comparison = document.getElementById("comparison");
    let animal = comparison.children[0];
    let animal_img = comparison.children[1];

    if (wpm >= 70){
        setAnimal("s1-", "cheetah", "You are in the top 10% of typists. Well done.");
    } else if (wpm >= 60){
        setAnimal("s2-", "kangaroo", "Wow, you are very fast at typing.");    
    } else if (wpm >= 50){
        setAnimal("s3-", "fish", "You are faster than most other typists. Well done.");
    } else if (wpm >= 45){
        setAnimal("s4-", "dolphin", "You are slightly faster than average. Great job.");
    } else if (wpm >= 40){
        setAnimal("s5-", "elephant", "You are slightly below the average typing speed. Keep practicing.");
    } else if (wpm >= 35){
        setAnimal("s6-", "hen", "You've still got some work to do. Keep practicing to improve your score.");
    } else if (wpm >= 20){
        setAnimal("s7-", "penguin", "You've still got work to do. Keep practicing your typing.");
    } else {
        setAnimal("s8-", "snail", "You're in the slowest group of typists. Keep practicing to improve.");
    }
}

let selected_text = document.getElementById("text-choice");
selected_text.addEventListener("change", setTimer);
selected_text.addEventListener("change", changeText);
duration.addEventListener("change", changeText);

let test_area = document.getElementById("test-area");
test_area.addEventListener("input", startTimer);

setText(text_1984[0]);

let total_characters_typed = 0;

test_area.total_errors = 0;
test_area.characters_typed = 0;
test_area.total_words = 0;
test_area.addEventListener("input", validateInput);

let resetToStart = () => {
    let result_display = document.getElementById("results-container");
    result_display.style.display = "none";

    test_area.value = "";
    test_area.removeAttribute("disabled");
    test_area.placeholder = "Start typing here to begin...";

    changeText();

    let progress_bar = document.getElementById("progress-bar");
    progress_bar.classList = "";

    test_area.addEventListener("input", startTimer);
    test_area.addEventListener("input", validateInput);

    total_characters_typed = 0;

    test_area.total_errors = 0;
    test_area.characters_typed = 0;
    test_area.total_words = 0;

    text_display.text_index = 0;
}

let retry = document.getElementById("retry");
retry.addEventListener("click", resetToStart);