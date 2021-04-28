import { DailyJournal } from "./dailyjournal.js"
import { getJournalEntries } from "./database.js"
import { JournalForm } from "./JournalForm.js";

const container = document.querySelector(".entries")
const formContainer = document.getElementById("entryForm")

const render = () => {
    getJournalEntries()
    container.innerHTML = DailyJournal()
    formContainer.innerHTML = JournalForm()
}
render()