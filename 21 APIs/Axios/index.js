let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFact();
    console.log(fact)
    let p = document.querySelector("#result")
    p.innerHTML = fact;
});

let url = "https:catfact.ninja/fact";

async function getFact() {
    try {
        let res = await axios.get(url);
        return res.data.fact
        // let res2 = await axios.get(url);
        // console.log(res2.data.fact);
    } catch (err) {
        console.log("Error is: ", err);
        return "No fact found"
    }
}