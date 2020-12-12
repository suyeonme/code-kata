/* Dec 12, 2020
strs은 단어가 담긴 배열입니다.
공통된 시작 단어(prefix)를 반환해주세요.

strs = ['start', 'stair', 'step']
return은 'st'

strs = ['start', 'wework', 'today']
return은 ''
*/

const arr = ['start', 'stair', 'step'];

const findPrefix = () => {
  let prefix = '';
  const test = arr[0];

  for (let i = 0; i < test.length; i++) {
    if (!arr.every(el => test[i] === el[i])) break;
    prefix += test[i];
  }
  return prefix;
};

findPrefix(arr);
