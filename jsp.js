//1 - Employee Management System

//let empName ="Lakshmi"
//let salary = 20000
//let bonus = 3000
//let totalSalary = salary+bonus

//console.log("Employee Name :",empName)
//console.log("Salary :",salary)
//console.log("Bonus : ",bonus)
//console.log("Total Salary : ",totalSalary)

//console.log("Eligible Bonus : ",salary > 20000)
//salary+=2000
//console.log("Updates Salary: ",salary)

//2 - Simple Interest Calculator

// S.I = (P*R*T)/100

//p = 200000
//r = 6
//t = 2
//si = (p*r*t)/100

//console.log("Amount: ",p)
//console.log("SI :",si)
//console.log("Total Amount : ",(p+si))

//3 - Add 5 subjects , total , Avg

//t = 89
//r = 78
//m = 99
//s = 77
//ss = 98

//total = t+r+m+s+ss
//avg = total/5

//console.log(total)
//console.log(avg)

//4 - Celsius to Fahrenfeit Convertor

//c = 66
//f=(c*9/5)+32
//console.log("Answer : ",f)

//5 - Age calculator

//bday = 2005
//currYear = 2026
//age = currYear - bday
//console.log(age)

//6 - Speed Calculator 

//dis = 330
//time = 4
//speed = dis/time
//console.log("Speed : ", speed , "km/hr")

//7 - Electricity Bill Calculator

//units = 450
//rate = 6
//bills = units*rate
//console.log("Bill : ",bills)

// 8 - Product Price Calc

//price=200
//quantity=5
//totalAmount=price*quantity
//console.log("Total Amount :", totalAmount)

// Task day2-------------------------

//1 - === 

//a = 88
//b = "88"
//console.log(a===b)

//a = 30
//b = 30
//console.log(a===b)

//let name = "Lekshmi";
//if(name === "Lekshmi")
//{
//    console.log("Welcome")
//}
//else{
//    console.log("Invalid user")
//}

//2 - !==

//a = 10
//b = 20
//console.log(a!==b)

//a = 67
//b="67"
//console.log(a!==b)

//let age = 21
//if(age !== 20)
//{
//    console.log("Not 21")
//}

//let password ="1234"
//if(password !== "admin")
//{
//  console.log("wrong password")
//}

//3 - Fahrenheit to celcius

//f = 56.4
//c =(f-32) *5/9
//console.log("Fahrenheit : ",f)
//console.log("celcius : ",c)

//4.killometer to mile

//km = 78
//mile = km * 0.62
//console.log("Miles: ",mile)

//5.miles to kilometer

//mile = 10;
//km = mile * 1.6
//console.log("Kilometers: ",km)

//6.gram to pound

//grams = 1000
//pound = grams * 0.002
//console.log("Pound : ",pound) 

//7. pound to gram

//pounds = 7
//grams = pounds * 453.592
//console.log("Grams : ", pounds)

//8. Distance calculator

//speed = 60
//time = 3
//distance = speed * time
//console.log("distance : ",distance,"km")

//9. Time calculator

//distance = 180
//speed = 50
//time = distance / speed
//console.log("Time: ",time,"Hours")

//10.Leap Year or not
//
//let year = 2020
//if((year % 4 == 0 && year % 100 != 0) || (year % 400 ==0))
//{
//  console.log(year ,"is a leap year")
//}
//else{
//  console.log(year , "is Not a Leap year")
//}

//11 - vowels checking

//ch ='i'
//if(ch == 'a'|| ch =='e' || ch =='i'|| ch =='o'|| ch =='u')
//{
//    console.log("vowel")
//}
//else{
//    console.log("consonant")
//}

//12 - Mobile number validation

//number = "8438602811"
//if(number[0]==" 6" && number.length == 10)
//{
//  console.log("Valid")
//}
//else if(number[0]=="7" && number.length == 10)
//{
//    console.log("Valid")
//}
//else if(number[0]=="8" && number.length == 10)
//{
//    console.log("Valid")
//}
//else if(number[0]=="9" && number.length == 10)
//{
//    console.log("Valid")
//}
//else
//{
//    console.log("Invalid")
//}

//12 - age category

//let age = 21;

//if (age < 0)
//{
//    console.log("Invalid Age");
//}
//else if (age <= 10)
//{
//    console.log("Child");
//}
//else if (age <= 19)
//{
//    console.log("Teenager");
//}
//else if (age <= 59)
//{
//    console.log("Adult");
//}
//else
//{
//    console.log("Senior Citizen");
//}

//Task Day3 ----------------------------------------

//let month = 4
//switch(month)
//{
//    case 1:
//        console.log("January")
//        break
//   case 2:
//        console.log("February")
//        break
//    case 3:
//        console.log("March")
//        break
//    case 4:
//        console.log("April")
//        break
//    case 5:
//        console.log("May")
//        break
//    case 6:
//        console.log("June")
//        break
//    case 7:
//        console.log("July")
//        break
//    case 8:
//        console.log("August")
//        break
//    case 9:
//        console.log("September")
//        break
//    case 10:
//        console.log("October")
//        break
//    case 11:
//        console.log("November")
//        break
//    case 12:
//        console.log("December")
//        break
//    default:
//        console.log("Invalid Month");

//}

//Using if else ladder :

//let month = 8;

//if(month == 1)
//{
//    console.log("January");
//}
//else if(month == 2)
//{
//    console.log("February");
//}
//else if(month == 3)
//{
//    console.log("March");
//}
//else if(month == 4)
//{
//    console.log("April");
//}
//else if(month == 5)
//{
//    console.log("May");
//}
//else if(month == 6)
//{
//    console.log("June");
//}
//else if(month == 7)
//{
//    console.log("july");
//}
//else if(month == 8)
//{
//    console.log("August");
//}
//else if(month == 9)
//{
//    console.log("september");
//}
//else if(month == 10)
//{
//    console.log("October");
//}
//else if(month == 11)
//{
//    console.log("November");
//}
//else if(month == 12)
//{
//    console.log("December");
//}
//else
//{
//    console.log("Invalid Month");
//}

//Using nested if :

//let month = 10;

//if(month >= 1 && month <= 12)
//{
//    if(month == 1)
//    {
//        console.log("January");
//    }
//    else if(month == 2)
//    {
//        console.log("February");
//    }
//    else if(month == 3)
//    {
//        console.log("March");
//    }
//    else if(month == 4)
//    {
//        console.log("April");
//    }
//    else if(month == 5)
//    {
//        console.log("May");
//    }
//    else if(month == 6)
//    {
//        console.log("June");
//    }
//    else if(month == 7)
//    {
//        console.log("july");
//    }
//    else if(month == 8)
//    {
//        console.log("August");
//    }
//    else if(month == 9)
//    {
//        console.log("september");
//    }
//    else if(month == 10)
//    {
//        console.log("October");
//    }
//    else if(month == 11)
//    {
//        console.log("November");
//    }
//    else if(month == 12)
//    {
//        console.log("December");
//    }
//}
//else
//{
//    console.log("Invalid Month");
//}

// Using While loop :

//let month = 1;

//while(month <= 12)
//{
//    console.log(month);
//    month++;
//}














