/*  
* Find Kim
*/
const solution = (city) => {
    const index = city.indexOf('Kim')
    return console.log(`김서방은 ${index}에 있다`);    
};

const seoul = ['Lee', 'James', 'Kim', 'Kang'];
solution(seoul);


/*  
* Average number
*/
const solution = arr => {
    return arr.reduce((total, cur) => total + cur) / arr.length;
};

const arr = [1, 2, 3, 4];
console.log('Average: ' + solution(arr));

