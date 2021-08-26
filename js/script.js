// load countries function
const loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
//load countries function call
loadCountries();

//show or display countries function
const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");
  //for each method
  countries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("col");
    //set inner html
    div.innerHTML = ` 
      <div class="card h-100 my-5 shadow-lg p-4">
         <img src="${country.flag}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">Name : ${country.name}</h5>
               <p class="card-text">Capital Name : ${country.capital}</p>
            </div>
            <div class="card-footer text-center">
                <button class="btn btn-danger" onclick="countryDetails('${country.name}')">
                    Country Details
                </button>
            </div>
      </div>
    `;
    //apend child
    countriesDiv.appendChild(div);
  });
};
//country details function
const countryDetails = (name) => {
  // country details api
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data[0]));
};
const displayCountryDetails = (countryDetail) => {
  //get id
  const countryDetailsContainer = document.getElementById("country-details");
  //set inner text
  countryDetailsContainer.innerHTML = `
    <img class="w-50" src="${countryDetail.flag}">
    <h5>name : ${countryDetail.name}<h5>
    <p>Capital :${countryDetail.capital}</p>
    <p>Region :${countryDetail.region}</p>
    <p>Population :${countryDetail.population}</p>

  `;
};
