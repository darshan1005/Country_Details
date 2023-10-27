let infoBox = document.querySelector('.container .info-box');
let countryName = document.querySelector('.container .search-box input');

let getCountryInfo = (country) => {
    let url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;

    fetch(url).then(res => res.json()).then(data => {
        let info = `<div class="flag-and-name">
            <div class="flag">
                <img class="flag-img" src="${data[0].flags.svg}" alt="${country}">
            </div>
            <h3 class="country-name">${data[0].name.common}</h3>
        </div>
        <div class="other-info">
            <h5>Capital: <span>${data[0].capital}</span></h5>
            <h5>Contitent: <span>${data[0].continents}</span></h5>
            <h5>Population: <span>${data[0].population}</span></h5>
            <h5>Currency: <span>${Object.keys(data[0].currencies)[0]} - 
            ${data[0].currencies[Object.keys(data[0].currencies)].name}
            ( ${data[0].currencies[Object.keys(data[0].currencies)].symbol} )</span></h5>
            <h5>Languages: <span>${Object.values(data[0].languages).join(" ")}</span></h5>
            <h5>Time Zone: <span>${data[0].timezones}</span></h5>
            <h5>Maps:<span>${Object.values(data[0].maps).join(", ")}</span></h5>
            <h5>Borders: <span>${data[0].borders}</span></h5>
        </div>`;

        infoBox.innerHTML = info;
        console.log(data);
    }).catch(()=>{
        if(countryName.value.length == 0){
            alert("Empty input or invalid input cannot generate the results");
        }else{
            infoBox.innerHTML = `<h3 class="invalid-name-message">Please enter a valid country name!</h3>
            <a class="invalid-name-message" target="_blank" href="https://history.state.gov/countries/all">For reference reach this site 👉 All contries</a>
            `;
        }
    })
}

countryName.addEventListener('keyup', (e)=> {
    if(e.key == "Enter" && countryName.value != ''){
        getCountryInfo(countryName.value);
        console.log("function called");
    }
})

getCountryInfo(countryName.value);