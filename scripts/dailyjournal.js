import { Entries } from "./entries.js"
import { JournalForm } from "./JournalForm.js"

export const DailyJournal = () => {
    return `
        <div class="entryList">
            ${ Entries() }
        </div>

        <article class="entryForm">
            ${JournalForm()}
        </article>
    `
}