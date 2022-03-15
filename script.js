// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");
// const name = document.getElementById("pilotId")



window.addEventListener("load", function () {

    let list = document.getElementById("faultyItems")
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")

    let form = document.querySelector("form")
    // let subButton = document.getElementById("formSubmit")
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let pilotInput = document.querySelector("input[name=pilotName]");
        // let pilotName = pilotInput.value
        let copilotInput = document.querySelector("input[name=copilotName");
        // let copilotName = copilotInput.value
        let fuelLevelInput = document.querySelector("input[name=fuelLevel");
        // let fuelLevel = fuelLevelInput.value
        let cargoLevelInput = document.querySelector("input[name=cargoMass");
        // let cargoLevel = cargoLevelInput.value

        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel);
    })



    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
})










