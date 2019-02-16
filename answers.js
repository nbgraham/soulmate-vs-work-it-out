const answerTexts = [
    'Strongly Disagree',
    'Somewhat Disagree',
    'Slightly Disagree',
    'Neutral',
    'Slightly Agree',
    'Somewhat Agree',
    'Strongly Agree',
];
const highScore = answerTexts.length;

const upAnswers = () => withIds(makeAnswers(answerTexts, true));
const downAnswers = () => withIds(makeAnswers(answerTexts, false));