let url = "https://catfact.ninja/fact"

async function getFact() {
    try{
    let res = await fetch(url) // agar await use nai karenge to res pring hoga sidha isliye awair key use karenge
    let data = await res.json()
    console.log(data.fact)

    let res2 = await fetch(url) // agar await use nai karenge to res pring hoga sidha isliye awair key use karenge
    let data2 = await res2.json()
    console.log(data2.fact)
    }
    catch(err){
        console.log(err)
    }
    
}