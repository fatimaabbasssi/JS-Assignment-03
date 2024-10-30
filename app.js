
document.write(" <h2> JS-ASSIGNMENT-03 </h2>")


// // --------------CHAPTER----21 TO ----- 25


//--==================================----QUESTION--=======================--01.

// var fisrtname = prompt("Enter your fisrt name");
// var lastname = prompt("Enter your last name");
// fullname = fisrtname + " " + lastname

// alert("Hello: " + fullname);


//---=================================---QUESTION---=================-02.

// var favmob = prompt("Enter your favorite mobile phone model")
// document.write("<b> My favorite phone is :  </b>" + " <b>" + favmob + "</b>" + "<br>length of string : </b>" + favmob.length)


//--====================================----QUESTION---==========================-03.

// var pak = "pakistani"
// document.write("<b>String : </b>" + "<b>" + pak + "</b>" + "</br>")
// document.write("<b> Index of 'n' </b>" + pak.indexOf("n"))


//--=============================----QUESTION---==================================-04.

// var last  = "Hello world"
// document.write("<b>String : </b>" + "<b>" + last + "</b>" + "</br>")
// document.write("<b>Last index of 'l' </b>" + last.lastIndexOf("l"))


//----===============================--QUESTION--===============================--05.

// var paki = "pakistani"
// document.write("<b>String : </b>" + "<b>" + paki + "</b>" + "</br>")
// document.write("<b>Character at index 3:  </b>" + paki.charAt(3))

//--================================----QUESTION--=================================--06.


// var fisrtname = prompt("Enter your fisrt name");
// var lastname = prompt("Enter your last name");
// fullname = fisrtname +  lastname
// alert("Hello: " + fullname);

//-==========================================-----QUESTION================================---07.

// var city = "Hyderababd"
// document.write("city : " + city + "</br>")
// document.write("After replacement : " + city.replace("Hyder" , "Islam")+ "</br>");


//---=============================---QUESTION--==============================================--08.

// var para = "Ali and Sami are best friends. They play cicket and football together"
// document.write("MESSAGE : " + para+ "</br>");
// // document.write("After replacement : " + para.replace("and" , "&") + "</br>");//only one
// document.write("After replacement : " + para.replace(/and/gi , "&") + "</br>");//globaly


//----=====================================--QUESTION---========================================-09.

// var str = "472"
// document.write("<b> Value : </b>" + str  + "</br>");
// document.write("<b> Type :  </b>" + typeof str + "</br>"  + "</br>");  
// str = Number(str);
// document.write("<b> Value : </b>" + str  + "</br>");
// document.write("<b> Value : </b>" + typeof str  + "</br>");


//---=========================================---QUESTION--===============================--10.

// var cap = prompt("Enter any letter")
// document.write("<b>User input :  </b>" +   "<b>" + cap + "</b>" + "</br>")
// document.write("<b>Upper case :  </b>" + "<b>" + cap.toUpperCase() + "</b>")

//--===============================----QUESTION--=======================================--11.

// var jav = prompt("Enter any letter")
// document.write("<b>User input :  </b>" +   "<b>" + jav + "</b>" + "</br>")
// document.write("<b>Upper case :  </b>" + "<b>" + jav.slice(0 , 1).toUpperCase() + jav.slice(1) + "</b>");

//---====================================---QUESTION--====================================--12.

// var num = 35.36
// document.write("<b>Number :  </b>" +   "<b>" + num + "</b>" + "</br>");
// var num2 = num.toString().replace('.','');
// document.write("<b>Number :  </b>" +   "<b>" + num2+"</b>" + "</br>");


//-======================================-----QUESTION--==============================--13.

// var username = prompt("Enter your username");
// var invalid = "@ ! . ,"


//missing sorrrryy ma'am






//--==========================================----QUESTION--==========================--14.

// var cookie = ["cake" , "apple pie" , "cookie"  , "chips" , "patties"]
// var cook = prompt("Enter snack Name");
// var cookief = false; // Flag

