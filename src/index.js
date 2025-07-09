function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "'Be the change that you wish to see in the world.'",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
