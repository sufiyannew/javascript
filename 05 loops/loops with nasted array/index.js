let fruit = [
    ["apple", "mango", "banana", "lichi", "orange"],
    ["seb", "aam", "kela", "lichi", "santra"]
]

for (let i=0; i<fruit.length; i++){
    console.log(i, fruit[i]);
    for (j=0; j<fruit[i].length; j++){
        console.log(`j = ${j}, ${fruit[i][j]}`)
    }
}
