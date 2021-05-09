const url="https://api.spacexdata.com/v4/rockets";

const resultsContainer = document.querySelector(".rockets-container");

async function getRockets() {
  const response = await fetch(url);

  const results = await response.json();

  const rockets = results;

  resultsContainer.innerHTML = "";

  for (let i = 0; i < rockets.length; i ++) {
    console.log(rockets[i].name);

    resultsContainer.innerHTML += `<div class="rocket"><h2>${rockets[i].name}</h2>
                                  <img class="rocket-image" src="${rockets[i].flickr_images[0]}" alt="Image of ${rockets[i].name}">
                                  <p>${rockets[i].description}</p>
                                  <div>First flight: ${rockets[i].first_flight}</div>
                                  <div>Height: ${rockets[i].height.meters} m</div>
                                  <div>Diameter: ${rockets[i].diameter.meters} m</div>
                                  <div>Weight: ${rockets[i].mass.kg} kg</div>
                                  <div>Number of engines: ${rockets[i].engines.number}</div></div>`;
  }

  console.log(results);
}

getRockets();
