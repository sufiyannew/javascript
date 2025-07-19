let url = "https://catfact.ninja/fact"

async function getFact() {
    let res = await fetch(url) // agar await use nai karenge to res pring hoga sidha isliye awair key use karenge
    console.log(res)
}