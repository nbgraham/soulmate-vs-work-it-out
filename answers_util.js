function makeAnswers(optionsText, up) {
    return optionsText.map((optionText, index) => ({
        display: optionText,
        value: up ? index + 1 : optionsText.length - index,
    }));
}