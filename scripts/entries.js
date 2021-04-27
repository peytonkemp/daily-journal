/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js"

export const Entries = () => {
    const entries = getJournalEntries()
    let allEntriesAsHTML = "<div>"


    for (const entry of entries) {
        allEntriesAsHTML += `
           <p>${entry.entry}</p>
        `
    }

    allEntriesAsHTML += "</div>"

    return allEntriesAsHTML
}