// for (var i = 0; i <= cookie.length - 1; i++) {
//   if (cook === cookie[i]) {
//    cookief = true;
//     document.write(cook + " is avaliable on " + i + " index in our bakery")
//     break;
//   }

// }
// if(!cookief){
//     document.write(" we are sorry. " + cook + " is " + "<b>not avaliable  </b>" + "in our bakery")
  
// }

//----============================--QUESTION--==========================--15.



//missing sorrrryy ma'am



//----===============================-QUESTION-=====================---16.

// var university = "University of Karachi "
//  for(var i = 0 ; i <= university.length-1; i++){
// document.write("<b>" + university[i]  + "</b>" + "</br>");
//  }


//--====================================QUESTION----------------------------17."<b>" +   + "</b>"

// var input1 = prompt("Enter any word");
// document.write("<b> User input : </b>" +  input1 + "</br>");
// var input2 = input1.charAt(input1.length-1 , 1)
// document.write("<b>last character of the user input : </b>" +  input2 + "</br>");

//---===============================---QUESTION-=================================---18.var array = lazy.split(" ")

// var lazy = "the quik brown fox jumps over the lazy dog"
// var word = "the"
// var count = 0
// for(var i = 0 ; i <= lazy.length-1 ; i++){
//     if (lazy.slice(i , i+3) ===  word ){
//           count++
//     }
   
// }
// console.log("Text : " + lazy )
// console.log("There are " + count + " accurence(s) of word " + word);

//================================END OF CHAPTER  21 TO 25==================================




//================================CHAPTER 26 T0 30==================================


//---===============================---QUESTION-=================================01.


// var user = prompt("enter positive number")
// // //////-----=====---->(A)
// // document.write( " <b> Number : </b>" +Math.random()*10 + "</br>");///

// document.write( " <b> Number : </b>" + user + "</br>");///
// //////-----=====---->(B)
// document.write( " <b> Round off value :  </b>" + Math.round(user) + "</br>");

// //////-----=====---->(C)
// document.write( " <b> Floor off value :  </b>" + Math.floor(user) + "</br>");

// //////-----=====--->(C)
// document.write( " <b> Ceil off value :  </b>" + Math.ceil(user) + "</br>");




//---===============================---QUESTION-=================================02. 

// var user = prompt("enter nagetive number")
// (A)
// // document.write( " <b> Number : </b>" +Math.random()*10 + "</br>");///

// document.write( " <b> Number : </b>" + user + "</br>");///
// (B)
// document.write( " <b> Round off value :  </b>" + Math.round(user) + "</br>");

// (C)
// document.write( " <b> Floor off value :  </b>" + Math.floor(user) + "</br>");

// (C)
// document.write( " <b> Ceil off value :  </b>" + Math.ceil(user) + "</br>");


//---===============================---QUESTION-=================================03. 


// var num1 = Math.round((-4));
// document.write("The absolute value of :   " + num1 + " is "  );
// var meh = Math.ceil((4.0));
// document.write(meh + "</br>");

// //second method

// var num2 = Math.ceil((4.4 ));
// document.write("The absolute  value of :   " + num2 + " is "  );
// var meh2 = Math.ceil((4.9));
// document.write(meh2 + "</br>");


//---===============================---QUESTION-=================================04. 

// var ran_N = Math.random()*10  ;
// var dice2 =  Math.floor(ran_N)+1
// document.write(" <b> The random dice value : </b>" + dice2 + "</br>")


//---===============================---QUESTION-=================================05. 

// var toss = Math.floor(Math.random()*10)
// if(toss === 0 ) {
// console.log(toss);
// console.log("heads");
// }
// else{
   
//     console.log(toss);
//     console.log("tails");
// }


//---===============================---QUESTION-=================================06. 

// var random = Math.floor(Math.random()*100)+1
// document.write( "Random number between one to hunderd :  "  + random)

//---===============================---QUESTION-=================================07.

// var weight = parseFloat(prompt("Enter your weight"))
//  document.write("The weight of yours is : " +  weight + " kgs");
//  console.log("The weight of yours is : " +  weight + " kilograms");
   
