// let i=1;
// while (i<=10) {         //1
// console.log(i);
//     i++; 
// }


// let a=20;
// let b=0;                      //2
// let i=1
// while(i<=20){
// if (i%2==0) {
//     b+=i;
// }
// i++;
// }

// console.log(b);



// let a="12345";               //3
// let i=a.length-1;

// while(i>=0){
    
//     console.log(a[i]);
//     i--;
// }



// let a="122";                     //4
// let b="";

// let i=a.length-1;

// while(i>=0){
//     b +=a[i]
    
//   i--
//         }
        
//         if (b==a) {
//             console.log("palindrome");
            
//         }else{
//             console.log("it is not palindrome");
            
//         }



// let b=1;                     //5
// let i=5;
// while(i>0){
// b *=i
//     i--
// }

// console.log(b);



// let a=4;
// let b=4;                              //6
// let operator ="-"

// switch(operator){

//     case "+":
//         console.log("a+b=",a+b);
//         break;

//         case "-":
//         console.log("a-b=",a-b);
//         break;

//         case "*":
//         console.log("axb=",a*b);
//         break;

//         case "/":
//             console.log("a/b=",a/b);
//             break;

//             default:
//                 console.log("you can calculation only +, -, *, / ");
//                 break;

// }



// let a=1;

// switch (a) {                                      //7
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;

//     default:
//         console.log("Please enter onlt 1 to 7 number");
        
//         break;
// }





// let a="t";                                        //8

// switch(true){
//     case a=="a" || a=="e" || a=="i" ||a=="o"||a=="u":
//         console.log("vovel");
//         break;

//         default:
//             console.log("consonant");
            
// }



// let grade="A"                            // 9

// switch (grade) {
//     case "A":
//         console.log("Excellent");
//         break;
//     case "B":
//         console.log("Awesome");
//         break;
//     case "C":
//         console.log("Very good");
//         break;
//     case "D":
//         console.log("good");
//         break;
//     case "F":
//         console.log("Fail");
//         break;

//     default:
//         console.log("write only A grade to A, B, C, D, F");
        
//         break;
// }







let c=prompt("1. Add two numbers \n2. Subtract two numbers \n3. Multiply two numbers \n4. Exit");

if (c=="4") {
    console.log("exit");
    
}else{

let a=prompt("first value");      
let b=prompt("second value");                                     //10
                        

switch(c){

    case "1":
        
        console.log("a+b=",a+b);
console.log(c);

        
        break;

        case "2":
            
        console.log("a-b=",a-b);

        break;

        case "3":
        console.log("axb=",a*b);
        break;

        case 4:
            console.log("exit the program");
            
            default:
                console.log("you can calculation only +, -, *, / ");
                break;

}
}