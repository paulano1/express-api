const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const { addBook, deleteBook, loadBooks } = require('./helper');

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

app.get("/", (req, res) => res.type('html').send(html));




app.get("/", (req, res) => {
  res.type('html').send(html);
});

app.get("/books", (req, res) => {
  //TODO - Add code to fetch the books from the JSON file
  res.json(books);
});

// Endpoint to add a new book
app.post("/books", (req, res) => {
  const newBook = req.body; // assuming the new book details are passed in the body of the request
  if (!newBook.title || !newBook.author || !newBook.isbn) {
    return res.status(400).json({ error: 'Please provide title, author, and ISBN' });
  }
  //TODO - Add code to add the new book
  res.status(201).json(newBook);
});

// Endpoint to delete a book by ID
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  //TODO - Add code to delete the book with the specified ID

  if (booksBefore.length === booksAfter.length) {
    res.status(404).json({ error: 'Book not found' });
  } else {
    res.status(200).json({ message: 'Book deleted successfully' });
  }
});






const server = app.listen(port, () => console.log(`Running on localhost:${port}`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Dragon Hacks Team!
    </section>
  </body>
</html>
`
