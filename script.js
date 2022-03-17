// Write your JavaScript code here!
// import * as helper  from "./scriptHelper.js";

// const { formSubmission } = require("./scriptHelper");


window.addEventListener("load", function() {
    
        alert("Reminder: All fields required.");
        
    let form = document.getElementById("launchForm").firstElementChild;
    // let faultyItems = document.getElementById("faultyItems");

    // form.addEventListener("submit", function(event){
    //     event.preventDefault
        
    //     let formSubmission = formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoLevel);
        
    //     formSubmission;
    // })

    // form.addEventListener("submit", function(event) {
    //     let submission = formSubmission(window.document, listVar, pilotName.value, copilotName.value, fuelLevelAmnt.value, cargoMass.value);
    //     if(!submission) {
    //         event.preventDefault();
    //     }
    //     if(submission) {
    //         event.preventDefault();
    //     };


    // let form = document.querySelector("form")
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevelAmnt = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let listVar = document.querySelector("#faultyItems");
    listVar.style.visibility = "hidden";
    // let formSubmission = formSubmission(document, listVar, pilotName, copilotName, fuelLevelAmnt, cargoMass);
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        formSubmission;
        
        // if(formSubmission === false) {
        //     event.preventDefault();
        // } else if(formSubmission === true) {
        //     event.preventDefault();
        // };
        
    })

    });
        

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
   
// });


