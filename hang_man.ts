const word : string[] = ["word" ,"chicken", "truck", "pillow","duck", "luck", "jamal", "hello", "game", "homework", "house", "barn", "farm", "darn"]
let hint_display   = document.getElementById("hint")
let hang_man_img = document.getElementById("hm_img")
let try_button = document.getElementById("try")
let input = document.getElementById("input")
let used_letter_display = document.getElementById("used_letter")
let end_game_msg = document.getElementById("eg_msg")
let hint : string
let used_letter : string[] = []
let trys = 0
let run = true

const BLANKWORDCH = "-"
const LOOSEMSG = "YOU LOOSE"
const WINMSG = "YOU WIN"

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function create_blank_word(word : string) : string {
    let return_word : string = ""
    for (let i = 0; i < word.length; i++) {
        return_word += BLANKWORDCH
    }
    return return_word
}

let current_word : string

function set_up(){
    current_word = word[Math.floor(Math.random() * word.length)]
    hint = create_blank_word(current_word)
    hint_display!.innerHTML = hint
}

set_up()

function Try(){
    if (run) {
        let found = false
        let input_characters = input?.value
        input!.value = ""
        used_letter.push(input_characters + " ")
        for(let i = 0; i < current_word.length; i++) {
            let current_word_characters = current_word[i]
            if (input_characters === current_word_characters){
                console.log("Found")
                hint = hint.replaceAt(i, current_word_characters)
                hint_display!.innerHTML = hint
                found = true
                if (!(hint.includes(BLANKWORDCH))){
                    end_game_msg!.innerHTML = WINMSG
                    run = false
                }
            }
        }
        if (!found) {
            if (trys > 10){
                hang_man_img!.src = "hm_end.png"
                run = false
                end_game_msg!.innerHTML = LOOSEMSG
            }else{
                trys += 1
                hang_man_img!.src = "hm_" + trys + ".png"
            }
            
        }

        used_letter_display!.innerHTML += input_characters
    }

}
