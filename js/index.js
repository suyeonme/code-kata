/* Dec 11, 2020
금지된 단어를 제외한 배열 반환하기
*/

const arr = ['banana', 'monkey banana', 'apple', 'kiwi', 'orange'];
const prohibited = ['kiwi', 'apple'];

const checker = el => !prohibited.some(p => p === el);

arr.filter(checker);
