// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Assignment#13>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Chapter 20....to...30>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// ''''''''''''''''''''Task#01''''''''''''''''

var name = prompt("Enter your name") 
var capName = name.toUpperCase();
alert("Your name is"+" : "+capName);

// ''''''''''''''''''''Task#02''''''''''''''''


var sentance = prompt("write a sentance");
var capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
var capitalizewords = (str) => str.split(' ').map(capitalizeString).join(' ');
document.write(capitalizewords(sentance));




// ''''''''''''''''''''OR Task#02''''''''''''''''


function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 document.write(sentence.join(" "));
 return sentence;
 }
 titleCase("hell how are you");


var sentance = prompt("write a sentance");

var firstchar = sentance.slice(0,1);
firstchar = sentance.toUpperCase();

var otherchar = sentance.slice(1);
otherchar = sentance.toLowerCase();

var sentanc = firstchar + otherchar;
console.log(sentanc);


// ''''''''''''''''''''Task#03''''''''''''''''


var txt = prompt("write some text")
var len = txt.length;
document.write(len)

// ''''''''''''''''''''Task#04''''''''''''''''


var str = prompt("enter")
var lastchar = str.charAt(str.length-1);
var capChar = lastchar.toUpperCase();
document.write(capChar);


// ''''''''''''''''''''Task#05''''''''''''''''


var text = "pakistan.";
var findChar = text.indexOf("n");
document.write( "This charecter is at position:" + " " + findChar)


// ''''''''''''''''''''Task#06''''''''''''''''


var txt = prompt("enter username")
var find = txt.indexOf("!");
 if (find !== -1 ||"@"||".") {
    alert("Enter a valid user name!")
 }

// ''''''''''''''''''''Task#07''''''''''''''''


var temp = "The quick brown fox jumps over the lazy dog";
temp = temp.toLowerCase()
var count = (temp.match(/the/g) || []).length;
document.write(count);



// ''''''''''''''''''''Task#08''''''''''''''''


var name = "pakistan";
var findnamechar = name.slice(3,4);
document.write(findnamechar)



// ''''''''''''''''''''Task#09''''''''''''''''


var cityName = "Hyderabad";
var repCityName = cityName.replace("Hyder","Islam");
document.write(repCityName);


// ''''''''''''''''''''Task#10''''''''''''''''

var text = "Ali and Sami are best friends. They play cricket and football together.";
var newText = text.replace(/and/g, "&");
document.write(newText);


// ''''''''''''''''''''Task#11''''''''''''''''


var number = prompt("enter your value")
document.write(number);



var number = prompt("enter your value")
var roundNumber = Math.round(number)
document.write(roundNumber);




var number = prompt("enter your value")
var ceilNumber = Math.ceil(number)
document.write(ceilNumber);



var number = prompt("enter your value")
var floorNumber = Math.floor(number)
document.write(floorNumber);




// ''''''''''''''''''''Task#12''''''''''''''''


var number = prompt("enter negative floating value")
document.write(number);



var number = prompt("enter negative floating value")
var roundNumber = Math.round(number)
document.write(roundNumber);




var number = prompt("enter negative floating value")
var ceilNumber = Math.ceil(number)
document.write(ceilNumber);



var number = prompt("enter negative floating value")
var floorNumber = Math.floor(number)
document.write(floorNumber);




// ''''''''''''''''''''Task#13''''''''''''''''


var diceRoll = Math.floor( Math.random() * 6 ) +1;
alert('You rolled a ' + diceRoll);



// ''''''''''''''''''''Task#14''''''''''''''''



var head = 1;
var tail = 2;

var toss = Math.random() * 2;
var floor = Math.floor(toss)
if(floor === 0){
    document.write("0 <br> Random Coin Value: Head")
} else if(floor === 1)
{
    document.write("1 <br> Random Coin Value: Tails")
 }


// ''''''''''''''''''''Task#15''''''''''''''''


var num = Math.ceil(Math.random() * 10);
document.write(num);
 var gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
   document.write('Matched');
  else
   document.write('Not matched, the number was '+gnum);


// ''''''''''''''''''''Task#16''''''''''''''''


var weight = prompt("Enter your weight.");
var myWeight = parseFloat(weight);
document.write("your weight is:" + " " + myWeight + "Kg")


// ''''''''''''''''''''Task#17''''''''''''''''


var integerString = "24"
var num = Number(integerString);
var numtype = typeof(num)
document.write(num + "<br>" + "its type is :" + " " + numtype);



// ''''''''''''''''''''Task#18''''''''''''''''


var num = 35.36;
var numtype = num.toString().replace(".", ""); 
var checkType = typeof(numtype);
document.write(numtype +  "<br>" + "its type is :" + " " + checkType);

// ''''''''''''''''''''Task#19''''''''''''''''

var percentage = (30 / (45 * 100));
var prcentTotal = percentage.toFixed(2);
document.write(prcentTotal)
