 //for loop
 console.log("for loop")
 for (var i = 0; i <= 10; i=i+1) {
     console.log(i);
 }


 console.log("reverse loop")
 for (var i = 10; i >= 0; i--) {
     console.log(i);
 }

 //while loop
 console.log("While loop")
 var i = 1;
 while(i <=10){
     console.log(i);
     i++;
 }

 //while break
 console.log("while break")
 var i = 1;
 while(i <=10){
     if (i == 5){
         break;  //break if i == 5 now be print 1234
     }
     console.log(i);
     i++; // increment i after print  
 }



 //break statement
 console.log("break statement")
 for (var i = 0; i <= 10; i++) {
     if (i == 5) {
         break;  //break if i == 5 now be print 1234 
     }
     console.log(i);
 }

 //break statement
 console.log("continue statement")
 for (var i = 0; i <= 10; i++) {
     if (i == 5) {
         continue;   // skip when 1=5 now print 1-4 and 6-10
     }
     console.log(i);


     //do-while loop
     console.log("do-while loop")
     var i = 1;
     do {
         console.log(i);
         i++;
     } while(i <= 10);
 }
