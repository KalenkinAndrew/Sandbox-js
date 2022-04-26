

function say_hi(username){
    
    //if(!username){
    //    username = 'Guest';
    //}
    username = username ? username : 'Guest'; 

    console.log(`Hi, ${username}`);
}

say_hi('');
say_hi('Ivan');

function power(value, pow = 1){
    
    if(!(typeof value === 'number' && typeof pow === 'number')){
        throw new error('Необходимо передать числа для подсчета степени');   
    }
    
    const result = Math.pow(value, pow)
    //pow = pow || 1;
    console.log(`Debug`, value, pow, `result`, result);
    return result;
}

//try {
//    power();
//    console.log(`Success case`);
//} catch(myErr){
//   console.log(`Error case`, myErr);
//} finally {
//    console.log('Finally case');
//}

power(5, 2);

let consoleRepeat = (str, count) => {
    
    let cnt = 1;
    while(count > 0){
        console.log(Date.now(), cnt, str);
        count--;
        cnt++;
    }
}

consoleRepeat('Some string', 5);

const isLetterVowel = letter => {
    const vowelLetters = 'аеёиоуыэюяaeiouy'; 
    
    //console.dir(String);
    //console.log(vowelLetters.includes('ь'))
    
    return vowelLetters.includes(letter.toLowerCase());
}

console.log(isLetterVowel('й'));
console.log(isLetterVowel('a'));

const isPolindrom = str => {

    //str = 'string';
    let strReverse = str.strReverse;
    console.log(strReverse);
    return strReverse === str;
}

console.log(isPolindrom('доход'));
console.log(isPolindrom('дом'));