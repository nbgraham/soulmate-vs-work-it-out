function makeQuestion(questionText, answers) {
    return  {
        displayText: questionText,
        answers,
        chosenAnswer: undefined,
    };
}

function getQuestionsScore(questions) {
    const questionSum = questions.reduce((sum, question) => sum + question.chosenAnswer, 0);
    return questionSum / questions.length;
}

function allQuestionsAnswered(questions) {
    return questions.every(question => question.chosenAnswer !== undefined);
}

function getScoreText(questions) {
    if (allQuestionsAnswered(questions)) {
        const score = getQuestionsScore(questions);
        const cleanScore = Math.round(score, 2);
        return `Your score is ${cleanScore} out of ${highScore}`;
    } else {
        return 'Answer all questions to see your score';
    }
}

function getScorePercentage(questions) {
    if (allQuestionsAnswered(questions)) {
        const score = getQuestionsScore(questions);
        const percentage = 100.0 * score / highScore;
        return Math.round(percentage, 0);
    } else {
        return undefined;
    }
}

function getQuestions(questionsText, downIndexes) {
    const questions = questionsText.map((text, index) => 
        makeQuestion(text, downIndexes.includes(index) ? downAnswers() : upAnswers())
    );
    return withIds(questions);
}