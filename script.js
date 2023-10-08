let res1 = fetch("https://restcountries.com/v2/all")
.then((data)=> data.json()).then((value)=>console.log(value));

let res = fetch("https://restcountries.com/v2/all")
.then((data)=> data.json()).then((value)=>bar(value));

let container = document.createElement("div")
container.className = "container";

let row = document.createElement("div")
row.className = "row";

container.append(row);

function bar(value){
    for(let i = 0; i<value.length;i++){
        row.innerHTML += `
        <div class = "col-md-4">
            <div class="card border-primary mb-3" style="max-width: 18rem;">
                <div class="card-header text-white bg-dark" style ="text-align: center">${value[i].name}</div>
            <div class="card-body text-primary">
                <img src=${value[i].flags.png} class="card-img-top" alt="...">
                <p class="card-text" style ="text-align: center">Capital:${value[i].capital}</p>
                <p class="card-text" style ="text-align: center">Region:${value[i].region}</p>
                <p class="card-text" style ="text-align: center">LatLong:${value[i].latlng}</p>
            </div>
        </div>
        `
    }
    document.body.append(container)
}