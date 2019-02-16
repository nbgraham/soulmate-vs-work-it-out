Vue.component('radio-question', {
    props: ['question'],
    template: `
        <li>
            <div style="font-family: sans-serif; font-style: italic;">
                {{question.displayText}}
            </div>
            <div>
                <div v-for="answer in question.answers">
                    <input type="radio" :id="answer.id" :name="question.id" :value="answer.value" v-model="question.chosenAnswer">
                    <label :for="answer.id">
                        {{answer.display}}
                    </label>
                </div>
            </div>
            <hr/>
        </li>
    `
});