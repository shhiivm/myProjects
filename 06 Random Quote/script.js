const apiKey = [
  {
    id: "01",
    content:
      "Does wisdom perhaps appear on the earth as a raven which is inspired by the smell of carrion",
    author: "Friedrich Nietzsche",
    tags: ["Wisdom"],
  },
  {
    id: "02",
    content: "Always do your best. What you plant now, you will harvest later.",
    author: "Og Mandino",
    tags: ["Inspiration", "Motivation"],
  },
  {
    id: "03",
    content:
      "To be what we are, and to become what we are capable of becoming, is the only end of life.",
    author: "Robert Louis Stevenson",
    tags: ["Wisdom", "Famous Quotes"],
  },
  {
    id: "04",
    content: "Remember that the most valuable antiques are dear old friends",
    author: "H. Jackson Brown Jr.",
    tags: ["Friendship", "Wisdom"],
  },
  {
    id: "05",
    content: "Either I will find a way, or I will make one.",
    author: "Philip Sidney",
    tags: ["Wisdom", "Famous Quotes", "Inspiration", "Motivation"],
  },
];

const newQuote = document.querySelector("#new-quote");
const displayQuote = document.querySelector("#quote");
const displayAuthor = document.querySelector("#author");
const getTags = document.querySelector("#tags");

newQuote.addEventListener("click", () => {
  let randQuote = Math.floor(Math.random() * apiKey.length);
  displayQuote.innerHTML = apiKey[randQuote].content;
  displayAuthor.innerHTML = `~${apiKey[randQuote].author}`;
  getTags.innerHTML = `Tags - <i>${apiKey[randQuote].tags}</i>`;
});
