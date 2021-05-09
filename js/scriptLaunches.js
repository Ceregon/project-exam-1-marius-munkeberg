const url="https://api.spacexdata.com/v4/launches/upcoming";

const resultsContainer = document.querySelector("tbody");

async function getLaunches() {
  const response = await fetch(url);

  const results = await response.json();

  const launches = results;

  for (let i = 0; i < launches.length; i ++) {
    console.log(launches[i].name);

    const parsedDate = Date.parse(launches[i].date_utc);

    const date = new Date(parsedDate);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var hours = "";

    var minutes = "";

    var day = "";

    if (launches[i].date_precision === "hour") {
      hours = date.getHours();
      minutes = date.getMinutes();
      day = date.getDate();
      if (hours < 10) {
        hours = "0"+hours
      };
      if (minutes < 10) {
        minutes = "0"+minutes
      };
    };

    if (launches[i].date_precision === "day") {
      day = date.getDate();
    };

    resultsContainer.innerHTML += `<tr>
                                  <td>${monthNames[date.getMonth()]} ${day} ${date.getFullYear()}</td>
                                  <td>${hours}:${minutes}</td>
                                  <td>${launches[i].name}</td>
                                  </tr>`;
  }

  console.log(results);
}

getLaunches();
