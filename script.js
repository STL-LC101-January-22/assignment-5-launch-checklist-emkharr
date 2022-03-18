window.addEventListener("load", function () {

    let listedPlanets;

    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {

        let chosenPlanet = pickPlanet(listedPlanets)
        console.log(chosenPlanet);

        addDestinationInfo = addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image)
        console.log(destinationInfo)
    })

    let form = document.querySelector("form")
    let list = document.querySelector("#faultyItems");
    
    form.addEventListener("submit", function (event) {
        
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let submission = formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
        if (!submission) {
            event.preventDefault();
        }
        if (submission) {
            event.preventDefault();
        }
    })
});