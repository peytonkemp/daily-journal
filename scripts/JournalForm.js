export const JournalForm = () => {
    const formHTML = `
    <form class="containerLeft__entryForm" id="entryForm" action="">
            <fieldset class="fieldSet">
                <label for="journalDate">Date of Entry</label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>
            <fieldset class="fieldSet">
                <label for="journalConcepts">Concepts covered</label>
                <input type="text" name="journalConcepts" id="journalConcepts">
            </fieldset>
            <fieldset class="fieldSet">
                <label for="journalEntry">Journal entry</label>
                <textarea rows=10 cols= 70 name="journalEntry" id="journalEntry"></textarea>
            </fieldset>
            <fieldset class="fieldSet">
                <label for="journalMood">Current mood</label>
                <select name="journalMood" id="journalMood">
                    <option value="amazing">Amazing</option>
                    <option value="good">Good</option>
                    <option value="bad">Bad</option>
                    <option value="terrible">Absolutely terrible</option>
                </select>
            </fieldset>
            <button onclick="myFunction()">Submit</button>

        </form>
    `
    return formHTML
}