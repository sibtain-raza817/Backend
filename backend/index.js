import express from 'express';

const app = express();

// app.get('/', (req, res) =>{
//     res.send("Server started");
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
  {
    id: 1,
    category: "Programming",
    setup: "Why do JavaScript developers wear glasses?",
    punchline: "Because they don't C#."
  },
  {
    id: 2,
    category: "Programming",
    setup: "Why was the JavaScript developer sad?",
    punchline: "Because they didn't Node how to Express themselves."
  },
  {
    id: 3,
    category: "Programming",
    setup: "Why did the JavaScript array break up with the object?",
    punchline: "Because it found someone more indexed."
  },
  {
    id: 4,
    category: "Programming",
    setup: "Why did the developer go broke?",
    punchline: "Because they used up all their cache."
  },
  {
    id: 5,
    category: "Programming",
    setup: "Why did the function return early?",
    punchline: "Because it didn't want to deal with the callback."
  }
];

res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
    
})