// Write your JavaScript code here!
// import * as helper  from "./scriptHelper.js";

window.addEventListener("load", function() {
        alert("Reminder: All fields required.");
        
    let form = document.getElementById("launchForm").firstElementChild;

    form.addEventListener("submit", function(event){
        event.preventDefault();
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
})

//validate input validates everything with the alerts 

    // if everything is ready for launch - green ready to launch 
    // if input is valid but outside of the right numbers - update pilot names, thing that's wrong, and bad note
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
   
});


