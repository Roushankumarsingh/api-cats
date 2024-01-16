const URL = "https://cat-fact.herokuapp.com/facts" ; 
let btn = document.querySelector("button") ; 
let h1 = document.querySelector("h1") ; 
const getFactsCat = async() =>
{
    let response = await fetch(URL) ; 
    console.log(response) ; 
    let data = await response.json() ; 
    console.log(data[Math.floor(Math.random()*5)].text) ; 
    h1.innerText = data[Math.floor(Math.random()*5)].text ; 
}

// const getFactsCat = () =>
// {
//     let promise = fetch(URL).then((res) =>
//     {
//         return res.json() ; 
//     }).then((response) =>
//     {
//         console.log(response[0].text) ; 
//     })
// }
btn.addEventListener("click",getFactsCat) ; 