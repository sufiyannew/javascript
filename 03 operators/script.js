//operators

        // Arithmetic operators
        var num1 = 10;
        var num2 = 5;
        console.log("Addition: ", num1 + num2); // Output: 15
        console.log("Subtraction: ", num1 - num2); // Output: 5
        console.log("Multiplication: ", num1 * num2); // Output: 50
        console.log("Division: ", num1 / num2); // Output: 2
        
        // Assignment operators
        var a = 10;
        a += 5; // a = a + 5
        console.log("a: ", a); // Output: 15
        
        a -= 5; // a = a - 5
        console.log("a: ", a); // Output: 10

        a *= 5; // a = a * 5
        console.log("a: ", a); // Output: 50
        
        a /= 5; // a = a / 5
        console.log("a: ", a); // Output: 10
        
        // Comparison operators
        var x = 10;
        var y = 5;
        console.log("x > y: ", x > y); // Output: true
        console.log("x < y: ", x < y); // Output: false
        console.log("x >= y: ", x >= y); // Output: true
        console.log("x <= y: ", x <= y); // Output: false
        console.log("x === y: ", x === y); // Output: false (different types)
        console.log("x == y: ", x == y); // Output: true (equal value, different types)
        
        // Logical operators
        var condition1 = true;
        var condition2 = false;
        console.log("Condition1 && Condition2: ", condition1 && condition2); // Output: false
        console.log("Condition1 || Condition2: ", condition1 || condition2); // Output: true
        
        // Bitwise operators
        var bitwiseNum = 10;
        console.log("Bitwise AND: ", bitwiseNum & 5); // Output: 2
        console.log("Bitwise OR: ", bitwiseNum | 5); // Output: 15
        console.log("Bitwise XOR: ", bitwiseNum ^ 5); // Output: 13
        console.log("Bitwise NOT: ", ~bitwiseNum); // Output: -11
        console.log("Bitwise left shift: ", bitwiseNum << 1); // Output: 20