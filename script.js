// const tbody = document.querySelector('tbody')

// const td=document.createElement('td')

// tr.append(td)


// async function fetchData() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()


//     let items;
//     data.forEach(element => {
//         items = document.createElement('tr')
//         items.innerHTML = `<td>${element.name}</td>
//         <td>${element.email}</td>
//         <td>${element.phone}</td>`
//         tbody.append(items)
//     });



// }
// fetchData()

// setInterval(displayHello, 100);

// function displayHello() {
//   document.getElementById("demo").innerHTML += "salam ";
// }
let count=0
const myInt=setInterval(
    function () {
        document.getElementById("demo").innerHTML=count++
    }
    , 1000)
const stop=document.getElementById('stop')
const reset=document.getElementById('reset')
const start=document.getElementById('start')
stop.addEventListener('click',(e)=>{
    clearInterval(myInt);
})
reset.addEventListener('click',(e)=>{
    count=0
})
start.addEventListener('click',(e)=>{
    
     setInterval(
        function () {
            document.getElementById("demo").innerHTML=count++
        }
        , 1000)
})

