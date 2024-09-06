let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let random1 = fighters[Math.floor(Math.random() * fighters.length)]
    let random2 = fighters[Math.floor(Math.random() * fighters.length)]
    // console.log(random1, random2)
    if ( random1 === random2) {
        let error = "Matched the same charector... You cannot match yourself..."
        stageEl.textContent = error
        return
    }
    let stringRepre = `${random1} vs ${random2}`
    stageEl.textContent = stringRepre
})
