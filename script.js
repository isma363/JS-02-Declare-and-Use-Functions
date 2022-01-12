// ejercicio 1
function payment(transacctions,total){
    var transacctions= parseInt(prompt("Number of Transacctions"));
    var total=parseInt(prompt("Total cost of payments"));
    alert("the final payment is: "+((transacctions*3)+total)*1.01);
}
payment();


//ejercicio 2

function names(a,b,c){
    var a= prompt("Tell me your name: ")
    var b= prompt("Tell me your name: ")
    var c= prompt("Tell me your name: ")
    console.log("Welcome "+a+", "+b+", "+c+".");
}
names();

//part 2

function ages(year){
    var year =prompt("Tell me you year of Birth: ");
    var date= 2022
    alert(date-year);
}
ages();


//part 3

function nameAge(n1,n2,n3,a1,a2,a3){
    var n1= prompt("Tell me your name: ");
    var a1=parseInt(prompt("Tell me your age: "+n1));
    var n2= prompt("Tell me your name: ");
    var a2=parseInt(prompt("Tell me your age: "+n2));
    var n3= prompt("Tell me your name: ");
    var a3=parseInt(prompt("Tell me your age: "+n3));
    console.log("Welcome "+n1+", "+"you are age "+a1+". Welcome "+n2+", "+"you are age "+a2+". Welcome "+n3+","+"you are age "+a3+".");
}
//+a+", "+"you are age "+a1+". "+b+", "+"you are age "+a2+". "+c+"."+"you are age "+a3+);
nameAge();*/ 

//challenge
function grade (){
    var grade = parseInt(prompt ("Tell me the grade"));
    if(grade >= 5 && grade <= 8 ){
        alert(true);
    }
    else if(grade > 8 && grade < 11) {
        alert ("Excellent")
    } 
    else if (grade == 11){
        alert ("Perfect")
    }
    else if(grade >= 0 && grade < 5){
        alert(false);
    }
    else{
        alert("Out of range")
    }
}
grade();
