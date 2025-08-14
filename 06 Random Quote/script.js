const newQuote = document.querySelector("#new-quote");
const displayQuote = document.querySelector("#quote");
const displayAuthor = document.querySelector("#author");
const getTags = document.querySelector("#tags");

showRandomQuote();

async function showRandomQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    if (!res.ok) throw new Error(`HTTP erroe! Status: ${res.status}`);

    const data = await res.json();

    displayQuote.innerHTML = data.content;
    displayAuthor.innerHTML = `~${data.author}`;
    getTags.innerHTML = `Tags - <i>${
      data.tags && data.tags.length ? data.tags.join(", ") : "No tags"
    }</i>`;
  } catch (err) {
    console.error("Error fetching quote: ", err);
    displayQuote.innerHTML = "Oops! Coudn't fetch a quote";
    displayAuthor.innerHTML = "";
    getTags.innerHTML = "";
  }
}

newQuote.addEventListener("click", () => {
  showRandomQuote();
});
