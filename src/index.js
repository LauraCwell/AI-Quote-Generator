function displayQuote(response) {
  console.log("quote generated");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "o328b4b5c85378c045400at05641afca";
  let context =
    "You are an inspirational quote expert, and know many famous short quotes. Your mission is to generate a short quote in basic HTML, following this structure: <p> 'Life is what happens when you're busy making other plans.' <br/> - John Lennon <p/> . Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate an English quote about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
