function convertBase() {
    // Get input values
    var number = document.getElementById("numberInput").value;
    var fromBase = parseInt(document.getElementById("fromBaseInput").value);
    var toBase = parseInt(document.getElementById("toBaseInput").value);
    var enableDigitGrouping = document.getElementById("digitGroupingCheckbox").checked;

    // Check for valid inputs
    if (isNaN(fromBase) || isNaN(toBase) || fromBase < 2 || toBase < 2 || fromBase > 36 || toBase > 36) {
        document.getElementById("baseConverterResult").innerText = "Wrong input";
        return;
    }

    // Convert the number to base 10
    const base10Number = parseInt(number, fromBase);

    // Check for valid conversion
    if (isNaN(base10Number)) {
        document.getElementById("baseConverterResult").innerText = "Wrong input";
        return;
    }

    // Convert the base 10 number to the desired base
    let result = base10Number.toString(toBase);

    // Apply digit grouping if enabled
    if (enableDigitGrouping) {
        result = addDigitGrouping(result);
    }

    // Display the result
    document.getElementById("baseConverterResult").innerText = result;

    // Reset the form
    document.getElementById("baseConverterValueForm").reset();
}

// Function to add digit grouping (every three digits) to the result
function addDigitGrouping(result) {
    return result.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}



function sortSentences() {
    // Get input value
    const sentenceInput = document.getElementById("sentenceInput").value;

    // Split sentences by line breaks
    const sentencesArray = sentenceInput.split('\n').map(sentence => sentence.trim());

    // Remove empty strings
    const filteredSentencesArray = sentencesArray.filter(sentence => sentence !== '');

    // Process each sentence and sort words alphabetically
    const sortedSentences = filteredSentencesArray.map(sentence => {
        const wordsArray = sentence.split(/\s+/); // Split words by spaces
        const wordsWithoutDots = wordsArray.map(word => word.replace(/\./g, '')); // Remove dots
        const wordsWithoutCommas = wordsWithoutDots.map(word => word.replace(/,/g, ''));
        const sortedWords = wordsWithoutCommas.map(word => word.toLowerCase()).sort(); // Convert to lowercase before sorting
        return sortedWords.join(', ');
    });

    // Display the sorted words for each sentence
    document.getElementById("sortedSentences").innerHTML = sortedSentences.join('<br>');
}