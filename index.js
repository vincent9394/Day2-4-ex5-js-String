// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.

var nam3 = 'hello';

// TODO write your code here...

console.log(nam3.toUpperCase);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...

console.log(sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()));
// /                                /g    (opening and closing)
//  (^\w{1})                              (Matches any word character)
//              |                         (OR)
//                      (\s+\w{1})        (Matches any whitespace character + Matches any word character)
//

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substring(3,));