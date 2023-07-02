const getCountriesData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    return response.json();
}

const countriesData = getCountriesData();

countriesData.then((data) => {
    let ul = document.getElementById("countries-list");
    let namesList = [];
    for (const value of data) {
        namesList.push(value.name.common);
    }

    namesList.sort();

    for (const name of namesList) {
        let li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
    }
}).catch((error) => {
    console.log(error);
});
