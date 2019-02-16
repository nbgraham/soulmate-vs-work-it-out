function getSoulmateQuestions() {
    const questionsText = [
        'Success in a romantic relationship is based mostly on whether the people are "right" for each other.',
        'There is a person out there who is perfect (or close to perfect) for me.',
        'In marriages, many people discover (vs. build) a deep intimate connection to their spouse.', 
        'It is extremely important that my spouse and I be passionately in love with each other after we are married.',
        'I couldn\'t marry someone unless I was passionately in love with him or her.',
        'There is no such thing as "Mr. Right" or "Ms. Right".',
        'I expect my future husband or wife to be the most amazing person I have ever met.',
        'People who are searching for a perfect match are wasting their time.',
        'The reason most marriages fail is that people aren’t right for each other.',
        'Bonds between people are usually there before you meet them.',
    ];

    const questions = getQuestions(questionsText, [5, 7]);
    return questions;
}

function getWorkItOutQuestions() {
    const questionsText = [
        'Success in a romantic relationship is based mostly on how much people try to make the relationship work.',
        'In marriage, effort is more important than compatibility.',
        'In a relationship, love grows (vs. love is found).',
        'If people would just put in the effort, most marriages would work.',
        'I could be happily married to most people, if they were reasonable.',
        'The reason most marriages fail is that people don’t put in the effort.',
        'How well you know someone depends on how long you have known him or her.',
        'If I were to marry a random person, I would be satisfied.',
        'Only over time can you really learn about your partner.',
    ];

    const questions = getQuestions(questionsText, []);
    return questions;
}