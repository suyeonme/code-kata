/*
* Find Kim (June 3, 2020)
*
const solution = (city) => {
    const index = city.indexOf('Kim')
    return console.log(`김서방은 ${index}에 있다`);    
};

const seoul = ['Lee', 'James', 'Kim', 'Kang'];
solution(seoul);
*/



/*
* Average number (June 3, 2020)
*
const solution = arr => {
    return arr.reduce((total, cur) => total + cur) / arr.length;
};

const arr = [1, 2, 3, 4];
console.log('Average: ' + solution(arr));
*/



/*
* Find a person who doesn't complete a maraton (June 4, 2020)
*
const solution = (participant, completion) => {
    participant.sort();
    completion.sort();

    for (let i in participant) {
        if (completion[i] !== participant[i]) return participant[i];
    };
};

solution(participant, completion);

const participant = ['Suyeon', 'Hanna', 'Sarang', 'James'];
const completion = ['Hanna', 'Sarang', 'James'];
*/



/* 
* Names of the day of the week (June 4, 2020)
*
const getDayName = (month, day) => {
    return new Date(2020, month - 1, day).toString().slice(0,3).toUpperCase();
};

getDayName(6, 4);
*/



/* 
* Small Question game - My solution (June 5, 2020)
*
const aboutMe = () => {
    function Question(que, ans, correct) {
        this.que = que;
        this.ans = ans,
            this.correct = correct
    };

    const question1 = new Question('Does suyeon have a boyfriend?', ['0: Yes', ' 1: No'], 0);
    const question2 = new Question('Are you studying js?', ['0: Yes', ' 1: No'], 0);
    const question3 = new Question('Do you like pasta?', ['0: Yes', ' 1: No'], 1);
    const questions = [question1, question2, question3];


    function singleQuestion(arr) {
        const randomNum = Math.floor(Math.random() * arr.length);
        const question = arr[randomNum];
        return question;
    };

    function checkAnswer(ans) {
        let score = 0;

        if (ans == parseInt(question.correct)) {
            console.log('Correct');
            console.log('-------------');
            score = score + 1;
            console.log(`Your score: ${score}`);
            return aboutMe();
        } else if (ans === 'quit') {
            return '';
        } else {
            console.log('Wrong');
            console.log('-------------');
            return aboutMe();
        }
    };

    const question = singleQuestion(questions);
    console.log(question.que);
    console.log(question.ans.toString());
    const answer = prompt('Select correct answer ;P');
    checkAnswer(answer);
};

aboutMe();
 */



/*
* Small Question game - Another solution (June 5, 2020)
*
(function() {
    function Question(que, ans, correct) {
        this.que = que;
        this.ans = ans,
        this.correct = correct
    };
    
    Question.prototype.displayQue = function() {
        console.log(this.que);
    
        for (let i = 0; i < this.ans.length; i++) {
            console.log(`${i}: ${this.ans[i]}`);
        }; 
    };
    
    Question.prototype.checkAnswer = function(ans, callback) {
        let sc;

        if (ans === this.correct) {
            console.log('Correct');
            sc =  callback(true); 
        } else {
            console.log('Wrong');
            sc =  callback(false); 
        }
        this.displayScore(sc);
    };

    Question.prototype.displayScore = function(score) {
        console.log(`Your score: ${score}`);
        console.log('--------------------');
    }; 
    
    const question1 = new Question('Does suyeon have a boyfriend?', ['Yes', 'No'], 0);
    const question2 = new Question('Are you studying js?', ['Yes', 'No'], 0);
    const question3 = new Question('Do you like pasta?', ['Yes', 'No'], 1);
    const questions = [question1, question2, question3];

    function score() {
        let sc = 0;

        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    };

    const keepScore = score();

    function nextQuestion () {
        const randomNum = Math.floor(Math.random() * questions.length);
        const singleQuestion = questions[randomNum];

        singleQuestion.displayQue();
        const answer = prompt('Select correct answer.');

        if(answer !== 'quit') { 
            singleQuestion.checkAnswer(parseInt(answer), keepScore );
            nextQuestion(); 
        };
    };

    nextQuestion();
})();
*/