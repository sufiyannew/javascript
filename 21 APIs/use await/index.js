// let url = "https://catfact.ninja/fact"

// async function getFact() {
//     try{
//     let res = await fetch(url) // agar await use nai karenge to res pring hoga sidha isliye awair key use karenge
//     let data = await res.json()
//     console.log(data.fact)

//     let res2 = await fetch(url) // agar await use nai karenge to res pring hoga sidha isliye awair key use karenge
//     let data2 = await res2.json()
//     console.log(data2.fact)
//     }
//     catch(err){
//         console.log(err)
//     }
    
// }

let url = "https://catfact.ninja/fact"
fetch(url)
.then((res) => {
   return res.json();
})
.then((data) =>{
    console.log("data 1 = ",data.fact )
    return fetch(url);
})
.then((res) => {
    return res.json();
})
.then((data2) => {
    console.log("data 2 = ",data2.fact)
})
.catch((error) => {
    console.log("Promise rejected with ERROR:", error);
});