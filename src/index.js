function displayitinerary(response) {
    new Typewriter("#itinerary", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
  });
}


function generateitinerary(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ba4od3a834c838682t553fe590d57caf";
  let context =
    "You are a travel expert and love to write short itinerarys for visitors. Your mission is to generate a 3 day itinerary in basic HTML. Separate each day with a <br /> and a <strong> element. Make sure to follow the user instructions. Do not include a title to the itinerary. Sign the itinerary with 'SheCodes AI' inside a <strong> element at the end of the itinerary and NOT at the beginning";
  let prompt = `User instructions: Create a three-day itinerary for a visitor to ${instructionsInput.value}, including must-see attractions and recommended dining spots.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let itineraryElement = document.querySelector("#itinerary");
  itineraryElement.classList.remove("hidden");
  itineraryElement.innerHTML = `<div class="generating">⏳ Generating an itinerary for ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayitinerary);
}

let itineraryFormElement = document.querySelector("#itinerary-generator-form");
itineraryFormElement.addEventListener("submit", generateitinerary);