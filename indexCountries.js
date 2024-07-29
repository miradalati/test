fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(json => {
        let countries = document.getElementById("countries");

        json.forEach(element => {
            let hr = document.createElement("hr");
            let box = document.createElement("div");

            let countryName = document.createElement("div");
            countryName.innerHTML = element.name.common;

            let countryFlag = document.createElement("img");
            countryFlag.src = element.flags.png;

            box.appendChild(hr);

            countryFlag.addEventListener('click', () => {
                    let countryPop = document.createElement('div');
                    countryPop.innerHTML = `The population of ${element.name.common} is ${element.population} people.`;
                    box.appendChild(countryPop);
            });

            box.appendChild(countryName);
            box.appendChild(countryFlag);
            countries.appendChild(box);
        });
    });