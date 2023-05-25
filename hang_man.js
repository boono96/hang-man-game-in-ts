var word = ["word", "chicken", "truck", "pillow", "duck", "luck", "jamal", "hello", "game", "homework", "house", "barn", "farm", "darn"];
var hint_display = document.getElementById("hint");
var hang_man_img = document.getElementById("hm_img");
var try_button = document.getElementById("try");
var input = document.getElementById("input");
var used_letter_display = document.getElementById("used_letter");
var end_game_msg = document.getElementById("eg_msg");
var hint;
var used_letter = [];
var trys = 0;
var run = true;
var BLANKWORDCH = "-";
var LOOSEMSG = "YOU LOOSE";
var WINMSG = "YOU WIN";
String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
};
function create_blank_word(word) {
    var return_word = "";
    for (var i = 0; i < word.length; i++) {
        return_word += BLANKWORDCH;
    }
    return return_word;
}
var current_word;
function set_up() {
    current_word = word[Math.floor(Math.random() * word.length)];
    hint = create_blank_word(current_word);
    hint_display.innerHTML = hint;
}
set_up();
function Try() {
    if (run) {
        var found = false;
        var input_characters = input === null || input === void 0 ? void 0 : input.value;
        input.value = "";
        used_letter.push(input_characters + " ");
        for (var i = 0; i < current_word.length; i++) {
            var current_word_characters = current_word[i];
            if (input_characters === current_word_characters) {
                console.log("Found");
                hint = hint.replaceAt(i, current_word_characters);
                hint_display.innerHTML = hint;
                found = true;
                if (!(hint.includes(BLANKWORDCH))) {
                    end_game_msg.innerHTML = WINMSG;
                    run = false;
                }
            }
        }
        if (!found) {
            if (trys > 10) {
                hang_man_img.src = "hm_end.png";
                run = false;
                end_game_msg.innerHTML = LOOSEMSG;
            }
            else {
                trys += 1;
                hang_man_img.src = "hm_" + trys + ".png";
            }
        }
        used_letter_display.innerHTML += input_characters;
    }
}
