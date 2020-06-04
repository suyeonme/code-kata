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