import { DailyJournal } from "./dailyjournal.js"

const container = document.querySelector(".entries")

const HTML = `
    <h2>Entries</h2>
    ${DailyJournal()}
`

container.innerHTML = HTML