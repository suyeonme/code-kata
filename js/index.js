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


/*
* The number of K (June 5, 2020)
*
function solution(array, commands) {
    return commands.map(v => {
        return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
    });
}

const arr = [1, 5, 2, 6, 3, 7, 4]
solution(arr, [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);

// Return : [5, 6, 3]
*/


/*
* Repeated word (June 6, 2020)
*
const solution = n => {
    const word = 'ab';

    return console.log(word.repeat(n).slice(0,n));
};

solution(4);
*/


/*
*   Find the sum of all divisors of a given integer (June 7, 2020)
*
const solution = n => {
    let sum = 0;

    for(let i = 1; i <= n; i++) {
        if (n % i === 0) sum += i;
    }
    return sum;
};

solution(12);
*/


/*
*   Check the argument's length is 4 or 6 and it is only number.
* 
const solution = s => s.length !== 4 || s.length !== 6 && isNaN(parseInt(s)) ? false : true;

solution('a123');
solution('1234');
solution('12345');
*/


/*
*   Small report (June 8, 2020)
*
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
};

class Park extends Element{
    constructor(name, buildYear, treeNum, area) {
        super(name, buildYear);
        this.treeNum = treeNum;
        this.area = area
    }

    treeDensity() {
        const treeDensity =  this.treeNum / this.area;
        console.log(`${this.name} has a tree density of ${treeDensity} tress per square km`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classify () {
        const classify = new Map();
        classify.set(0, 'tiny');
        classify.set(1, 'small');
        classify.set(2, 'normal')
        classify.set(3, 'big');
        classify.set(4, 'huge');
        console.log(`${this.name}, build ${this.buildYear}, is a ${classify.get(this.size)} street`);
    }
};

const allParks = [
    new Park('Green Park', 1990, 300, 200),
    new Park('National Park', 2005, 2000, 500),
    new Park('Oak Park', 1500, 500, 100)
];

const allStreets = [
    new Street('Ocean Avenue', 1990, 500, 0),
    new Street('Evergreen Street', 2005, 1000, 4),
    new Street('Sunset Street', 1500, 100, 1),
    new Street('Sunset Street', 1500, 100)
];

function calc(arr) {
    const sum = arr.reduce((prev, cur) => prev + cur, 0);
    return [sum, sum / arr.length];
};

function reportPark(p) {
    console.log('------------ Park Report -------------');

    // Tree density
    allParks.forEach(el => el.treeDensity());

    // Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average age of ${avgAge} years.`);

    // Which parks has more than 1000 trees
    const i = p.map(el => el.treeNum).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
};


function reportStreet(s) {
    console.log('------------ Street Report -------------');
    
    // Total and average length of the town's street
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average length of${avgLength} km.`);

    // Classify size
    s.forEach(el => el.classify());
};

reportPark(allParks);
reportStreet(allStreets);
*/


/*
* Count of 'p' and 'y' of String (June 9, 2020)
*
const solution = s => s.match(/p/ig).length == s.match(/y/ig).length;
console.log(solution("pPoooyY"));

const solution2 = s => s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length;
console.log(solution2("pPoooyY"));
*/


/*
* Divided array (June 14, 2020)
*
const solution = (arr, divisor) => {
    let answer = [];
    arr.map(cur => {
        if (divisor > 0 && cur % divisor === 0) answer.push(cur);
    });
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
};

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3,2,6], 10));
*/