//---===============================---QUESTION-=================================08.

// var cnum = Math.floor(Math.random() * 10) + 1;
// var unum = +prompt("Guess the number between 1 to 10");

// if(unum === cnum){
//     document.write("congratulation correct num : " + cnum )
//     document.write("")
// }

// else{
//     document.write("try again the correct number is : " + cnum)
// }
//================================END OF CHAPTER  26 TO 30==================================




//================================CHAPTER 31 T0 34==================================

//---===============================---QUESTION-=================================01.

// var date = new Date();
// document.write(date)

//---===============================---QUESTION-=================================02.
// var date = new Date();
// var month = date.getMonth()+1 
// document.write("Current month : " + month)

//---===============================---QUESTION-=================================03.

// var days_Names = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thusday", "Friday", "Satrday"];
// var date = new Date();
// var today = date.getDay(); //3
// var arry = days_Names[today];

// document.write( "Today is : " + arry.slice(0 ,3));


//---===============================---QUESTION-=================================04.

// var days_Names = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thusday", "Friday", "Satrday"];
// var date = new Date();
// var getday = date.getDay(); //3
// var day = days_Names[getday];

// if(day === days_Names[0] || day === days_Names[6] ){
//     document.write("Its fun day!")
// }

// else{
//     document.write("Its "  + day)
// }


//---===============================---QUESTION-=================================05.

// var date = new Date()
// var totaldates = date.getDate();
// if(totaldates < 16){
//     document.write("First fifteen days of the month")
// }
// else{
//     document.write("Last days of the month")
// }


//---===============================---QUESTION-=================================06.

// var date = new Date()
// var miliseconds = date.getTime()
// var totalmili = date.getTime()
// var minutes = totalmili / (1000*60*60)
// document.write(" Currnet Date : " + date + "</br>")
// document.write( "Elasped miliseconds since january 1, 1970 : " +  miliseconds  + "</br>")
// document.write( "Elasped Minutes since january 1, 1970 : " + minutes  + "</br>")


//---===============================---QUESTION-=================================07.

// var date = new Date()
// var hours = date.getHours();

// if(hours < 12){
//    document.write("Its AM")
// }else{
//    document.write("Its PM")
// }

//---===============================---QUESTION-=================================08.

// var latedate = new Date (2020 , 11 , 31);
// document.write( " Later date : " + latedate);

//---===============================---QUESTION-=================================09.

// var date = new Date(2015, 5 , 18);
// var currentdate = new Date ();
// var minus = currentdate.getTime() - date.getTime()
// var total = Math.floor(minus / (1000* 60 *60 *24))
// document.write(total + " Day have passad since 1st Ramadan,")

//---===============================---QUESTION-=================================10.

// var date = new Date (2015,11,5)
// var seconds = date/(1000*60);
// document.write("On reference date : " + date  + "</br>")
// document.write(seconds + " seconds has passesd since beginning of 2015 "  + "</br>")


//---===============================---QUESTION-=================================11.

// var date = new Date ();
// var hours = date.getHours()
// document.write("Current hour : " + date  + "</br>" )
// date.setHours(hours - 1)
// document.write("1 hour ago it was :  " + date  + "</br>")

//---===============================---QUESTION-=================================12.

// var date = new Date ();
// document.write("Todays date  : " + date + "</br>")
// date.setFullYear(date.getFullYear()-100);
// document.write("Date 100 years back : " + date + "</br>")

//---===============================---QUESTION-=================================13.

// var age =  21
// var date = new Date()
// var year = date.getFullYear()-21
// document.write("your age is : " + age + "</br>");
// document.write("your birth year is : " + year + "</br>")

//---===============================---QUESTION-=================================14.

//var custname = "ABC Customer";
// var month = "February";
// var nou = 410;
// var charpU = 16;
// var totalc = nou * charpU;
// var late = 350;
// var  gross = totalc + late;

