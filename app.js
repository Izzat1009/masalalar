//1
function position(letter){
    return 'Position of alphabet:  %{letter.charCodeAt(1) - 96}';
  }
//2
  function solution(a, b){
    return a.length < b.length ? a + b  + a : b + a + b;
  }
  //3
  function problem(x) {
    if (typeof x === 'string') {
      return 'Xato';
    }
    return (x * 50) + 6;
  }
  //4
  function divisibleBy(numbers, divisor) {
    return numbers.filter(num => num % divisor === 0);
  }
  //5
  function dutyFree(normPrice, discount, hol) {
    let savingsPerBottle = normPrice * (discount / 100);
    return Math.floor(hol / savingsPerBottle);
  }
  //6
  function addFive(num) {
    var total = num + 5
    return total;
  }
  //7
  function stringy(size) {
    return Array.from({ length: size }, (_, i) => i % 2 === 0 ? '1' : '0').join('');
  }
  //8
  function pipeFix(numbers) {
    let start = numbers[0];
    let end = numbers[numbers.length - 1];
    let result = [];
  
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
  
    return result;
  }
  //9
  function nameShuffler(str) {
    let names = str.split(' ');
    return names[1] + ' ' + names[0];
  }
  //10
  function plural(n) {
    return n !== 1;
  }