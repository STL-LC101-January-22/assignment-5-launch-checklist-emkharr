// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let destinationInfo = document.getElementById("missionTarget");

    destinationInfo.innerText = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${json.name}</li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src=""> `
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    }; 
    
    if (isNaN(testInput)) {
        return "Not a Number"
    };
    
    if (!isNaN(testInput)) {
        return "Is a Number"
    };
};



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let launchStatusText = document.getElementById("launchStatus");
    let launchStatusStyle = document.querySelector("#launchStatus");
    
console.log(pilot);

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required.")
        return false;
    } else if  (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
       alert ("Pilot and Copilot names must be letters, Fuel level and Cargo Mass must be numbers.")
        return false;
    };

//add another else if with return false

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    pilotStatus.textContent = `Pilot ${pilot} Ready.`;
    copilotStatus.textContent = `Copilot ${copilot} Ready.`;
    list.style.visibility = "visible";


    if(fuelLevel < 10000 && cargoLevel > 10000) {
        launchStatusText.textContent = "Shuttle Not Ready for Launch";
        launchStatusStyle.style.color = "rgb(199, 37, 78)";
        fuelStatus.textContent = `Fuel level too low for launch`;
        cargoStatus.textContent = `Cargo mass too heavy for launch`;
        // return false;
    } else if(fuelLevel < 10000) {
        launchStatusText.textContent = "Shuttle Not Ready for Launch";
        launchStatusStyle.style.color = "rgb(199, 37, 78)";
        fuelStatus.textContent = `Fuel level too low for launch`;
        cargoStatus.textContent = `Cargo mass low enough for launch`;
        // return false;
    } else if(cargoLevel > 10000) {
        launchStatusText.textContent = "Shuttle Not Ready for Launch";
        launchStatusStyle.style.color = "rgb(199, 37, 78)";
        fuelStatus.textContent = `Fuel level high enough for launch`;
        cargoStatus.textContent = `Cargo mass too heavy for launch`;
        // return false;
    } else {
        launchStatusText.textContent = "Shuttle is Ready for Launch";
        launchStatusStyle.style.color = "rgb(65, 159, 106)";
        fuelStatus.textContent = `Fuel level high enough for launch`;
        cargoStatus.textContent = `Cargo mass low enough for launch`;
        // return true;
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://education.launchcode.org/intro-to-professional-web-dev/assignments/launch-checklist.html").then(function (response) {
        response.json().then(function (json){
            return response.json;
        });
    });
    return planetsReturned;
};

function pickPlanet(planets) {
    for(let i = 0; i < planets.length; i++) {
        let i = Math.floor(Math.random() * planets.length);
        return planets[i];
    };
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