// document.write("Customer Name : " + custname + "</br>" + "</br>");
// document.write("Month : " + month + "</br>" + "</br>");
// document.write("Number of units : " + nou + "</br>" + "</br>");
// document.write("Charges Per unit : " + charpU + "</br>" + "</br>");
// document.write("Net Amount Payable (within due date) : " + totalc+ "</br>" + "</br>");
// document.write("Late payment surcharges  : " + late + "</br>" + "</br>");
// document.write("Gross Amount payable (after due date) : " + gross + "</br>" + "</br>");
//================================END OF CHAPTER  31 TO 34==================================


//================================ CHAPTER  35 TO 38==================================


//---===============================---QUESTION-=================================01.

// function date () {
// var curentdate = new Date();
// console.log(curentdate);
// }
// date();

//---===============================---QUESTION-=================================02.

// function five ( ){
// console.log ( " Hello " + fname + " " + lname);
// }
// var fname = prompt("Enter your fisrt name")
// var lname = prompt("Enter your last name")
// five();

//---===============================---QUESTION-=================================03.

// function sum(a,b){
//     return a+b;
// }
// var a = +prompt("Enter your fisrt name")
// var b = +prompt("Enter your last name")
// var user = sum(a,b)
// console.log("the sum of a and b is " + user);


//---===============================---QUESTION-=================================04.

// function calculate(userinput1, userinput2, opt) {
//     var userinput1 = +prompt("enter fisrt number")
// var userinput2 = +prompt("enter second number")
// var opt = prompt("enter operator number")

//     if (opt === "+") {
//         alert( userinput1 + userinput2);
//     } else if (opt === "-") {
//         alert( userinput1 - userinput2);
//     } else if (opt === "*") {
//         alert( userinput1 * userinput2);
//     } else if (opt === "/") {
//         alert( userinput1 / userinput2);
//     } else {
//         alert( "Invalid operator");
//     }
//  }
// calculate()

//---===============================---QUESTION-=================================05.

// function square (a) {
// return a*a
// }
// document.write(square(25))


//---===============================---QUESTION-=================================06.


// function factor (n) {

//     var result = 1;
//     for (var i = 1; i <= n; i++) {
    
//         result *= i;
//     }
//     return result;
//   }
  
//   document.write(factor (6))


//---===============================---QUESTION-=================================07.

// function num (){
// for(var i = start ; i <= end ; i++){
//     document.write(i + "</br>")
// }
// return num;
// }var start = +prompt("Enter strat number")
// var end = +prompt("Enter ending number")
// num();

//---===============================---QUESTION-=================================08.



//missing sorrrryy ma'am


//---===============================---QUESTION-=================================09.

// function square (width,height) {
//     return width*height;
// }
// var total = square(180,90)
// document.write(total)


//---===============================---QUESTION-=================================10.


//missing sorrrryy ma'am


//---===============================---QUESTION-=================================11.



// function string (str) {
//   document.write("EXAMPLE STRING : " + str.toUpperCase())
// return 

// } document.write("EXAMPLE STRING : the quik brown for " + "</br>")
//   var str = "the quik brown for " ;
// string( str.slice(0 ) )


//---===============================---QUESTION-=================================12.
// function sen (){
//     var full =  "Web Development Tutorial"
//     document.write( "example string"  + full + "</br>")
//     dev = full .slice(4 , 15)
//    document.write( "example output" + dev + "</br>") 
// }
// sen();


//---===============================---QUESTION-=================================13.


// function fun (str, letter) {
//     var count = 0;
    
//     for (var i = 0; i < str.length; i++) {
//       if (str.charAt(i) === letter) {
//         count++;
//       }
//     }return count;
//   }
//   var result = fun ("jsresources.co", 'o');
//  console.log(result);


//---===============================---QUESTION-=================================14.


//missing sorrrryy ma'am



//================================END OF CHAPTER  35 TO 38==========================





//================================ CHAPTER  38 TO 42==================================


//---===============================---QUESTION-=================================01.

// function sum (a, b) {
//     var result = 1;
//     for (var i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }
// console.log(sum(2, 5));


//---===============================---QUESTION-=================================02.


// function leap (year) {
//     if (year % 4 === 0) {
//         return true;
//     }
// }

// var year = 2020;
// if (leap (year)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }


//---===============================---QUESTION-=================================03.

// function triangles (a, b, c) {
 
//     var s = (a + b + c) / 2;
//     var area = (s * (s - a) * (s - b) * (s - c));
//     return parseFloat(area);

// }
// var a = 7;
// var b = 6;
// var c = 4;
// var area = triangles (a, b, c);
// console.log("area of the triangle: " + area);

//---===============================---QUESTION-=================================04.

// function totalm (marks1, marks2, marks3) {
//     var ave = cal (marks1, marks2, marks3);
//     var per = calper (marks1, marks2, marks3);
//     console.log("average marks: " + ave);
//     console.log("percentage: " + per + " % ");
// }

// function cal (marks1, marks2, marks3) {
//     return (marks1 + marks2 + marks3) / 3;
// }

// function calper (marks1, marks2, marks3) {
//     var totom = 300; 
//     var obt = marks1 + marks2 + marks3;
//     return (obt / totom) * 100;
// }
// totalm (67, 66, 69);

//---===============================---QUESTION-=================================05.

// function index (str, char) {

//     for (var i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i;
//       }
//     }
//     return [i];
//   }
//   var result = index ("hello", "e"); 
//   document.write(result);




//---===============================---QUESTION-=================================06.

// function remvow (sen) {

//     if (sen.length <= 25) {
//         return "the brown fox jumps over the lazy dog";
//     } 
//     return sen.replace(/[aeiouAEIOU]/g , '');
// }

// var sen = "the brown fox jumps over the lazy dog";
// var result = remvow (sen);
// document.write(result);


//---===============================---QUESTION-=================================07.


// function countVowelPairs(sen) {
//     var count = 0;
 
//     for (var i = 0; i < sen.length - 1; i++) {
//         var pair = sen[i] + sen[i + 1];

//         switch (pair) {
//              case "ae": case "ai": case "ao":
//             case "ea": case "ee": case "ei":
//             case "eo": case "eu": case "ia":
//              case "ie":  case "io": case "iu":
//             case "oa": case "oe": case "oi":
//              case "oo": case "ou":case "ua": 
//             case "ue": case "ui": 

//                 count++;
//                 break;
//   }
// }
//   return count;
// }
// var sen = "Pleases read this application and give me gratuity";
// console.log(countVowelPairs(sen)); 



//---===============================---QUESTION-=================================08.

// function meters (km) {
//     return km * 1000;
// }

// function feet(km) {
//     return km * 328.48;
// }

// function inches(km) {
//     return km * 39371.0;
// }

// function centimeters(km) {
//     return km * 10000;
// }
// var userinput = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

// document.write("Distance in meters: " + meters (userinput) + "</br>");
// document.write("Distance in feet: " + feet (userinput) + "</br>");
// document.write("Distance in inches: " + inches (userinput) + "</br>");
// document.write("Distance in centimeters: " + centimeters (userinput) + "</br>");


//---===============================---QUESTION-=================================09.


// function Overtime  (hours) {

//     var regularHours = 40;
//     var overtr = 12.00;
//     var overtp = 0;

//     if (hours > regularHours) {
//         var overth = hours - regularHours;
//         overtp = overth * overtr;
//     }
//     return overtp;

// }
// var hours = 55;
// var overtp = Overtime (hours);
// console.log("overtime pay | Rs: " + overtp);



//---===============================---QUESTION-=================================10.

//  function withd  (tbalance){
// var amount = +prompt("Enter you Amount!")

// if(amount <= tbalance){
// tbalance -= amount;

// alert("widhdraw successful Remaning balance : " + tbalance + " rupees")

// }
// else{
//     alert("invalid balance")
// }
// }
// var tbalance = 5000;
// withd (tbalance)



////////////////////////END///////////////////